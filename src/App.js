import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import {Route, Routes} from "react-router-dom";
import Footer from "./components/Footer"

function App() { //Only put stuff here if you want it to show up regardless of page on the website
  return (
    <>
    <Navbar />
    <div className="container">
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>

    </div>
    
    <Footer />
    
    </>
  )
}

export default App;
