import Home from "./Components/non-user/landingpage/home"
// import
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';


function App() {

  return (
    <Router>
    {/* <Home/> */}
      <Routes>
          <Route exact path="/" element={<Home />}/>
          {/* <Route  exact path="/login" element={<Login />}/> */}
          {/* <Route  exact path="/register" element={<Register />}/> */}
             
      </Routes>
  </Router>

  )
}

export default App
