import {makeAutoObservable} from "mobx";

export default class RecordStore {
    get totalCount() {
        return this._totalCount;
    }

    setTotalCount(value) {
        this._totalCount = value;
    }

    get page() {
        return this._page;
    }

    setPage(value) {
        this._page = value;
    }

    get limit() {
        return this._limit;
    }

    setLimit(value) {
        this._limit = value;
    }

    constructor() {
        this._types = []
        this._brands = []
        this._records = []
        this._selectedType = {}
        this._selectedBrand = {}
        this._totalCount =0
        this._page = 1
        this._limit = 3
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
        this.setPage(1)
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