export default function Telemetry() {
    return <div>
        <div className="flex flex-col h-dvh bg-gradient-to-b from-gray-900 to-black font-sans">
            <header className="px-8 py-2 font-bold text-2xl">MARS Telemetry Terminal</header>
            <div className="flex flex-col px-8 pb-8 h-full">
                <div className="mb-2 border-2 border-gray-800 relative flex justify-between rounded-lg p-2 col-span-full h-18 gap-2">
                    <ul className="h-full flex justify-start gap-2 font-mono">
                        <li className="border-2 p-2 rounded-lg bg-gray-900 shrink max-w-56">
                            <h2 className="absolute -inset-y-0 bg-gray-900 h-fit px-2">STATE</h2>
                            <p className="text-2xl sm:text-4xl text-center text-green-500">IN FLIGHT</p>
                        </li>
                    </ul>
                    <ul className="h-full flex justify-end gap-2 font-mono">
                        <li className="border-2 p-2 rounded-lg bg-gray-900 shrink max-w-56">
                            <h2 className="absolute -inset-y-0 bg-gray-900 h-fit px-2">SPD</h2>
                            <p className="text-2xl sm:text-4xl text-right">52 m/s</p>
                        </li>
                        <li className="border-2 p-2 rounded-lg bg-gray-900 shrink max-w-56">
                            <h2 className="absolute -inset-y-0 bg-gray-900 h-fit px-2">ALT</h2>
                            <p className="text-2xl sm:text-4xl text-right">621 ft</p>
                        </li>
                    </ul>
                </div>
                <div className="flex-1 flex flex-wrap gap-2 h-fit">
                    <div className="border-2 border-gray-800 relative flex flex-col rounded-lg px-2 w-64 flex-none">
                        <h1 className="text-gray-500">Flight Data</h1>
                        <div className="h-full font-mono">

                        </div>
                    </div>
                    <div
                        className="border-2 border-gray-800 relative flex flex-col rounded-lg px-2 flex-none aspect-video">
                        <h1 className="text-gray-500">GPS</h1>
                        <div className="h-full"></div>
                    </div>
                    <div className="border-2 border-gray-800 relative flex flex-col rounded-lg px-2 flex-auto">
                        <h1 className="text-gray-500">Blank</h1>
                        <div className="h-full"></div>
                    </div>
                    <div className="border-2 border-gray-800 relative flex flex-col rounded-lg px-2 flex-auto">
                        <h1 className="text-gray-500">Radio</h1>
                        <div className="h-full"></div>
                    </div>
                    <div className="border-2 border-gray-800 relative flex flex-col rounded-lg px-2 flex-auto">
                        <h1 className="text-gray-500">Advisory</h1>
                        <div className="h-full"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}