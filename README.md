# Rejestr nadgodzin — gotowy repozytorium do zbudowania EXE (Electron)

## Jak uzyskać instalator EXE **bez instalowania czegokolwiek** u siebie
1. Zaloguj się do GitHub i utwórz nowe repozytorium (prywatne lub publiczne).
2. Pobierz ten ZIP i **wrzuć całą zawartość** do repo (Upload files).
3. Wejdź w zakładkę **Actions** → uruchom workflow **Build Windows EXE (Electron)** (Run workflow).
4. Po kilku minutach w jobie pojawi się sekcja **Artifacts** — pobierz plik `Rejestr-Nadgodzin-1.0.0-win.exe`.

> Jeśli chcesz zmienić ikonę, podmień `icon.png` (512×512).

## Lokalny start (opcjonalnie)
```
npm install
npm run start
```