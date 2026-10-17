@echo off
rem ITORO - Test gotowosci prefiksow do scrubbing center: uruchomienie lokalne (Windows).
rem Wymaga Pythona 3.8+ (https://www.python.org/downloads/ - zaznacz "Add python.exe to PATH").
cd /d "%~dp0"
where py >nul 2>nul && (py -3 serwer.py %* & goto :eof)
where python >nul 2>nul && (python serwer.py %* & goto :eof)
echo.
echo Nie znaleziono Pythona. Zainstaluj go z https://www.python.org/downloads/
echo (podczas instalacji zaznacz "Add python.exe to PATH") i uruchom start.bat ponownie.
echo.
pause
