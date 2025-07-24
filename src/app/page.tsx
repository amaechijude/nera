// import { Topbar } from "@/components/Topbar";
import * as st from "@/data/staff";

export default function Home() {

  return (
    <div>
      <h1>Welcome to Nera</h1>
      <p>Staff Name: {st.staffName}</p>
      <p>Staff Role: {st.staffRole}</p>
      <p>This is a simple Next.js application.</p>
    </div>
  );
}
