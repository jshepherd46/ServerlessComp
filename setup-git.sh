#!/bin/bash
# ServerlessComp — initial git setup
# Run this from C:\Users\JShepherd\Documents\My_Git_Repositories\ServerlessComp

git init
git add .
git commit -m "Initial commit: course scaffold, M1 Lesson 1 complete"

# After creating the repo on GitHub:
git remote add origin https://github.com/jshepherd46/ServerlessComp.git
git branch -M main
git push -u origin main

# Enable GitHub Pages:
# Settings → Pages → Source: Deploy from branch → main → / (root) → Save
# Your site: https://jshepherd46.github.io/ServerlessComp/
