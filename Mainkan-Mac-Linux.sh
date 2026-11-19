#!/bin/sh
cd "$(dirname "$0")"
echo "Server berjalan di http://localhost:8765  (tekan Ctrl+C untuk berhenti)"
( sleep 1; (xdg-open http://localhost:8765/ || open http://localhost:8765/) >/dev/null 2>&1 ) &
python3 -m http.server 8765
