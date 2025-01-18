import Footer from "./components/Footer"
import {Header} from "./components/Header"
import ParentComponent from "./components/ParentComponent"
function App(){
  return (
  <>
  <Header/>
  {/* <h2 className="text-2xl bg-red-500">THe </h2> */}
  <ParentComponent/>
  <Footer/>
  </>
  
    
  )
}

export default App