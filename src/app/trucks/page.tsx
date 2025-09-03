import { DropOffAnalysis } from "@/components/dashboard/DropOffAnalysis";
import { DriverPage } from "@/components/trucks/DriverPage";

export default function DropOff() {
    return (
        <div className="h-full min-h-0 overflow-auto p-4">
            {/* <div>Dropoff</div> */}
            <DropOffAnalysis />
            <DriverPage />
        </div>);
}