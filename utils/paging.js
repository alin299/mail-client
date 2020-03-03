/**
 * @name: paging.js
 * @author: alin
 * @date: 2020-03-01 23:02
 * @description：paging.js
 * @update: 2020-03-01 23:02
 */
import {Http} from "./http";

class Paging {

    url
    count
    start
    locker
    url

    constructor(req, count=10, start=0) {
        this.req = req
        this.url = req.url
        this.count = count
        this.start = start
        this.accumulator = []
    }

    async _actualGetData() {
        const req = this._getCurrentReq()
        let result = await Http.request(req)
        if (!result) {
            return null
        }
        if (result.total === 0) {
            return {
                empty: true,
                items: [],
                hasMoreData: false,
                accumulator: []
            }
        }
        this.hasMoreData = result.page < result.total_page-1
        this.accumulator = (result.page==1 ? result.items : this.accumulator.concat(result.items))
        if (this.hasMoreData) {
            this.start += result.count
        }
        return {
            empty: false,
            items: result.items,
            hasMoreData: this.hasMoreData,
            accumulator: this.accumulator
        }
    }


    async next() {
        if (!this.hasMoreData) {
            return
        }
        if (!this._getLocker()) {
            return
        }
        const data = await this._actualGetData()
        this._releaseLocker()
    }

    _getCurrentReq () {
        let url = this.url
        const params = `start=${this.start}&conunt=${this.count}`
        if (url.indexOf('?')!==-1) {
            url += '&' + params
        } else {
            url += '?' + params
        }
        this.req.url = url
        return this.req
    }

    _getLocker () {
        if (this.locker) {
            return false
        }
        this.locker = true
        return true
    }

    _releaseLocker () {
        this.locker = false
    }
}

export {
    Paging
}