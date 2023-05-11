import {makeAutoObservable} from "mobx";

export default class RecordStore {

    constructor() {
        this._types = []
        this._brands = [

        ]
        this._records = [

        ]
        this._selectedType = {}
        this._selectedBrand = {}
        makeAutoObservable(this)
    }


    get types() {
        return this._types;
    }

    setTypes(value) {
        this._types = value;
    }

    get brands() {
        return this._brands;
    }

    setBrands(value) {
        this._brands = value;
    }

    get records() {
        return this._records;
    }

    setRecords(value) {
        this._records = value;
    }

    setSelectedType(type) {
        this._selectedType = type
    }

    get selectedType() {
        return this._selectedType;
    }

    setSelectedBrand(brand) {
        this._selectedBrand = brand
    }

    get selectedBrand() {
        return this._selectedBrand;
    }
}