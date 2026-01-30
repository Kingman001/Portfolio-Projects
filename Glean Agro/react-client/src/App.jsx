import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import WhoWeAre from './pages/WhoWeAre'
import Service from './pages/Service'
import Careers from './pages/Careers'
import News from './pages/News'
import Advisors from './pages/Advisors'
import Community from './pages/Community'
import Faq from './pages/Faq'
import InvestInUs from './pages/InvestInUs'
import JoinUs from './pages/JoinUs'
import Management from './pages/Management'
import Media from './pages/Media'
import Code from './pages/Code'
import Construction from './pages/Construction'
import IndexPage from './pages/IndexPage'
import OurCoreValue from './pages/OurCoreValue'
import OurModel from './pages/OurModel'
import LegacyPage from './pages/LegacyPage'
import GenericLegacy from './pages/GenericLegacy'

// list of php pages (filename without leading slashes) to convert/serve from public/original
const phpPages = [
    '404.php', 'partner.php', 'scripts.php', 'success-story.php', 'what-we-do.php'
]

export default function App() {
    return (
        <div className="app-root">
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/news" element={<News />} />
                    <Route path="/service" element={<Service />} />
                    <Route path="/advisors" element={<Advisors />} />
                    <Route path="/careers" element={<Careers />} />
                    <Route path="/community" element={<Community />} />
                    <Route path="/faq" element={<Faq />} />
                    <Route path="/invest-in-us" element={<InvestInUs />} />
                    <Route path="/join-us" element={<JoinUs />} />
                    <Route path="/management" element={<Management />} />
                    <Route path="/media" element={<Media />} />
                    <Route path="/code" element={<Code />} />
                    <Route path="/construction" element={<Construction />} />
                    <Route path="/index" element={<IndexPage />} />
                    <Route path="/our-core-value" element={<OurCoreValue />} />
                    <Route path="/our-model" element={<OurModel />} />
                    {/* auto-generated legacy routes (map php filenames to clean paths) */}
                    {phpPages.map(fn => {
                        const slug = fn.replace('.php', '')
                        return (
                            <React.Fragment key={fn}>
                                <Route path={`/${slug}`} element={<LegacyPage phpPath={fn} />} />
                                <Route path={`/${fn}`} element={<LegacyPage phpPath={fn} />} />
                            </React.Fragment>
                        )
                    })}
                    {/* catch-all: try to render any copied php from public/original */}
                    <Route path="*" element={<GenericLegacy />} />
                </Routes>
            </main>
            <Footer />
        </div>
    )
}
