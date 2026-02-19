export default function Footer() {
    return (
        <div className="mt-4 flex justify-between items-center border-t border-ink pt-2.5">
            <div className="text-[9px] text-muted tracking-wider uppercase">
                Vytvořil Jakub Janák
            </div>
            <div className="w-1.5 h-1.5 rounded-full bg-red" />
            <div className="text-[9px] text-muted tracking-wider uppercase">
                Data poskytuje OpenWeatherMap
            </div>
        </div>
    )
}