import AppLayout from "./components/layout/AppLayout"
import Masthead from "./components/weather/Masthead"
import SearchBar from "./components/search/SearchBar"

function App() {
  return (
    <>
      <AppLayout>
        <Masthead />
        <SearchBar />
      </AppLayout>
    </>
  )
}

export default App
