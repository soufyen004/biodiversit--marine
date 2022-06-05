import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import EnergieRenouvelable from "./components/EnergieRenouvelable";
import EnergieNonRenouvelable from "./components/EnergieNonRenouvelable";
import Main from "./pages/Main";
import Home from "./pages/Home";
import Footer from "./components/Footer";



function App() {
  
  return (
    <>
    
    <Router>
    <Main/>
      <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route path="/EnergieRenouvelable" element={<EnergieRenouvelable/>}/>
      <Route path="/EnergieNonRenouvelable" element={<EnergieNonRenouvelable/>}/>
      </Routes>
    <Footer/>
    </Router>
      
    </>

  );
}

export default App;
