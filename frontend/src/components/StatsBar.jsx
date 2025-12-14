import { FiInfo } from "react-icons/fi";

export default function StatsBar() {
  return (
    <div className="stats">
      <Stat label="Total units sold" value="10" />
      <Stat label="Total Amount" value="₹89,000 (19 SRs)" />
      <Stat label="Total Discount" value="₹15000 (45 SRs)" />
    </div>
  );
}

function Stat({ label, value }) {
  return (
    <div className="stat">
      <div className="stat-header">
        <span>{label}</span>
        <span className="tooltip-wrapper">
          <FiInfo className="info-icon" />
          <span className="tooltip">
            Additional details about {label}
          </span>
        </span>
      </div>
      <strong>{value}</strong>
    </div>
  );
}
