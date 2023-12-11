import './App.css'
import Content from './components/Content'
import Footer from './components/Footer'
import Navbar from './components/Navbar'


function App() {

  return (
  <div className="h-screen w-screen flex flex-row justify-between">
    <div className="w-1/3 h-full flex flex-col">
      <div className="h-2/3 border-solid border-2 rounded-md flex flex-col">
        <p className="text-3xl mt-36">PICTURE 1</p>
      </div>
    </div>
    <div className="h-screen w-screen flex flex-col justify-between">
      <Navbar />
      <Content />
      <Footer />
    </div>
    <div className="w-1/3 h-full flex flex-col justify-end">
      <div className="h-2/3 border-solid border-2 rounded-md flex flex-col justify-end">
        <p className="text-3xl mb-36">PICTURE 2</p>
      </div>
    </div>
  </div>
  )
}

export default App
