git add .
echo "Enter Commit Message: "
read commit_message
echo Commit Message: $commit_message
git commit -m "$commit_message"
git push origin main
