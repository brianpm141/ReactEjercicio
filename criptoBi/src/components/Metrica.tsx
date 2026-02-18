interface MetricaProps {
    title: string;
    value: string | number;
}

const Metrica = (props: MetricaProps) => {
    // Formateo simple para números grandes (opcional, manteniendo tu lógica)
    const displayValue = typeof props.value === 'number' 
        ? props.value.toLocaleString('en-US', { maximumFractionDigits: 2 }) 
        : props.value;

    return (
        <article className="group bg-white p-6 rounded-xl border border-slate-200 hover:border-[#25f46a]/50 transition-all flex flex-col justify-between shadow-sm">
            <div className="mb-4">
                <h2 className="text-sm font-medium text-slate-500 mb-1 uppercase tracking-wider">
                    {props.title}
                </h2>
                <p className="text-3xl font-bold tracking-tight text-slate-900">
                    {typeof props.value === 'number' && props.title.toLowerCase().includes('valor') ? '$' : ''}
                    {displayValue}
                    {typeof props.value === 'number' && props.title.toLowerCase().includes('promedio') ? '%' : ''}
                </p>
            </div>

        </article>
    ) 
}

export default Metrica