import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import {Outlet} from 'react-router'
import { ThemeProvider } from "./context/MyTheme"
function App() {
  

  return (
    
     <ThemeProvider>    
      <Header/>
      <Outlet/>
      <Footer/>
      </ThemeProvider>

    
  )
}

export default App
