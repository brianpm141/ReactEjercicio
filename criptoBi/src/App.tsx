import './App.css'
import Header from './components/Header'
import Dashboard from './components/DashBoard'
import { CoinProvider } from './context/coinContext'

function App() {

  return (
    <main className="w-dvw h-dvh bg-white flex flex-col items-center justify-start font-sans">
      <CoinProvider>
        <Header/>
        <Dashboard/>
      </CoinProvider>
    </main>
  )
}

export default App