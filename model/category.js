/**
 * @name: category
 * @author: alin
 * @date: 2020-02-25 14:28
 * @description：category
 * @update: 2020-02-25 14:28
 */

import {Http} from "../utils/http";

class Category {
    static async getGridCategory() {
        return await Http.request({
            url: '/category/grid/all'
        })
    }
}

export {
    Category
}