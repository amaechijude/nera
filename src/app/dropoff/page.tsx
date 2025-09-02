import { DropOffAnalysis } from "@/components/dashboard/DropOffAnalysis";
import { DropOffLocation } from "@/components/dashboard/DropOffLocation";


export default function DropOff() {
    return (
        <div className="h-full min-h-0 overflow-auto p-4">
            {/* <div>Dropoff</div> */}
            <DropOffAnalysis />
            <DropOffLocation />
        </div>
    );
}