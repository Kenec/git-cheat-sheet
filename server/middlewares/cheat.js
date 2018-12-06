class Cheat {
  static validateOwner(req, res, next) {
    if (req.body.owner !== 0 && !req.body.owner) return res.status(400).send({ error: 'owner field is required' });
    if (typeof req.body.owner !== 'number' && req.body.owner.trim() === '') return res.status(400).send({ error: 'owner field should not be empty'});
    if (req.body.owner !== req.authToken.id) return res.status(400).send({ error: 'You do not permission to perform this operation'}); 
    next();
  };

  static validateTitle(req, res, next) {
    if (!req.body.title) return res.status(400).send({ error: 'title field is required' });
    if (req.body.title.trim() === '') return res.status(400).send({ error: 'title field should not be empty'});
    next();
  };

  static validateDetail(req, res, next) {
    if (!req.body.detail) return res.status(400).send({ error: 'detail field is required' });
    if (!Array.isArray(req.body.detail)) return res.status(400).send({ error: 'title field should be an array'});
    if (!req.body.detail.length > 0) return res.status(400).send({ error: 'title field should not be empty'});
    next();
  }
}

export default Cheat;