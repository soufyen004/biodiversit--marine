import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import EnergieRenouvelable from "./components/EnergieRenouvelable";
import EnergieNonRenouvelable from "./components/EnergieNonRenouvelable";
import Main from "./pages/Main";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";


function App() {
  return (
    <>
    
    <Router>
    <Main/>
      <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route path="/EnergieRenouvelable" element={<EnergieRenouvelable/>}/>
      <Route path="/EnergieNonRenouvelable" element={<EnergieNonRenouvelable/>}/>
      <Route path="/aboutUs" element={<About/>}/>
      <Route path="/contactUs" element={<Contact/>}/>
      </Routes>
    </Router>
      
    </>

  );
}

export default App;
