export default function AppLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen bg-paper flex items-center justify-center p-6 font-space">
            <div className="w-full max-w-115">
                {children}
            </div>
        </div>
    )
}