#!/usr/bin/env bash
# Notification 훅(권한 요청) → Slack 웹훅 알림
# 실패해도 Claude 작업을 방해하지 않도록 항상 정상 종료합니다.
set +e

# shellcheck source=slack-common.sh
source "$(dirname "${BASH_SOURCE[0]}")/slack-common.sh"

read_input
message=$(json_field message)
send_slack "🔐 권한 요청 대기" "${message:-승인이 필요합니다.}"

exit 0
