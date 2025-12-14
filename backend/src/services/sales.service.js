const loadSalesData = require("../utils/loadData");

let salesData = [];
let loaded = false;

(async () => {
  if (!loaded) {
    salesData = await loadSalesData(100000);
    loaded = true;
    console.log("Sales data cached in memory");
  }
})();

const applyFilters = (query) => {
  let result = salesData;

  /* ===== SEARCH ===== */
  if (query.search) {
    const s = query.search.toLowerCase();
    result = result.filter(
      (r) =>
        r["Customer Name"]?.toLowerCase().includes(s) ||
        r["Phone Number"]?.includes(s)
    );
  }

  /* ===== BASIC FILTERS ===== */
  if (query.gender) {
    result = result.filter((r) => r.Gender === query.gender);
  }

  if (query.region) {
    result = result.filter(
      (r) => r["Customer Region"] === query.region
    );
  }

  if (query.category) {
    result = result.filter(
      (r) => r["Product Category"] === query.category
    );
  }

  /* ===== PAYMENT METHOD (FIXED) ===== */
  if (query.paymentMethod) {
    const pm = query.paymentMethod.toLowerCase();
    result = result.filter(
      (r) =>
        typeof r["Payment Method"] === "string" &&
        r["Payment Method"].toLowerCase().includes(pm)
    );
  }

  /* ===== TAGS (FIXED FOR CSV STRING) ===== */
  if (query.tags) {
    const tag = query.tags.toLowerCase();
    result = result.filter(
      (r) =>
        typeof r.Tags === "string" &&
        r.Tags
          .toLowerCase()
          .split(",")
          .map((t) => t.trim())
          .includes(tag)
    );
  }

  /* ===== AGE FILTER ===== */
  if (query.minAge && query.maxAge) {
    const min = Number(query.minAge);
    const max = Number(query.maxAge);

    result = result.filter((r) => {
      const age = Number(r.Age);
      return age >= min && age <= max;
    });
  }

  /* ===== DATE FILTER ===== */
  if (query.startDate && query.endDate) {
    const start = new Date(query.startDate);
    const end = new Date(query.endDate);

    result = result.filter((r) => {
      const d = new Date(r.Date);
      return d >= start && d <= end;
    });
  }

  /* ===== SORTING ===== */
  if (query.sortBy === "date") {
    result = [...result].sort(
      (a, b) => new Date(b.Date) - new Date(a.Date)
    );
  }

  if (query.sortBy === "quantity") {
    result = [...result].sort(
      (a, b) => Number(b.Quantity) - Number(a.Quantity)
    );
  }

  if (query.sortBy === "name") {
    result = [...result].sort((a, b) =>
      a["Customer Name"].localeCompare(b["Customer Name"])
    );
  }

  /* ===== PAGINATION ===== */
  const page = Number(query.page || 1);
  const limit = 10;
  const startIndex = (page - 1) * limit;

  return {
    total: result.length,
    data: result.slice(startIndex, startIndex + limit),
  };
};

module.exports = { applyFilters };
