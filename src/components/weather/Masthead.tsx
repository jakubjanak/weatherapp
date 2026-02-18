import { useState, useEffect } from "react"

export default function Masthead() {
    const [date, setDate] = useState("")

    useEffect(() => {
        const currentDate = new Date()
        const dateTimeFormat = new Intl.DateTimeFormat("cs-CZ", {
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric",
        })
        setDate(dateTimeFormat.format(currentDate))
    }, [])
    return (
        <div className="border-t-4 border-b-4 border-ink flex items-center justify-between py-2 mb-0">
            <div className="font-bebas text-[34px] tracking-wider text-ink leading-none">☁️ POČASÍ</div>
            <div className="text-[9px] text-muted text-right leading-relaxed">{date}</div>
        </div>
    )
}