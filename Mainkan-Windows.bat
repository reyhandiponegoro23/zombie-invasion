@echo off
cd /d "%~dp0"
where python >nul 2>nul
if errorlevel 1 (
  echo Python belum terpasang. Pasang dari https://www.python.org/downloads/ lalu jalankan file ini lagi.
  pause
  exit /b
)
echo Server berjalan di http://localhost:8765  (tutup jendela ini untuk berhenti)
start "" http://localhost:8765/
python -m http.server 8765
