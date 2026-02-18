import { useCoinName } from "../context/coinContext";

interface Props {
    children: React.ReactNode;
}

const ListaCriptos = (props: Props) => {

    const { crecimiento, setCrecimiento } = useCoinName();

    return (
        <article className="bg-white w-full border border-slate-200 rounded-2xl col-span-3 row-span-3 overflow-hidden shadow-sm">
            {/* Header de la sección */}
            <div className="px-8 py-6 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
                <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#25f46a] rounded-full"></span>
                    Mercado en Vivo
                </h2>

                <div className="flex p-1 bg-slate-100 rounded-xl w-fit border border-slate-200 shadow-inner gap-1">
                    {/* Botón Relevancia (Default) */}
                    <button 
                        onClick={() => setCrecimiento("default")}
                        className={`px-4 py-2 text-[10px] font-extrabold rounded-lg transition-all duration-200 ${
                            crecimiento === "default" 
                            ? "bg-[#25f46a] text-black shadow-md scale-105" 
                            : "text-slate-400 hover:text-slate-600"
                        }`}
                    >
                        RELEVANCIA
                    </button>

                    {/* Botón Mayor Crecimiento */}
                    <button 
                        disabled={crecimiento === "mayor"}
                        onClick={() => setCrecimiento("mayor")}
                        className={`px-5 py-2 text-[10px] font-extrabold rounded-lg transition-all duration-200 ${
                            crecimiento === "mayor" 
                            ? "bg-[#25f46a] text-black shadow-md scale-105" 
                            : "text-slate-400 hover:text-slate-600 opacity-60"
                        }`}
                    >
                        MAYOR
                    </button>

                    {/* Botón Menor Crecimiento */}
                    <button 
                        disabled={crecimiento === "menor"}
                        onClick={() => setCrecimiento("menor")}
                        className={`px-5 py-2 text-[10px] font-extrabold rounded-lg transition-all duration-200 ${
                            crecimiento === "menor" 
                            ? "bg-[#25f46a] text-black shadow-md scale-105" 
                            : "text-slate-400 hover:text-slate-600 opacity-60"
                        }`}
                    >
                        MENOR
                    </button>
                </div>

            </div>

            {/* Grid interno para las Coins - Previene desborde con padding ajustado */}
            <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 overflow-y-auto max-h-[calc(100vh-400px)]">
                {props.children}
            </div>
            
            {/* Footer sutil para cerrar el contenedor */}
            <div className="p-4 bg-slate-50/30 border-t border-slate-100 flex justify-center">
                <p className="text-[10px] text-slate-400 font-medium">
                    DATOS ACTUALIZADOS EN TIEMPO REAL
                </p>
            </div>
        </article>
    ) 
}

export default ListaCriptos