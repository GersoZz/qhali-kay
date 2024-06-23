import Agenda from "../components/Dashboard/Agenda";
import Beneficios from "../components/Dashboard/Beneficios";
import Metrics from "../components/Dashboard/Metrics";
import Profile from "../components/Dashboard/Profile";

function DashboardPage() {
  return (
    <main className="flex h-full justify-between mr-60">
      <Profile />
      <Metrics />
      <div className="mt-16">
        <Agenda />
        <Beneficios />
      </div>
    </main>
  );
}

export default DashboardPage;
