import Agenda from "../components/Dashboard/Agenda";
import Beneficios from "../components/Dashboard/Beneficios";
import Metrics from "../components/Dashboard/Metrics";
import Profile from "../components/Dashboard/Profile";

function DashboardPage() {
  return (
    <div>
      <Profile />
      <Metrics />
      <div>
        <Agenda />
        <Beneficios />
      </div>
    </div>
  );
}

export default DashboardPage;
