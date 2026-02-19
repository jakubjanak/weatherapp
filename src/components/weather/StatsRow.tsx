export default function StatsRow({ data }: { data: any }) {
    return (
        <div className="grid grid-cols-3 border-2 border-ink mb-5">
            <div className="p-3.5 border-r-2 border-ink">
                <div className="text-[9px] tracking-widest uppercase text-muted mb-1">Vlhkost</div>
                <div className="font-bebas text-[32px] leading-none text-ink">
                    {data && data.main.humidity || "0"}
                    <span className="text-[10px] text-red">%</span>
                </div>
            </div>
            <div className="p-3.5 border-r-2 border-ink">
                <div className="text-[9px] tracking-widest uppercase text-muted mb-1">Rychlost větru</div>
                <div className="font-bebas text-[32px] leading-none text-ink">
                    {data && data.wind.speed || "0"}
                    <span className="text-[10px] text-red">m/s</span>
                </div>
            </div>
            <div className="p-3.5 border-r-2 border-ink">
                <div className="text-[9px] tracking-widest uppercase text-muted mb-1">Tlak</div>
                <div className="font-bebas text-[32px] leading-none text-ink">
                    {data && data.main.pressure || "0"}
                    <span className="text-[10px] text-red">hPa</span>
                </div>
            </div>
        </div>
    )
}