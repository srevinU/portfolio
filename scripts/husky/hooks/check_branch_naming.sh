#!/usr/bin/env bash
set -e

local_branch_name="$(git rev-parse --abbrev-ref HEAD)"

valid_branch_regex='^((feature|fix)\/[a-zA-Z0-9\-]+)$'

message="Branch names in this project must adhere to this contract: $valid_branch_regex. Your commit will be rejected. You should rename your branch to a valid name and try again."

if [[ ! $local_branch_name =~ $valid_branch_regex ]]; 
then
    echo "$message"
    exit 1
else 
    echo "Branch name validated"
fi

exit 0