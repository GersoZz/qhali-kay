import Navbar from "./components/Navbar";
import DashboardPage from "./pages/DashboardPage";

function App() {
  return (
    <main className="flex flex-col h-screen">
      <div className="nav border-b border-accent">
      <Navbar />
      </div>
      <DashboardPage />
    </main>
  );
}

export default App;
