#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 推送 notes 目录到 https://github.com/yungsem/notes
git add .
git commit -m 'doc: add notes'
git push

# 先推送 note 目录下的内容到 https://github.com/yungsem/note
# cd docs/note
# git add .
# git commit -m 'doc: add notes'
# git push

# cd ../../

# 生成静态文件
pnpm docs:build

# 进入生成的文件夹
cd docs/.vitepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'
git branch -M main

# 如果发布到 https://<USERNAME>.github.io
git push -f git@github.com:yungsem/yungsem.github.io.git main

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

cd -