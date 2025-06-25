// ✅ App.jsx
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import DSA from "./pages/DSA"
import Design from "./pages/Design"
import Core from "./pages/Core"
import Navbar from "./components/Navbar"
import Chat from "./pages/ Chat"
import CP from "./pages/CP"

const App = ({ dark, setDark }) => {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-900 text-black dark:text-white transition-colors duration-300 pt-24 px-4">
      <Navbar dark={dark} setDark={setDark} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dsa" element={<DSA />} />
        <Route path="/design" element={<Design />} />
        <Route path="/core" element={<Core />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/cp" element={<CP />} />
      </Routes>
    </div>
  )
}

export default App