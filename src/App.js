import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Home from './components/Home'
import Navbar from './components/Navbar'
import HealthInfo from './components/HealthInfo'
import Medicines from './components/Medicines'
import DoctorVisit from './components/DoctorVisit'

const App = () => (
  <Router>
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/healthInfo" element={<HealthInfo />} />
        <Route path="/medicines" element={<Medicines />} />
        <Route path="/doctorVisit" element={<DoctorVisit />} />
      </Routes>
    </div>
  </Router>
)

export default App
