@echo off
:input
set /p msg=�ύ��Ϣ: 
if "%msg%"=="" echo "�в����յ����ύ��" && goto input
echo ����ͬ������...
git pull origin main
echo �����ύ...
git add *
git commit -m "%msg%"
echo �����ϴ�...
git push origin main
echo �ϴ�������ɣ������κ��������ͼ��ѯ��
pause
exit