#!/usr/bin/env bash

printf "\n----> Deploying files\n"

# Step 1
printf "\n----> Clear out the previous distribution on the target.\n"
ssh ecdye.click -- << ENDSSH
rm -rf services/startup/public
mkdir -p services/startup/public
ENDSSH

# Step 2
printf "\n----> Copy the distribution package to the target.\n"
scp -r src/* ecdye.click:services/startup/public
