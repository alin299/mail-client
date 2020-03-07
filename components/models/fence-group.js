/**
 * @author: alin
 * @date: 2020-03-07 15:49
 * @description：fence-group
 * @update: 2020-03-07 15:49
 */
import {Matrix} from "./matrix";
import {Fence} from "./fence";

class FenceGroup {
    spu
    skuList = []
    fences

    constructor(spu) {
        this.spu = spu
        this.skuList = spu.sku_list
    }

    initFences() {
        const matrix = this._createMatrix(this.skuList)
        const fences = []
        const AT = matrix.transpose()
        AT.forEach(r => {
            const fence = new Fence(r)
            fences.push(fence)
        })
        this.fences = fences
        debugger
    }

    _createMatrix(skuList) {
        const m = []
        skuList.forEach(sku => {
            m.push(sku.specs)
        })
        return new Matrix(m)
    }



}

export {
    FenceGroup
}