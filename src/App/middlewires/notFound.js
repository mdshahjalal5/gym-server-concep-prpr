import httpStatus from "http-status";
export const notFound = (req, res) => {
  res.status(httpStatus.NOT_FOUND).send({
    success: false,
    message: "Route not found",
    error: "",
  });
};
