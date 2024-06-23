import { useState } from "react";
import Aprendizaje from "./Metrics/Aprendizaje";
import Estadisticas from "./Metrics/Estadisticas";
import Reporte from "./Metrics/Reporte";

interface MetricsButtonProps {
  text: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const MetricsButton: React.FC<MetricsButtonProps> = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="border-solid border-slate-500 border-2 hover:bg-teal-100 ml-3 px-6 py-1 rounded-t my-2 disabled:bg-indigo-300"
      type="submit"
    >
      {text}
    </button>
  );
};

function Metrics() {
  const [metric, setMetric] = useState<string>("reporte");

  return (
    <div className="p-3">
      <div>
        {/* prettier-ignore */}
        <MetricsButton text="Reportes" onClick={() => {setMetric("reporte")}} />
        {/* prettier-ignore */}
        <MetricsButton text="Aprendizaje" onClick={() => { setMetric("aprendizaje")}} />
        {/* prettier-ignore */}
        <MetricsButton text="Estadísticas" onClick={() => {setMetric("estadisticas")}} />
      </div>

      {metric === "aprendizaje" && <Aprendizaje />}
      {metric === "estadisticas" && <Estadisticas />}
      {metric === "reporte" && <Reporte />}
    </div>
  );
}

export default Metrics;
