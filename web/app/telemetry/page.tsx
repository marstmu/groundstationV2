import TextGauge from "@/app/components/text-gauge";

export default function Telemetry() {
    return <div>
        <div className="flex flex-col min-h-dvh bg-gradient-to-b from-gray-900 to-black font-sans">
            <header className="px-2 sm:px-8 py-2 font-bold text-2xl">MARS Telemetry Terminal</header>
            <div className="flex flex-col px-2 sm:px-8 pb-8 min-h-full">
                <div className="mb-2 border-2 border-gray-800 relative flex justify-between rounded-lg p-2 col-span-full h-18 gap-2">
                    <div className="h-full flex justify-start gap-2 font-mono">
                        <TextGauge title="STATE" value="IN FLIGHT" valueClassName="text-green-500"/>
                    </div>
                    <div className="h-full flex justify-end gap-2 font-mono">
                        <TextGauge title="SPD" value="52 m/s"/>
                        <TextGauge title="ALT" value="621 ft"/>
                    </div>
                </div>
                <div className="flex-1 flex flex-wrap gap-2 min-h-fit">
                    <div className="border-2 basis-full sm:basis-auto border-gray-800 relative flex flex-col rounded-lg px-2 w-64 flex-none min-h-64">
                        <h1 className="text-gray-500">Flight Data</h1>
                        <div className="h-full font-mono">

                        </div>
                    </div>
                    <div
                        className="border-2 basis-full sm:basis-auto border-gray-800 relative flex flex-col rounded-lg px-2 flex-auto min-h-64">
                        <h1 className="text-gray-500">GPS</h1>
                        <div className="h-full"></div>
                    </div>
                    <div className="border-2 basis-full sm:basis-auto border-gray-800 relative flex flex-col rounded-lg px-2 flex-auto min-h-64">
                        <h1 className="text-gray-500">Blank</h1>
                        <div className="h-full"></div>
                    </div>
                    <div className="border-2 basis-full sm:basis-auto border-gray-800 relative flex flex-col rounded-lg px-2 flex-auto min-h-64">
                        <h1 className="text-gray-500">Radio</h1>
                        <div className="h-full"></div>
                    </div>
                    <div className="fixed basis-full sm:basis-auto bottom-0 border-2 border-gray-800 sm:relative flex flex-col rounded-lg px-2 flex-auto">
                        <h1 className="text-gray-500">Advisory</h1>
                        <div className="h-full"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}