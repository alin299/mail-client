/**
 * @name: theme.js
 * @author: alin
 * @date: 2020-02-25 09:27
 * @description：theme.js
 * @update: 2020-02-27 23:35
 */
import {Http} from "../utils/http";

class Theme {
    static locationA = 't-1'
    static locationE = 't-2'
    static locationF = 't-3'
    static locationH = 't-4'

    themes = []

    async getThemes() {
        this.themes = await Http.request({
            url: '/theme/by/names',
            data: {
                names: `${Theme.locationA},${Theme.locationE},${Theme.locationF},${Theme.locationH}`
            }
        })
    }

    getHomeLocationA() {
        // return this.themes.find(theme => {return this.themes.find(theme => theme.name === Theme.locationA);});
        return this.themes.find(theme => theme.name === Theme.locationA);
    }

    getHomeLocationE () {
        return this.themes.find(theme => theme.name === Theme.locationE)
    }

    getHomeLocationF() {
        return this.themes.find(t => t.name === Theme.locationF)
    }

    getHomeLocationH() {
        return this.themes.find(t => t.name === Theme.locationH)
    }

    static getHomeLocationESpu() {
        return this.getThemeSpuByName(this.locationE)
    }

    static getThemeSpuByName(name) {
        return Http.request({
            url: `/theme/name/${name}/with_spu`
        })
    }
}

export {
    Theme
}