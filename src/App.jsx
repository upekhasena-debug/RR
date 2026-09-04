import React, { useEffect } from 'react'
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import { useTheme } from './useTheme'
import Header from './components/Header'
import Footer from './components/Footer'
import BottomNav from './components/BottomNav'

import Safety from './screens/Safety'
import Home from './screens/Home'
import PainTriage from './screens/PainTriage'
import LowerBackTriage from './screens/LowerBackTriage'
import PainNeck from './screens/PainNeck'
import PainUpperBack from './screens/PainUpperBack'
import PainLowerEndDay from './screens/PainLowerEndDay'
import PainLowerMorning from './screens/PainLowerMorning'
import PainLowerAlways from './screens/PainLowerAlways'
import PainWrist from './screens/PainWrist'
import Science from './screens/Science'
import Quiz from './screens/Quiz'
import DeskSetup from './screens/DeskSetup'
import Tracker from './screens/Tracker'
import Products from './screens/Products'
import ProductDetail from './screens/ProductDetail'
import CardDeckHome from './screens/CardDeckHome'
import CardSection from './screens/CardSection'
import CardDetail from './screens/CardDetail'

const noNavRoutes = ['/safety']
const noBackRoutes = ['/', '/safety']

function SafetyGuard({ children }) {
  const navigate = useNavigate()
  const location = useLocation()
  useEffect(() => {
    const done = localStorage.getItem('rr_first_launch')
    if (!done && location.pathname !== '/safety' && location.pathname !== '/recheck') {
      navigate('/safety', { replace: true })
    }
  }, [location.pathname])
  return children
}

export default function App() {
  const { theme, toggleTheme } = useTheme()
  const navigate = useNavigate()
  const location = useLocation()

  const showNav = !noNavRoutes.includes(location.pathname)
  const showBack = !noBackRoutes.includes(location.pathname)

  const staticTitles = {
    '/pain': 'Where is the niggle?',
    '/pain/lower/triage': 'When is it worst?',
    '/pain/neck': 'Neck & Head',
    '/pain/upperback': 'Upper Back & Shoulders',
    '/pain/lower/endday': 'Lower Back',
    '/pain/lower/morning': 'Lower Back',
    '/pain/lower/always': 'Lower Back',
    '/pain/wrist': 'Wrist & Forearm',
    '/science': 'The science',
    '/quiz': 'Test yourself',
    '/desksetup': 'Desk setup',
    '/tracker': 'Daily check-in',
    '/products': 'Your products',
    '/recheck': 'Quick check',
    '/cards': 'Card deck',
  }

  const screenTitle = staticTitles[location.pathname] ||
    (location.pathname.startsWith('/cards/') ? 'Card deck' : undefined)

  return (
    <SafetyGuard>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100dvh', background: '#FAF9F7' }}>
        <Header
          theme={theme}
          toggleTheme={toggleTheme}
          showBack={showBack}
          onBack={() => navigate(-1)}
        />

        {screenTitle && (
          <div style={{ background: '#FAF9F7', padding: '12px 16px 0', borderBottom: '1px solid #E0DED8' }}>
            <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#888780', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              {screenTitle}
            </div>
          </div>
        )}

        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
          <Routes>
            <Route path="/safety" element={<Safety />} />
            <Route path="/recheck" element={<Safety />} />
            <Route path="/" element={<Home />} />
            <Route path="/pain" element={<PainTriage />} />
            <Route path="/pain/lower/triage" element={<LowerBackTriage />} />
            <Route path="/pain/neck" element={<PainNeck />} />
            <Route path="/pain/upperback" element={<PainUpperBack />} />
            <Route path="/pain/lower/endday" element={<PainLowerEndDay />} />
            <Route path="/pain/lower/morning" element={<PainLowerMorning />} />
            <Route path="/pain/lower/always" element={<PainLowerAlways />} />
            <Route path="/pain/wrist" element={<PainWrist />} />
            <Route path="/science" element={<Science />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/desksetup" element={<DeskSetup />} />
            <Route path="/tracker" element={<Tracker />} />
            <Route path="/products" element={<Products />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cards" element={<CardDeckHome />} />
            <Route path="/cards/:sectionId" element={<CardSection />} />
            <Route path="/cards/:sectionId/:cardId" element={<CardDetail />} />
          </Routes>
        </div>

        {showNav && <BottomNav theme={theme} />}
        <Footer theme={theme} />
      </div>
    </SafetyGuard>
  )
}
