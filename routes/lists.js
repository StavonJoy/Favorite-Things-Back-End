const List = require('../../models/List')
const listCtrl = require('../../controllers/lists')

router.get('/', listsCtrl.index);
router.post('/', listsCtrl.create);
router.get('/:id', listsCtrl.show);
router.put('/:id', listsCtrl.update);
router.delete('/:id', listsCtrl.delete);

module.exports = router;