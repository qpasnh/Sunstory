@echo off
:input
set /p msg=提交信息: 
if "%msg%"=="" echo "有病，空的能提交吗？" && goto input
echo 正在同步更改...
git pull origin main
echo 正在提交...
git add *
git commit -m "%msg%"
echo 正在上传...
git push origin main
echo 上传程序完成，如有任何问题请截图咨询。
pause
exit