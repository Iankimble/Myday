exports.creatNoteValidation = (req, res, next) => {
  req.check("title", "Please provide a name for your note.").notEmpty();

  const errors = req.validationErrors();
  if (errors) {
    const firstError = errors.map(error => error.msg)[0];
    return res.status(400).json({ error: firstError });
  }

  next();
};

exports.userSignupValidation = (req, res, next) => {
  req.check("firstName", "Your first name is required.").notEmpty();
  req.check("lastName", "Your last name is required.").notEmpty();

  req.check("password", "A password is required.").notEmpty();
  req
    .chek("password")
    .isLength({
      min: 6
    })
    .withMessage("Your password must be atleast 6 characters long.");

  const errors = req.validationErrors();
  if (errors) {
    const firstError = errors.map(error => error.msg)[0];
    return res.status(400).json({ error: firstError });
  }
  next();
};
