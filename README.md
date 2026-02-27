# Weather App

Projekt, který jsem vytvořil pro vlastní potřebu rychlého zobrazení počasí.

Po zadání města se zobrazí teplota, vlhkost, rychlost větru, tlak a jestli je jasno, polojasno atd. Nadále je v aplikaci implementováno počasí na 5 dní dopředu - pouze teplota. Vše aplikace natahuje z API OpenWeather.

## Tech stack
- React
- Typescript
- Tailwind
- Vite

## Instalace

1. Naklonování repozitáře
```bash
git clone https://github.com/jakubjanak/weatherapp.git
```
2. Přesunutí se do složky projektu
```bash
cd weatherapp
```
3. Instalace
```bash
npm install
```
4. Vytvoření .env a přidání vlastního API klíče
```bash
touch .env
```
API klíč si vygenerujeme na stránkách OpenWeather ve svém profilu: https://openweathermap.org/api. Následně ho vložíme do souboru .env. Proměnnou musíme pojmenovat VITE_OPENWEATHER_API_KEY.

4. Spuštění
```bash
npm run dev
```

## Screenshot z aplikace
![weatherapp_screen](https://github.com/user-attachments/assets/5135281a-9c89-4068-bd6e-2ecd8e7bb093)

# Autor

**Jakub Janák**
- GitHub: [@jakubjanak](https://github.com/jakubjanak)
- Email: jakub.janak@icloud.com
- LinkedIn: [here](https://www.linkedin.com/in/jakub-jan%C3%A1k-108779209/)
