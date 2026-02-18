export default function ConditionBanner({ data }: { data: any }) {
    return (
        <div className="bg-ink text-paper flex items-center justify-between px-3.5 py-2.5 mb-5">
            <div className="font-bebas text-[22px] tracking-wider">
                {data && data.weather[0].description || "Není známo"}
            </div>
        </div>
    )
}