import { BrowserRouter,Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />}/>  {/*index route means it will match the root path /  */}
          <Route path="*" element={<NotFound />} /> {/*The * path matches any URL that doesn’t match a previous route.*/}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
