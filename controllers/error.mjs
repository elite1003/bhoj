export const error404 = (req, res, next) => {
  res.status(404).json({ ok: true, message: "error404 route hit" });
};
