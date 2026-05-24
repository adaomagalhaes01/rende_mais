import { BrowserRouter, Routes, Route } from "react-router-dom"
import RootLayout from "./layouts/RootLayout"
import Home from "./pages/Home"
import Login from "./pages/Login"
import ClientDashboard from "./pages/ClientDashboard"
import ProviderDashboard from "./pages/ProviderDashboard"
import ServicesMarketplace from "./pages/ServicesMarketplace"
import ProviderRegistration from "./pages/ProviderRegistration"
import ProviderDetails from "./pages/ProviderDetails"
import Checkout from "./pages/Checkout"
import About from "./pages/About"
import HowItWorks from "./pages/HowItWorks"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/registo-prestador" element={<ProviderRegistration />} />
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="procurar" element={<ServicesMarketplace />} />
          <Route path="prestador/:id" element={<ProviderDetails />} />
          <Route path="checkout/:id" element={<Checkout />} />
          <Route path="sobre" element={<About />} />
          <Route path="como-funciona" element={<HowItWorks />} />
          <Route path="cliente/dashboard" element={<ClientDashboard />} />
          <Route path="prestador/dashboard" element={<ProviderDashboard />} />
          {/* Add other routes here later */}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
