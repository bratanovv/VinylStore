const Router = require('express')
const router = new Router()
const vinylRecordsController = require('../controllers/vinylRecordController')

router.post('/',vinylRecordsController.create)
router.get('/',vinylRecordsController.getAll)
router.get('/:id',vinylRecordsController.getById)

module.exports = router