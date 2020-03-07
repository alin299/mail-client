/**
 * @author: alin
 * @date: 2020-03-07 16:00
 * @description：matrix
 * @update: 2020-03-07 16:00
 */

class Matrix {
    m
    constructor(matrix){
        this.m = matrix
    }

    each(cb) {
        for (let j = 0; j < this.columnsNum; j++) {
            for (let i = 0; i < this.rowsNum; i++) {
                const element = this.m[i][j]
                cb(element, i, j)
            }
        }
    }

    transpose() {
        const desArr = []
        for (let j = 0; j < this.columnsNum; j++) {
            desArr[j] = []
            for (let i = 0; i < this.rowsNum; i++) {
                desArr[j][i] = this.m[i][j]
            }
        }
        return desArr
    }
    get rowsNum() {
        return this.m.length
    }

    get columnsNum() {
        return this.m[0].length
    }
}

export {
    Matrix
}