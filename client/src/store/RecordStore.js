import {makeAutoObservable} from "mobx";

export default class RecordStore {
    constructor() {
        this._types = [
            {id: 1, name: 'Rock'},
            {id: 2, name: 'R&B'}
        ]
        this._brands = [
            {id: 1, name: 'XO'},
            {id: 2, name: 'Atlantic'}
        ]
        this._records = [
            {
                rating: 3,
                id: 3,
                name: "Phil Collins – Face Value",
                price: 179,
                brandId: 1,
                typeId: 1,
                published: 2016,
                img: "4dcb77bb-c52e-4f7e-a53a-438e0464c067.jpeg",
            }
            ,        {
                id: 1,
                name: "The Weeknd - After Hours",
                price: 189,
                published: 2020,
                img: "c13b3cd6-d171-4926-aa8f-8fdb33cce488.jpeg",
                rating: 3,
                typeId: 2,
                brandId: 1,

            },
            {
                id: 2,
                name: "Bruno Mars – 24K Magic",
                price: 169,
                published: 2016,
                img: "57c1bb1e-cb98-4c39-9da5-d9d0e209c466.jpeg",
                rating: 4,
                typeId: 1,
                brandId: 2

            }
        ]
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
}