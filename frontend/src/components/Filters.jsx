import { FiRefreshCw } from "react-icons/fi";

export default function Filters({ query, setQuery }) {
  const resetFilters = () => {
    setQuery({
      search: "",
      region: "",
      gender: "",
      ageRange: "",
      category: "",
      tags: "",
      paymentMethod: "",
      date: "",
      sortBy: "name",
      page: 1,
    });
  };

  return (
    <div className="filters">
      {/* Reset */}
      <button className="reset-btn" onClick={resetFilters}>
        <FiRefreshCw />
      </button>

      {/* Customer Region */}
      <select
        value={query.region}
        onChange={(e) =>
          setQuery({ ...query, region: e.target.value, page: 1 })
        }
      >
        <option value="">Customer Region</option>
        <option value="North">North</option>
        <option value="South">South</option>
        <option value="East">East</option>
        <option value="West">West</option>
      </select>

      {/* Gender */}
      <select
        value={query.gender}
        onChange={(e) =>
          setQuery({ ...query, gender: e.target.value, page: 1 })
        }
      >
        <option value="">Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>

      {/* Age Range */}
      <select
        value={query.ageRange}
        onChange={(e) =>
          setQuery({ ...query, ageRange: e.target.value, page: 1 })
        }
      >
        <option value="">Age Range</option>
        <option value="18-25">18–25</option>
        <option value="26-35">26–35</option>
        <option value="36-45">36–45</option>
        <option value="46+">46+</option>
      </select>

      {/* Product Category */}
      <select
        value={query.category}
        onChange={(e) =>
          setQuery({ ...query, category: e.target.value, page: 1 })
        }
      >
        <option value="">Product Category</option>
        <option value="Clothing">Clothing</option>
        <option value="Electronics">Electronics</option>
        <option value="Beauty">Beauty</option>
      </select>

      {/* Tags (MATCHES CSV DATA) */}
      <select
        value={query.tags}
        onChange={(e) =>
          setQuery({ ...query, tags: e.target.value, page: 1 })
        }
      >
        <option value="">Tags</option>
        <option value="organic">Organic</option>
        <option value="skincare">Skincare</option>
        <option value="wireless">Wireless</option>
        <option value="portable">Portable</option>
        <option value="casual">Casual</option>
        <option value="fashion">Fashion</option>
        <option value="unisex">Unisex</option>
      </select>

      {/* Payment Method */}
      <select
        value={query.paymentMethod}
        onChange={(e) =>
          setQuery({ ...query, paymentMethod: e.target.value, page: 1 })
        }
      >
        <option value="">Payment Method</option>
        <option value="UPI">UPI</option>
        <option value="Card">Card</option>
      </select>

      {/* Date */}
      <select
        value={query.date}
        onChange={(e) =>
          setQuery({ ...query, date: e.target.value, page: 1 })
        }
      >
        <option value="">Date</option>
        <option value="today">Today</option>
        <option value="last7">Last 7 Days</option>
        <option value="last30">Last 30 Days</option>
        <option value="last6months">Last 6 Months</option>
        <option value="last1year">Last 1 Year</option>
      </select>

      {/* Sort */}
      <select
        className="sort"
        value={query.sortBy}
        onChange={(e) =>
          setQuery({ ...query, sortBy: e.target.value, page: 1 })
        }
      >
        <option value="name">Sort by: Customer Name (A-Z)</option>
        <option value="date">Sort by: Date (Newest)</option>
        <option value="quantity">Sort by: Quantity</option>
      </select>
    </div>
  );
}
