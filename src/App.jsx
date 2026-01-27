import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './assets/Home/home'
import Operational from './assets/Operational/operational'
import Service from './assets/ServiceSale/serviceSale'
import Zonal from './assets/Zonal/zonal'
import OperationalView from './assets/Operational/oView'
import ZonalInfo from './assets/Zonal/zonalInfo'
import SeriesInfo from './assets/SeriesInfo/series'
import AccountsInfo from './assets/SeriesInfo/accountInfo'
import Ledger from './assets/ledger/legders'
import SubsLedger from './assets/ledger/subsLedger'
import ZonalSubsLedger from './assets/ledger/zonalSubsLedger'
import SeriesSubsLedger from './assets/ledger/seriesSubsLedger'
import Login from './assets/Login/login'

function App() {

  return (
    <>
      <div>
        <Router>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/operational" element={<Operational />} />
            <Route path="/serviceSale" element={<Service />} />
            <Route path="/Zonal" element={<Zonal />} />
            <Route path="/Oview" element={<OperationalView />} />
            <Route path="/zonalInfo" element={<ZonalInfo />} />
            <Route path="/seriesInfo" element={<SeriesInfo />} />
            <Route path="/accountsInfo" element={<AccountsInfo />} />
            <Route path="/ledgers" element={<Ledger />} />
            <Route path="/seriesSubsledgers" element={<SeriesSubsLedger />} />
            <Route path="/zonalSubsledgers" element={<ZonalSubsLedger />} />
            <Route path="/subsledgers" element={<SubsLedger />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Router>
      </div>

    </>
  )
}

export default App
