import { ArrowUpRight, ArrowDownRight, Users, User, Truck, Box } from "lucide-react";

export function DropOffAnalysis() {
    return (
        <div className="bg-white rounded-2xl p-6 w-full shadow-sm">
            <div className="mb-2">
                <h2 className="text-xl font-semibold">Drop offs Analysis</h2>
                <p className="text-gray-500 text-sm">Select the drop offs close to your LGA</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                {/* Total Drop Off */}
                <div className="flex flex-col items-start bg-orange-50 rounded-xl p-4 min-w-[150px]">
                    <div className="flex items-center mb-2">
                        <Users className="text-orange-400 bg-orange-100 rounded-full p-1" size={32} />
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold">60</span>
                        <span className="flex items-center text-green-600 text-xs font-semibold bg-green-50 rounded px-1 ml-1">
                            <ArrowUpRight size={14} className="mr-0.5" />20.3%
                        </span>
                    </div>
                    <span className="text-gray-600 text-sm mt-1">Total Drop Off</span>
                </div>
                {/* Total Staffs */}
                <div className="flex flex-col items-start bg-green-50 rounded-xl p-4 min-w-[150px]">
                    <div className="flex items-center mb-2">
                        <User className="text-green-700 bg-green-100 rounded-full p-1" size={32} />
                    </div>
                    <span className="text-2xl font-bold">400</span>
                    <span className="text-gray-600 text-sm mt-1">Total Staffs</span>
                </div>
                {/* Dropoff Points */}
                <div className="flex flex-col items-start bg-gray-50 rounded-xl p-4 min-w-[150px]">
                    <div className="flex items-center mb-2">
                        <Box className="text-gray-600 bg-gray-100 rounded-full p-1" size={32} />
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold">4</span>
                        <span className="flex items-center text-green-600 text-xs font-semibold bg-green-50 rounded px-1 ml-1">
                            70
                        </span>
                        <span className="flex items-center text-red-500 text-xs font-semibold bg-red-50 rounded px-1 ml-1">
                            10
                        </span>
                    </div>
                    <span className="text-gray-600 text-sm mt-1">Dropoff Points</span>
                </div>
                {/* New Drop Offs */}
                <div className="flex flex-col items-start bg-orange-50 rounded-xl p-4 min-w-[150px]">
                    <div className="flex items-center mb-2">
                        <Truck className="text-orange-400 bg-orange-100 rounded-full p-1" size={32} />
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold">13</span>
                        <span className="flex items-center text-green-600 text-xs font-semibold bg-green-50 rounded px-1 ml-1">
                            80
                        </span>
                        <span className="flex items-center text-red-500 text-xs font-semibold bg-red-50 rounded px-1 ml-1">
                            20
                        </span>
                    </div>
                    <span className="text-gray-600 text-sm mt-1">New Drop Offs</span>
                </div>
            </div>
        </div>
    );
}