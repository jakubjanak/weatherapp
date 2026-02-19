import AppLayout from "./components/layout/AppLayout"
import Masthead from "./components/weather/Masthead"
import SearchBar from "./components/search/SearchBar"
import CityHeadline from "./components/weather/CityHeadline"
import ConditionBanner from "./components/weather/ConditionBanner"
import StatsRow from "./components/weather/StatsRow"
import ForecastStrip from "./components/weather/ForecastStrip"
import { useState } from "react"

function App() {
  const [cityName, setCityName] = useState("")
  const [data, setData] = useState()
  const [fiveDayData, setFiveDayData] = useState()

  return (
    <>
      <AppLayout>
        <Masthead />
        <SearchBar setCityName={setCityName} setData={setData} setFiveDayData={setFiveDayData} />
        <CityHeadline cityName={cityName} data={data} />
        <ConditionBanner data={data} />
        <StatsRow data={data} />
        <ForecastStrip data={fiveDayData} />
      </AppLayout>
    </>
  )
}

export default App
