const {VinylRecord} = require('../models/models')
const ApiError = require('../error/ApiError')
const uuid = require('uuid')
const path = require('path')


class VinylRecordController {
    async create(req, res, next) {
        try {
            const {name, price, brandId, typeId, info} = req.body
            const {img} = req.files
            let fileName = uuid.v4() + ".jpeg"
            img.mv(path.resolve(__dirname, '..', 'static', fileName))

            const item = await VinylRecord.create({name, price, brandId, typeId, img: fileName})
            return res.json(item)
        } catch (e) {
            next(ApiError.badReqest(e.message))
        }
    }

    async getAll(req, res) {

    }

    async getById(req, res) {

    }

}

module.exports = new VinylRecordController()