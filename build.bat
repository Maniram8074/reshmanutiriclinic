@echo off
echo Assembling sections into index.html...
python build.py 2>nul || node build.js
pause
