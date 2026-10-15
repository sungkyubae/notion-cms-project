#!/usr/bin/env bash
# Slack 알림 훅 공통 함수 (직접 실행하지 않고 source 해서 사용)
# - jq 없이 동작하도록 sed로 JSON 값을 추출합니다.
# - DRY_RUN=1 이면 전송 대신 요청 본문(JSON)만 출력합니다.

INPUT=""

# stdin으로 전달되는 훅 JSON 읽기
read_input() {
  INPUT=$(cat)
}

# JSON 문자열 값 추출 (이스케이프된 상태 그대로 반환 → 출력 JSON에 바로 삽입 가능)
# LC_ALL=C: 바이트 단위로 처리 (Git Bash의 UTF-8 로케일에서 이모지 같은 4바이트 문자가 매칭을 깨뜨림)
json_field() {
  printf '%s' "$INPUT" | LC_ALL=C sed -n 's/.*"'"$1"'":"\(\(\\.\|[^"\\]\)*\)".*/\1/p' | head -n 1
}

# cwd의 마지막 디렉토리명을 프로젝트 이름으로 사용
project_name() {
  local cwd
  cwd=$(json_field cwd)
  cwd=${cwd//\\\\/\/}
  cwd=${cwd%/}
  if [ -z "$cwd" ]; then
    echo "unknown"
    return
  fi
  basename "$cwd"
}

# 프로젝트 루트의 .env에서 SLACK_WEBHOOK_URL만 로드 (이미 설정돼 있으면 유지)
load_env() {
  [ -n "$SLACK_WEBHOOK_URL" ] && return 0
  local dir line
  dir="${CLAUDE_PROJECT_DIR:-$(pwd)}"
  line=$(grep -m 1 '^SLACK_WEBHOOK_URL=' "$dir/.env" 2>/dev/null) || return 0
  line=${line#SLACK_WEBHOOK_URL=}
  line=${line//$'\r'/}
  line=${line#[\"\']}
  line=${line%[\"\']}
  SLACK_WEBHOOK_URL=$line
}

# 한국 표준시 기준 YYYY-MM-DD HH:mm:ss (Git Bash에서는 Asia/Seoul이 UTC로 동작하므로 POSIX 형식 사용)
now_kst() {
  TZ=KST-9 date '+%F %T'
}

# 슬랙 전송: send_slack <상태> [메시지]
send_slack() {
  local status=$1 extra=$2 text body
  text="$status\n• 프로젝트: $(project_name)\n• 상태: $status\n• 시간: $(now_kst)"
  if [ -n "$extra" ]; then
    text="$text\n• 메시지: $extra"
  fi
  body="{\"text\":\"$text\"}"

  if [ -n "$DRY_RUN" ]; then
    printf '%s\n' "$body"
    return 0
  fi

  # 웹훅 URL이 없으면 조용히 종료 (Claude 작업을 방해하지 않음)
  load_env
  [ -z "$SLACK_WEBHOOK_URL" ] && return 0

  printf '%s' "$body" | curl -s --max-time 5 -o /dev/null \
    -H "Content-Type: application/json; charset=utf-8" \
    --data-binary @- "$SLACK_WEBHOOK_URL"
}
