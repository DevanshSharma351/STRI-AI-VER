import React, { useState, useEffect } from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import { Auth0Provider } from "@auth0/auth0-react"
import App from "./App.jsx"
import "./index.css"

const Root = () => {
  const [dark, setDark] = useState(localStorage.getItem("theme") === "dark")

  useEffect(() => {
    const root = document.documentElement
    root.classList.toggle("dark", dark)
    localStorage.setItem("theme", dark ? "dark" : "light")
  }, [dark])

  return (
    <Auth0Provider
      domain="dev-3bpow03ygdvxyick.us.auth0.com"
      clientId="Mqso9fMWwSgkYzvBOp6IeAzz0tDcrWoM"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <BrowserRouter>
        <App dark={dark} setDark={setDark} />
      </BrowserRouter>
    </Auth0Provider>
  )
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
)