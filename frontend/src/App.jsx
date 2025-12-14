import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Filters from "./components/Filters";
import StatsBar from "./components/StatsBar";
import TransactionsTable from "./components/TransactionsTable";
import Pagination from "./components/Pagination";
import "./styles/layout.css";

export default function App() {
  const [query, setQuery] = useState({
    search: "",
    gender: "",
    region: "",
    category: "",
    sortBy: "name",
    page: 1,
  });

  return (
    <div className="app-layout">
      <Sidebar />

      <main className="main-content">
        <Header query={query} setQuery={setQuery} />
        <Filters query={query} setQuery={setQuery} />
        <StatsBar />
        <TransactionsTable query={query} />
        <Pagination query={query} setQuery={setQuery} />
      </main>
    </div>
  );
}
