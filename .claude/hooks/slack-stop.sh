#!/usr/bin/env bash
# Stop 훅(작업 완료) → Slack 웹훅 알림
# 실패해도 Claude 작업을 방해하지 않도록 항상 정상 종료합니다.
set +e

# shellcheck source=slack-common.sh
source "$(dirname "${BASH_SOURCE[0]}")/slack-common.sh"

read_input
send_slack "✅ 작업 완료"

exit 0
