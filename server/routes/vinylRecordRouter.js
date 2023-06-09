const Router = require('express')
const router = new Router()
const vinylRecordsController = require('../controllers/vinylRecordController')
const checkRole = require("../middleware/checkRoleMiddleware");

router.post('/',checkRole('ADMIN'), vinylRecordsController.create)
router.get('/', vinylRecordsController.getAll)
router.get('/:id', vinylRecordsController.getById)
router.get('/find/:name', vinylRecordsController.getByName)
router.get('/delete/:id', vinylRecordsController.deleteById)
router.get('/b/:id', vinylRecordsController.addddd)
router.get('/b/b/b', vinylRecordsController.gett)

module.exports = router