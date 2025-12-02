import { Route, Routes } from 'react-router'
import './App.scss'
import CountDown from './Component/CountDown/CountDown'
import Events from './Component/Events/Events'
// import InvitationCard from './Component/Invitation Card/InvitationCard'
import InvitationCardV2 from './Component/Invitation Card v2/InvitationCardV2'
import { AnimatePresence } from "framer-motion";
import PageWrapper from './Component/PageWrapper/PageWrapper'
import WeddingSchedule from './Component/WeddingSchedule/WeddingSchedule'
import WeddingMap from './Component/WeddingMap/WeddingMap'
import BrideGroomIntro from './Component/BrideGroomIntro/BrideGroomIntro'
import WeddingSlicerSwiper from './Component/WeddingSlicerSlider/WeddingSlicerSlider'
import Info from './Component/Info/Info'
import AOS from 'aos';
import 'aos/dist/aos.css';
import MusicToggle from './Component/MusicToggle/MusicToggle'
import WeddingSlicerSlider1 from './Component/WeddingSlicerSlider/WeddingSlicerSlider1'
import WeddingFooter from './Component/WeddingFooter/WeddingFooter'

AOS.init();
function App() {
  

  return (
    <AnimatePresence mode="wait">

      <Routes>
        <Route path="/" element={<InvitationCardV2 />} />
        <Route path="/invite" element={
          <PageWrapper>
            <div className='invitation-content' style={{ position: "relative" }}>
           
              <MusicToggle />
              <Info />
              <BrideGroomIntro />
              <CountDown />
              <Events />
              <WeddingSchedule />
              <WeddingSlicerSwiper />
              <WeddingSlicerSlider1 />
              <WeddingMap />
              <WeddingFooter />
            </div>
          </PageWrapper>
        } />
      </Routes>
    </AnimatePresence>

  )
}

export default App
