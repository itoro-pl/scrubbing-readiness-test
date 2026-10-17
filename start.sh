#!/bin/sh
# ITORO — Test gotowości prefiksów do scrubbing center: uruchomienie lokalne (Linux, macOS).
# Wymaga Pythona 3.8+. Listy prefiksów: zainstaluj bgpq4
#   Debian/Ubuntu: sudo apt install bgpq4     macOS: brew install bgpq4
cd "$(dirname "$0")" || exit 1
if command -v python3 >/dev/null 2>&1; then exec python3 serwer.py "$@"; fi
if command -v python >/dev/null 2>&1; then exec python serwer.py "$@"; fi
echo "Nie znaleziono Pythona 3. Zainstaluj go (np. sudo apt install python3) i uruchom ponownie." >&2
exit 1
