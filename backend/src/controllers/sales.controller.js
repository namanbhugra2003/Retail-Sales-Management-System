const { applyFilters } = require("../services/sales.service");

const getSales = (req, res) => {
  const result = applyFilters(req.query);
  res.json(result);
};

module.exports = { getSales };
