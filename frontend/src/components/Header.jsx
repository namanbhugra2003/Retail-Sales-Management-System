import { FiSearch } from "react-icons/fi";

export default function Header({ query, setQuery }) {
  return (
    <div className="header">
      <h1>Sales Management System</h1>

      <div className="search-wrapper">
        <FiSearch className="search-icon" />
        <input
          placeholder="Name, Phone no."
          value={query.search}
          onChange={(e) =>
            setQuery({ ...query, search: e.target.value, page: 1 })
          }
        />
      </div>
    </div>
  );
}
