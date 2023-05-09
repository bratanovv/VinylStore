const Router = require('express')
const router = new Router()
const vinylRecordRouter = require('./vinylRecordRouter')
const typeRouter = require('./typeRouter')
const brandRouter = require('./brandRouter')
const userRouter = require('./userRouter')

router.use('/user',userRouter)
router.use('/type',typeRouter)
router.use('/brand',brandRouter)
router.use('/vinylrecord',vinylRecordRouter)

module.exports = router