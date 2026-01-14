const healthCheck = (req, res) => {
  res.status(200).json({
    status: "success",
    message: "API is running successfully"
  });
};

module.exports = { healthCheck };
