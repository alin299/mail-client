/**
 * @name: theme.js
 * @author: alin
 * @date: 2020-02-25 09:27
 * @description：theme.js
 * @update: 2020-02-26 13:57
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
}

export {
    Theme
}