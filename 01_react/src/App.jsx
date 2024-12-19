import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import {Outlet} from 'react-router'
import { ThemeProvider } from "./context/MyTheme"
import { TodoContextProvider } from "./components/TodoApp/TodoContext"
function App() {
  

  return (
    <TodoContextProvider>   
      <ThemeProvider>    
      <Header/>
      <Outlet/>
      <Footer/>
      </ThemeProvider>
      </TodoContextProvider>
  
    
  )
}

export default App
