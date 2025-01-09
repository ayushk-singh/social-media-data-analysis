import Graph from "./graph";
import { AuroraBackgroundDemo } from "./home";
import Footer from "@/components/ui/footer";

export default function Home() {
  return (
    <>
        <AuroraBackgroundDemo />
      <div className="min-h-screen flex flex-col">
      <h1 className="text-3xl font-bold text-center py-8">Welcome to Our Website</h1>
    
      <Graph />
      
      <Footer />
    </div>

    </>
  );
}
