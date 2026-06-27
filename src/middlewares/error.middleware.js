function errorMiddleware(err, _req, res, _next) {
  console.error(err);

  if (res.headersSent) {
    return;
  }

  res.status(err.statusCode || 500).json({
    error: err.name || "InternalServerError",
    message: err.message || "Something went wrong",
  });
}

module.exports = errorMiddleware;
