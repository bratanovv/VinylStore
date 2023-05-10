import {makeAutoObservable} from "mobx";

export default class RecordStore {

    constructor() {
        this._types = [
            {id: 1, name: 'Rock'},
            {id: 2, name: 'R&B'},
            {id: 3, name: 'Jazz'},
            {id: 4, name: 'Hip Hop'},
            {id: 5, name: 'Pop'},
            {id: 6, name: 'Indie'}
        ]
        this._brands = [
            {id: 1, name: 'XO'},
            {id: 2, name: 'Atlantic'},
            {id: 3, name: 'Interscope'},
        ]
        this._records = [

            {
                id: 1,
                name: "The Weeknd - After Hours",
                price: 189,
                published: 2020,
                img: "https://thumb.tildacdn.com/tild3631-3036-4536-b163-313233363834/-/format/webp/1kcOvC27Y-ByNVeA5Uxj.jpeg",
                rating: 3,
                typeId: 2,
                brandId: 1,

            },
            {
                id: 2,
                name: "Bruno Mars – 24K Magic",
                price: 169,
                published: 2016,
                img: "https://static.tildacdn.com/tild3939-3161-4736-b865-383362666265/719SroNweJL_SL1500_.jpg",
                rating: 4,
                typeId: 1,
                brandId: 2

            },
            {
                rating: 3,
                id: 3,
                name: "Phil Collins – Face Value",
                price: 179,
                brandId: 1,
                typeId: 1,
                published: 2016,
                img: "https://thumb.tildacdn.com/tild3437-3236-4133-b836-326265363336/-/format/webp/tyler-the-creator-ca.jpg",
            },
            {
                rating: 5,
                id: 4,
                name: "Lana Del Rey - Born To Die",
                price: 189,
                brandId: 3,
                typeId: 6,
                published: 2012,
                img: "https://static.tildacdn.com/tild3939-3161-4736-b865-383362666265/719SroNweJL_SL1500_.jpg",
            },
            {
                id: 6,
                name: "The Weeknd - After Hours",
                price: 189,
                published: 2020,
                img: "https://thumb.tildacdn.com/tild3631-3036-4536-b163-313233363834/-/format/webp/1kcOvC27Y-ByNVeA5Uxj.jpeg",
                rating: 3,
                typeId: 2,
                brandId: 1,

            },
            {
                id: 7,
                name: "Bruno Mars – 24K Magic",
                price: 169,
                published: 2016,
                img: "https://static.tildacdn.com/tild3939-3161-4736-b865-383362666265/719SroNweJL_SL1500_.jpg",
                rating: 4,
                typeId: 1,
                brandId: 2

            },
            {
                rating: 3,
                id: 8,
                name: "Phil Collins – Face Value",
                price: 179,
                brandId: 1,
                typeId: 1,
                published: 2016,
                img: "https://thumb.tildacdn.com/tild3437-3236-4133-b836-326265363336/-/format/webp/tyler-the-creator-ca.jpg",
            },
            {
                rating: 5,
                id: 4,
                name: "Lana Del Rey - Born To Die",
                price: 189,
                brandId: 3,
                typeId: 6,
                published: 2012,
                img: "https://static.tildacdn.com/tild3939-3161-4736-b865-383362666265/719SroNweJL_SL1500_.jpg",
            }
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