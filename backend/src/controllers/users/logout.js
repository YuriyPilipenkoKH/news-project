const { User } = require("../../models");

const logout = async (req, res) => {
  const { _id, name } = req.user;
  await User.findByIdAndUpdate(_id, { token: "" });

  res.status(204).json({
    message: ` ${name}logout success`
  });
};

module.exports = logout;
