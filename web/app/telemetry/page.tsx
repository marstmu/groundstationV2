import TextGauge from "@/app/components/text-gauge";
import Window from "@/app/components/window";

export default function Telemetry() {
    return (
        <div>
            <div className="flex flex-col min-h-dvh bg-gradient-to-b from-gray-900 to-black font-sans text-white">
                <header className="px-2 sm:px-8 py-2 font-bold text-2xl">MARS Telemetry Terminal</header>
                <div className="flex flex-col px-2 sm:px-8 sm:pb-8 min-h-full">
                    <div className="mb-2 border-2 border-gray-800 relative flex justify-between rounded-lg p-2 col-span-full h-18 gap-2">
                        <div className="h-full flex justify-start gap-2">
                            <TextGauge title="STATE" value="IN FLIGHT" valueClassName="text-green-500"/>
                        </div>
                        <div className="h-full flex justify-end gap-2">
                            <TextGauge title="SPD" value="52 m/s"/>
                            <TextGauge title="ALT" value="621 ft"/>
                        </div>
                    </div>
                    <div className="flex-1 grid grid-cols-1 grid-rows-3 sm:grid-cols-2 lg:grid-cols-5 flex-wrap gap-y-2 sm:gap-2 min-h-fit justify-stretch">
                        <Window title="Flight Data" className="">
                            <div className="grid grid-cols-3 lg:grid-cols-1 relative py-2 gap-x-2 gap-y-4 justify-center">
                                <TextGauge title="SPD" value="52 m/s"/>
                                <TextGauge title="ALT" value="621 ft"/>
                                <TextGauge title="HDG" value="195°"/>
                                <TextGauge title="FLT TIME" value="3.20s"/>
                                <TextGauge title="AIR TEMP" value="16 °C"/>
                                <TextGauge title="MCU TEMP" value="27 °C"/>
                                <TextGauge title="BATT" value="4.1 V"/>
                            </div>
                        </Window>
                        <Window title="GPS" className="row-start-2 sm:row-auto lg:col-span-3"></Window>
                        <div className="col-span-2 lg:col-span-1 grid grid-cols-2 lg:grid-cols-1 gap-2">
                            <Window title="Radio" className="flex-auto"/>
                            <Window title="Advisory" className="backdrop-blur sm:backdrop-blur-0 sm:bg-transparent flex-auto"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}