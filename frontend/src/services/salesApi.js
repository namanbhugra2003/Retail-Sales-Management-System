import axios from "axios";

const API_URL = "http://localhost:5000/sales";

export const fetchSales = async (query) => {
  try {
    const params = {
      gender: query.gender || undefined,
      region: query.region || undefined,
      category: query.category || undefined,
      sortBy: query.sortBy || undefined,
      page: query.page || 1,
      search: query.search || undefined,

      // ✅ NOW SUPPORTED
      paymentMethod: query.paymentMethod || undefined,
      tags: query.tags || undefined,
    };

    /* ===== AGE RANGE → minAge / maxAge ===== */
    if (query.ageRange) {
      if (query.ageRange === "18-25") {
        params.minAge = 18;
        params.maxAge = 25;
      } else if (query.ageRange === "26-35") {
        params.minAge = 26;
        params.maxAge = 35;
      } else if (query.ageRange === "36-45") {
        params.minAge = 36;
        params.maxAge = 45;
      } else if (query.ageRange === "46+") {
        params.minAge = 46;
        params.maxAge = 120;
      }
    }

    /* ===== DATE → startDate / endDate ===== */
    if (query.date) {
      const today = new Date();

      if (query.date === "today") {
        const d = today.toISOString().split("T")[0];
        params.startDate = d;
        params.endDate = d;
      }

      if (query.date === "last7") {
        const start = new Date();
        start.setDate(today.getDate() - 7);
        params.startDate = start.toISOString();
        params.endDate = today.toISOString();
      }

      if (query.date === "last30") {
        const start = new Date();
        start.setDate(today.getDate() - 30);
        params.startDate = start.toISOString();
        params.endDate = today.toISOString();
      }

      if (query.date === "last6months") {
        const start = new Date();
        start.setMonth(today.getMonth() - 6);
        params.startDate = start.toISOString();
        params.endDate = today.toISOString();
      }

      if (query.date === "last1year") {
        const start = new Date();
        start.setFullYear(today.getFullYear() - 1);
        params.startDate = start.toISOString();
        params.endDate = today.toISOString();
      }
    }

    const response = await axios.get(API_URL, { params });
    return response.data;
  } catch (error) {
    console.error("fetchSales API error:", error);
    return { total: 0, data: [] };
  }
};
