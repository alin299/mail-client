/**
 * @author: alin
 * @date: 2020-03-07 16:23
 * @description：spu
 * @update: 2020-03-07 16:23
 */
import {Http} from "../utils/http";

class Spu {
    static async getDetail(id) {
        return await Http.request({
            url: `/spu/id/${id}/detail`
        })
    }
}

export {
    Spu
}