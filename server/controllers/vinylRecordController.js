const {VinylRecord, RecordInfo} = require('../models/models')
const ApiError = require('../error/ApiError')
const uuid = require('uuid')
const path = require('path')


class VinylRecordController {
    async create(req, res, next) {
        try {
            let {name, price, brandId, typeId, published ,info} = req.body
            const {img} = req.files
            let fileName = uuid.v4() + ".jpeg"
            img.mv(path.resolve(__dirname, '..', 'static', fileName))

            const item = await VinylRecord.create({name, price, brandId, typeId,published, img: fileName})

            if (info) {
                info = JSON.parse(info)
                info.forEach(i => RecordInfo.create({
                    title: i.title,
                    description: i.description,
                    deviceId: item.id
                }))
            }

            return res.json(item)
        } catch (e) {
            next(ApiError.badReqest(e.message))
        }
    }

    async getAll(req, res) {
        let {brandId, typeId, limit, page} = req.query
        page = page || 1
        limit = limit || 9
        let offset = page * limit - limit;
        let itemList
        if (!brandId && !typeId) {
            itemList = await VinylRecord.findAndCountAll({limit, offset})
        }
        if (brandId && !typeId) {
            itemList = await VinylRecord.findAndCountAll({where: {brandId}, limit, offset})
        }
        if (!brandId && typeId) {
            itemList = await VinylRecord.findAndCountAll({where: {typeId}, limit, offset})
        }
        if (brandId && typeId) {
            itemList = await VinylRecord.findAndCountAll({where: {typeId, brandId}, limit, offset})
        }
        return res.json(itemList)
    }

    async getById(req, res) {
        const {id} = req.params
        const item = await VinylRecord.findOne(
            {
                where: {id},
                include: [{model: RecordInfo, as: 'info'}]
            }
        )
        return res.json(item)
    }

}

module.exports = new VinylRecordController()