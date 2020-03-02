/**
 * @name: paging.js
 * @author: alin
 * @date: 2020-03-01 23:02
 * @description：paging.js
 * @update: 2020-03-01 23:02
 */
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
    }

    next () {
        if (!this._getLocker()) {
            return
        }
        this._getCurrentReq()
    }

    async _getData() {
        return await Http.request(this._getCurrentReq())
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