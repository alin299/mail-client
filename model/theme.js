/**
 * @name: theme.js
 * @author: alin
 * @date: 2020-02-25 09:27
 * @description：theme.js
 * @update: 2020-02-25 09:27
 */
import {promisic} from "../miniprogram_npm/lin-ui/utils/util";
import {config} from "../config/config";
import {Http} from "../utils/http";

class Theme {
    static async getLocationA() {
            return await Http.request({
            url: '/coupon/whole_store',
            data: {
                name: 't-1'
            }
        })
    }
}

export {
    Theme
}