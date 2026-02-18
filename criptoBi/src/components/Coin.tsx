import React from "react";

interface CoinProps {
    number: number;
    title: string;
    simbol: string;
    value: string | number;
    change: number;
    icon: string;
}

const Coin = React.memo((props: CoinProps) => {

    const isPositive = props.change > 0;

    return (
        <article className="group bg-white border border-slate-200 rounded-xl p-5 hover:border-[#25f46a] transition-all cursor-pointer shadow-sm">
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                    <span className="text-slate-400 text-xs font-bold">#{props.number}</span>
                    <div className="size-10 rounded-full overflow-hidden bg-slate-100 flex items-center justify-center border border-slate-50">
                        <img src={props.icon} alt={props.simbol} className="w-full h-full object-cover" />
                    </div>
                    <div>
                        <h4 className="font-bold text-slate-900 leading-tight">{props.title}</h4>
                        <span className="text-xs text-slate-500 font-medium uppercase">{props.simbol}</span>
                    </div>
                </div>
                <button className="text-slate-300 hover:text-[#25f46a] transition-colors">
                    <span className="text-xl">★</span>
                </button>
            </div>

            <div className="flex items-end justify-between">
                <div>
                    <p className="text-xl font-bold tabular-nums text-slate-900">
                        ${typeof props.value === 'number' ? props.value.toLocaleString() : props.value}
                    </p>
                    <p className={`text-sm font-bold flex items-center gap-1 ${isPositive ? "text-[#25f46a]" : "text-red-400"}`}>
                        <span>{isPositive ? '▲' : '▼'}</span>
                        {Math.abs(props.change).toFixed(2)}%
                    </p>
                </div>

            </div>
        </article>
    ) 
}
)

export default Coin