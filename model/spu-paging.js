/**
 * @name: spu-paging.js
 * @author: alin
 * @date: 2020-03-03 22:41
 * @description：spu-paging.js
 * @update: 2020-03-03 22:41
 */
import {Paging} from "../utils/paging";

class SpuPaging {
    static getLatestPaging () {
        return new Paging({
            url: `spu/latest`
        }, 3)
    }
}