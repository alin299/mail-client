/**
 * @name: promisic.js
 * @author: alin
 * @date: 2020-02-24 22:35
 * @description：将任意函数promise化
 * @update: 2020-02-24 22:35
 */

const pormisic = function (func) {
    return function (params) {
        return new Promise((resolve, reject) => {
            const args = Object.assign(params, {
                success: (res) => {
                  resolve(res)
                },
                fail: (error) => {
                    reject(error)
                }
            })
            func(args)
        })
    }
}

export {
    pormisic
}
