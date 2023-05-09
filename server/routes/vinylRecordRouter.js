const Router = require('express')
const router = new Router()
const vinylRecordsController = require('../controllers/vinylRecordController')
const checkRole = require("../middleware/checkRoleMiddleware");

router.post('/',checkRole('ADMIN'), vinylRecordsController.create)
router.get('/', vinylRecordsController.getAll)
router.get('/:id', vinylRecordsController.getById)

module.exports = router