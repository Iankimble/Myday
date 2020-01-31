exports.creatNoteValidation = (req, res, next) => {
  req.check("note", "Please write somthing").notEmpty();

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
  req
    .check("email", "A valid email address is required.")
    .matches(/.+\@.+\..+/)
    .withMessage("email must contain and @ symbol")
    .isLength({
      min: 4,
      max: 100
    });

  req.check("password", "A password is required.").notEmpty();
  req
    .check("password")
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
