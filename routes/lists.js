const router = require('express').Router();
const listsCtrl = require('../controllers/api/lists')

router.get('/', listsCtrl.index);

router.use(require('../config/auth'))
router.post('/', checkAuth, listsCtrl.create);
router.get('/:id', checkAuth, listsCtrl.show);
router.put('/:id', checkAuth, listsCtrl.update);
router.delete('/:id', checkAuth, listsCtrl.delete);

function checkAuth(req, res, next) {
    console.log(req.user)
    if (req.user) return next();
    return res.status(401).json({msg: 'Not Authorized'});
}

module.exports = router; 