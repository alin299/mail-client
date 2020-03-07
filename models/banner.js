/**
 * @name: banner
 * @author: alin
 * @date: 2020-02-25 10:37
 * @description：banner
 * @update: 2020-02-25 10:37
 */

import {Http} from "../utils/http";

class Banner {
    static locationB = 'b-1'
    static locationG = 'b-2'
    static async getHomeLocationB() {
        return await Http.request({
            url: `/banner/name/${(Banner.locationB)}`
        })
    }
    static async getHomeLocationG() {
        return await Http.request({
            url: `/banner/name/${(Banner.locationG)}`
        })
    }

}

export {
    Banner
}