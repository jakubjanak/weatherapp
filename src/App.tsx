import AppLayout from "./components/layout/AppLayout"
import Masthead from "./components/weather/Masthead"
import SearchBar from "./components/search/SearchBar"
import CityHeadline from "./components/weather/CityHeadline"
import ConditionBanner from "./components/weather/ConditionBanner"
import { useState } from "react"

function App() {
  const [cityName, setCityName] = useState("")
  const [data, setData] = useState()

  return (
    <>
      <AppLayout>
        <Masthead />
        <SearchBar setCityName={setCityName} setData={setData} />
        <CityHeadline cityName={cityName} data={data} />
        <ConditionBanner data={data} />
      </AppLayout>
    </>
  )
}

export default App
