class HttpError extends Error {
  constructor(status, message = "Server error") {
    super(message);
    this.status = status;
  }
}

module.exports = HttpError;