import { useMemo } from "react"
import Metrica from "./Metrica"
import ListaCriptos from "./ListaCriptos"
import { useFetch } from "../hooks/criptoHook"
import type { Coin as CoinType } from "../types/coin"
import Coin from "./Coin"
import {useCoinName} from "../context/coinContext"

const API = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc"

const Dashboard = () => {
    const { data, loading, error } = useFetch<CoinType[]>(API);
    const { coinName, crecimiento } = useCoinName(); 

    const marketCapTotal = useMemo(() => {
        if (!data) return 0;
        return data.reduce((total, coin) => total + coin.market_cap, 0);
    }, [data])

    const marquetCapPromedio = useMemo(() => {
        if (!data) return 0;
        const variationCapTotal = data.reduce((total, coin) => total + coin.market_cap_change_percentage_24h, 0);
        return variationCapTotal / data.length;
    }, [data])

    const mayorCrecimiento = useMemo(() => {
        if (!data || data.length === 0) return null;
        return data.reduce((prev, curr) => {
            return (prev.price_change_24h > curr.price_change_24h) ? prev : curr;
        })
    }, [data])

    const orderData = useMemo(() => {
        if (!data) return[]
        
        if (crecimiento === "default") return data;
        if (crecimiento === "mayor") {
            return [...data].sort((a, b) => b.price_change_percentage_24h - a.price_change_percentage_24h);
        }else {
            return [...data].sort((a, b) => a.price_change_percentage_24h - b.price_change_percentage_24h);
        }
        
    },[data, crecimiento])

    const filteredData = useMemo(() => {
        if (!orderData) return [];
        return orderData.filter( (coin) => 
            coin.name.toLowerCase().includes(coinName.toLowerCase()) || coin.symbol.toLowerCase().includes(coinName.toLowerCase())
        )
    }, [orderData, coinName])

    return (
        (loading) ? 
        <div className="flex-1 flex items-center justify-center">
            <p className="text-[#25f46a] font-bold animate-pulse">Cargando...</p> 
        </div>
        :
        <section className="w-full mx-auto p-8 grid grid-cols-3 grid-rows-[auto_1fr] gap-6">
            <p className="col-span-3 text-black bg-green-500/10 p-3 rounded-lg border border-red-500/20">
                Si quieres ver el codigo puedes hacerlo aqui: <a href="https://github.com/brianpm141/ReactEjercicio.git" target="_blank" > <strong>Repositorio de Github</strong></a>
            </p>
            {error && <p className="col-span-3 text-red-500 bg-red-500/10 p-3 rounded-lg border border-red-500/20">Error al cargar los datos</p>}
            <Metrica title="Valor total del mercado" value={marketCapTotal} />
            <Metrica title="Crecimiento promedio" value={marquetCapPromedio} />
            <Metrica title="Mayor crecimiento" value={mayorCrecimiento?.name || "N/A"} />

            <div className="col-span-3">
                <ListaCriptos>
                    {filteredData?.map((coin, index) => (
                        <Coin
                            key={coin.id} 
                            number={index + 1} 
                            title={coin.name}
                            simbol={coin.symbol}
                            value={coin.current_price}
                            change={coin.market_cap_change_percentage_24h}
                            icon={coin.image}
                        />
                    ))}
                </ListaCriptos>
            </div>
        </section>
    ) 
}

export default Dashboard