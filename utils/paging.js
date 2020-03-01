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

    constructor(url, count=10, start=0) {
        this.url = url
        this.count = count
        this.start = start
    }

    next () {
        if (!this._getLocker()) {
            return
        }

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