export default function errorHandler(err, req, res, next) {
  let ts: Date = new Date();
  const { error, status, message } = err;

  res.status(status).json({
    error: error || "Not Found",
    message: message || "error",
    status: status || 500,
    timestamp: ts.toJSON()
  });
}
