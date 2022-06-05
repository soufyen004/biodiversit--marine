import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import EnergieRenouvelable from "./components/DownloadPage";
import Main from "./pages/Main";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import React,{useState} from "react";
import Unity, { UnityContext } from "react-unity-webgl";
import DownloadPage from "./components/DownloadPage";
import Estuaire from './media/Estuaire.jpg'
import Ocean from './media/Ocean.jpg'
import Plage from './media/Plage.jpg'
import Port from './media/Port.jpg'
import Zone_Humide from './media/Zone_Humide.jpg'


const unityContext = new UnityContext({
  loaderUrl: "./estuaire/Build/UnityLoader.js",
  dataUrl: "./estuaire/Build/OceanFinal.data.unityweb",
  frameworkUrl: "./estuaire/Build/OceanFinal.wasm.framework.unityweb",
  codeUrl: "./estuaire/Build/OceanFinal.wasm.code.unityweb",
});

function App() {

  const [thematique,setThematique] = useState()
  const [MobileLink,setMobileLink] = useState()
  const [TabletLink,setTabletLink] = useState()
  const [ImgLink,setImgLink] = useState()
  const [DesktopLink,setDesktopLink] = useState()
  
  return (
    <>
    
    <Router>
    <Main/>
      <Routes>
      <Route exact path="/" element={<Home/>}/>
      {/* <Route path="/EnergieRenouvelable" element={<EnergieRenouvelable/>}/>
      <Route path="/EnergieNonRenouvelable" element={<EnergieNonRenouvelable/>}/> */}
      <Route path="/download/Estuaire" element={<DownloadPage thematique="Estuaire" MobileLink="" TabletLink="" imgLink={Estuaire} DesktopLink="" />} />
      <Route path="/download/Ocean" element={<DownloadPage thematique="Ocean" MobileLink="" TabletLink="" imgLink={Ocean} DesktopLink="" />} />
      <Route path="/download/Plage" element={<DownloadPage thematique="Plage" MobileLink="" TabletLink="" imgLink={Plage} DesktopLink="" />} />
      <Route path="/download/Port" element={<DownloadPage thematique="Port" MobileLink="" TabletLink="" imgLink={Port} DesktopLink="" />} />
      <Route path="/download/zoneHumide" element={<DownloadPage thematique="Zone Humide" MobileLink="" TabletLink="" imgLink={Zone_Humide} DesktopLink="" />} />
      </Routes>
    {/* <Footer/> */}
    </Router>
    
 
    </>

  );
}

export default App;
