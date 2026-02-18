import AppLayout from "./components/layout/AppLayout"
import Masthead from "./components/weather/Masthead"
import SearchBar from "./components/search/SearchBar"
import CityHeadline from "./components/weather/CityHeadline"
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
      </AppLayout>
    </>
  )
}

export default App
