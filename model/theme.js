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

    themes = []

    async getThemes() {
        this.themes = await Http.request({
            url: '/theme/by/names',
            data: {
                names: `${Theme.locationA},${Theme.locationE}`
            }
        })
    }

    getLocationA() {
        // return this.themes.find(theme => {return this.themes.find(theme => theme.name === Theme.locationA);});
        return this.themes.find(theme => theme.name === Theme.locationA);
    }

    getLocationE () {
        return this.themes.find(theme => theme.name === Theme.locationE)
    }

    static async getLocationESpu() {
        return await this.getThemeSpuByName(this.locationE)
    }

    static async getThemeSpuByName(name) {
        return await Http.request({
            url: `/theme/name/${name}/with_spu`
        })
    }
}

export {
    Theme
}