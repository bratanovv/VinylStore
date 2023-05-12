import {makeAutoObservable} from "mobx";

export default class UserStore{
    get basket() {
        return this._basket;
    }

    setBasket(value) {
        this._basket = value;
    }
    setUser(value) {
        this._user = value;
    }
    constructor() {
        this._basket=[]
        this._isAuth = false
        this._user = {}
        makeAutoObservable(this)
    }

    setIsAuth(bool) {
        this._isAuth= bool
    }

    setIsAuth(user) {
        this._isAuth= user
    }

    get isAuth() {
        return this._isAuth;
    }

    get user() {
        return this._user;
    }
}