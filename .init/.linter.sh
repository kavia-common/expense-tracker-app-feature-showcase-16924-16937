#!/bin/bash
cd /home/kavia/workspace/code-generation/expense-tracker-app-feature-showcase-16924-16937/expense_tracker_video_frontend
npm run lint
ESLINT_EXIT_CODE=$?
npm run build
BUILD_EXIT_CODE=$?
if [ $ESLINT_EXIT_CODE -ne 0 ] || [ $BUILD_EXIT_CODE -ne 0 ]; then
   exit 1
fi

