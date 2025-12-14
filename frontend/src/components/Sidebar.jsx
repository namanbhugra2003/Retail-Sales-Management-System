import { useState } from "react";
import { FiChevronDown, FiCheckCircle, FiXCircle } from "react-icons/fi";
import { MdDashboard, MdOutlineInventory2, MdOutlineReceiptLong } from "react-icons/md";
import { HiOutlineCube, HiOutlineClipboardList } from "react-icons/hi";
import { TbFileInvoice } from "react-icons/tb";
import { BsPlayCircle } from "react-icons/bs";

/* ===== NavItem ===== */
function NavItem({ icon, label }) {
  return (
    <div className="nav-item">
      {icon}
      <span>{label}</span>
    </div>
  );
}

/* ===== NavGroup ===== */
function NavGroup({ icon, title, items }) {
  const [open, setOpen] = useState(true);

  return (
    <div className={`nav-group ${open ? "open" : ""}`}>
      <div className="nav-item" onClick={() => setOpen(!open)}>
        {icon}
        <span>{title}</span>
        <FiChevronDown
          className="expand-icon"
          style={{
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.2s ease",
          }}
        />
      </div>

      {open && (
        <div className="nav-subitems">
          {items.map((item) => (
            <div key={item.label} className="nav-subitem">
              {item.icon}
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

/* ===== Sidebar ===== */
export default function Sidebar() {
  return (
    <aside className="sidebar">
     <div className="profile-card vault-profile">
  <div className="vault-logo">
    <span className="vault-logo-text">V</span>
  </div>

  <div className="profile-info">
    <span className="app-name">Vault</span>
    <span className="user-name">Anurag Yadav</span>
  </div>

  <FiChevronDown className="dropdown-icon" />
</div>

      {/* Navigation */}
      <nav className="nav">
        <NavItem icon={<MdDashboard />} label="Dashboard" />
        <NavItem icon={<HiOutlineCube />} label="Nexus" />
        <NavItem icon={<MdOutlineInventory2 />} label="Intake" />

        <NavGroup
          title="Services"
          icon={<HiOutlineClipboardList />}
          items={[
            { label: "Pre-active", icon: <BsPlayCircle /> },
            { label: "Active", icon: <FiCheckCircle /> },
            { label: "Blocked", icon: <FiXCircle /> },
            { label: "Closed", icon: <FiCheckCircle /> },
          ]}
        />

        <NavGroup
          title="Invoices"
          icon={<MdOutlineReceiptLong />}
          items={[
            { label: "Proforma Invoices", icon: <TbFileInvoice /> },
            { label: "Final Invoices", icon: <TbFileInvoice /> },
          ]}
        />
      </nav>
    </aside>
  );
}
