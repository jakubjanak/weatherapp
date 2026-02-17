import { useState } from "react"

export default function SearchBar() {
    // je potreba dodelat funkcionalitu pro hledani, UI hotove
    const [value, setValue] = useState("")

    const onChange = (newValue: string) => {
        setValue(newValue)
    }

    return (
        <div className="flex border-b-2 border-ink mb-5">
            <input 
                type="text"
                placeholder="Zadejte název města" 
                className="flex-1 bg-transparent border-none outline-none text-sm py-3" 
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />
            <button className="bg-ink text-paper border-none cursor-pointer font-mono font-bold text-xs px-4 tracking-wider">HLEDAT</button>
        </div>
    )
}   