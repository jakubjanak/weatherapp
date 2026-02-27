import AppLayout from "./components/layout/AppLayout"
import Masthead from "./components/weather/Masthead"
import SearchBar from "./components/search/SearchBar"
import CityHeadline from "./components/weather/CityHeadline"
import ConditionBanner from "./components/weather/ConditionBanner"
import StatsRow from "./components/weather/StatsRow"
import ForecastStrip from "./components/weather/ForecastStrip"
import Footer from "./components/weather/Footer"
import { useState } from "react"
import type { ForecastDay, WeatherData } from "./types/weather"

function App() {
  const [cityName, setCityName] = useState("")
  const [data, setData] = useState<WeatherData | null>(null)
  const [fiveDayData, setFiveDayData] = useState<ForecastDay[]>([])
  const [forecastData, setForecastData] = useState<WeatherData | null>(null)
  const [changeDay, setChangeDay] = useState(false)

  return (
    <>
      <AppLayout>
        <Masthead />
        <SearchBar setCityName={setCityName} setData={setData} setFiveDayData={setFiveDayData} />
        <CityHeadline cityName={cityName} data={changeDay ? forecastData : data} />
        <ConditionBanner data={changeDay ? forecastData : data} />
        <StatsRow data={changeDay ? forecastData : data} />
        <ForecastStrip data={fiveDayData} setChangeDay={setChangeDay} setForecastData={setForecastData} />
        <Footer />
      </AppLayout>
    </>
  )
}

export default App
