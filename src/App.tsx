import { ApolloProvider } from "@apollo/client"
import { useState } from "react"
import { BrowserRouter } from "react-router-dom"
import { SidebarContextProvider } from "./context/SidebarContext"
import { client } from "./lib/apollo"
import { Event } from "./pages/Event"
import { Router } from "./Router"

function App() {
  const [IsOpenCloseSideBar, setIsOpenCloseSideBar] = useState(false)
  
  return (
    <div>
      <SidebarContextProvider>
        <ApolloProvider client={client}>
          <BrowserRouter>
            <Router/>
          </BrowserRouter>
        </ApolloProvider>
      </SidebarContextProvider>
    </div>
  )
}

export default App
