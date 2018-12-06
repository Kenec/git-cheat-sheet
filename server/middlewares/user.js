class User {
  static validateUsername(req, res, next) {
    if (!req.body.username) return res.status(400).send({ error: 'username field is required' });
    if (req.body.username.trim() === '') return res.status(400).send({ error: 'username field should not be empty'});
    next();
  }

  static validateEmail(req, res, next) {
    if (!req.body.email) return res.status(400).send({ error: 'email field is required' });
    if (req.body.email.trim() === '') return res.status(400).send({ error: 'email field should not be empty'});
    next();
  }

  static validatePassword(req, res, next) {
    if (!req.body.password) return res.status(400).send({ error: 'password field is required' });
    if (req.body.password.trim() === '') return res.status(400).send({ error: 'password field should not be empty'});
    next();
  }

  static validatePasswordMatch(req, res, next) {
    if (req.body.password !== req.body.repassword) return res.status(400).send({ error: 'password did not match' });
    next();
  }
}

export default User;