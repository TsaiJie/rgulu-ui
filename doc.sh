#!/usr/bin/env zsh
yarn docs:build
git add .
git commit -m "更新部署docs"
git push 
