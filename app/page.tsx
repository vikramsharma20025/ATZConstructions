import Dashboard from "@/components/Dashboard";
import NavigationTop from "@/components/Navbar/Navbar";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      {/* <NavigationTop /> */}
      <Dashboard />
    </main>
  );
}
