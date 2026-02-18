import { useCoinName } from "../context/coinContext"

const Header = () => {

    const { coinName, setCoinName } = useCoinName();

    return (
        <header className="w-full h-25 flex items-center justify-start px-10 bg-white/80 backdrop-blur-md border-b border-slate-200">
            {/* Logo & Brand */}
            <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-[#25f46a] rounded flex items-center justify-center">
                    <span className="text-black font-bold text-lg">₿</span>
                </div>
                <h1 className="text-xl font-bold tracking-tight text-slate-900">
                    Cripto <span className="text-[#25f46a]">Bi</span>
                </h1>
            </div>

            {/* Search Bar Area */} 
            <div className="flex-1 max-w-md ml-20 relative sm:w-full sm:ml-5">
                <input 
                    type="text" 
                    placeholder="Buscar Moneda" 
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg pl-4 pr-4 py-2 text-sm focus:ring-1 focus:ring-[#25f46a] focus:border-[#25f46a] outline-none transition-all placeholder:text-slate-400 text-slate-900"
                    value={coinName}
                    onChange={(e) => setCoinName(e.target.value)}
                />
            </div>
        </header>
    )
}

export default Header