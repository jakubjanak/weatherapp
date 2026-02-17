export default function AppLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen bg-[#f2ede4] flex items-center justify-center p-6">
            <div className="w-full max-w-[460px]">
                {children}
            </div>
        </div>
    )
}