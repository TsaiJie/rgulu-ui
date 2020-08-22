#!/usr/bin/env zsh
yarn docs:build
git checkout gh-pages
mv -f docs/* ./
git add .
git commit -m "更新部署GitHubPages"
git push  gh-pages
git checkout master