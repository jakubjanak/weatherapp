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
            <div className="text-4xl tracking-wider font-bebas text-ink leading-none">☁️ POČASÍ</div>
            <div className="text-xs text-muted text-right leading-1.5">{date}</div>
        </div>
    )
}