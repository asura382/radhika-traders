@echo off
setlocal
cd /d "%~dp0"
echo Starting Radhika Traders preview with a clean Vite dependency scan...
call npm run dev:clean
endlocal
