import './App.css'
import Header from './components/Header'
import Dashboard from './components/DashBoard'
import { CoinProvider } from './context/coinContext'

function App() {

  return (
    <main className="min-h-dvh w-full bg-white flex flex-col items-center justify-start font-sans overflow-x-hidden">
      <CoinProvider>
        <Header />
        <div className="w-full flex-1 flex flex-col">
          <Dashboard />
        </div>
      </CoinProvider>
    </main>
  )
}

export default App