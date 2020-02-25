/**
 * @name: activity.js
 * @author: alin
 * @date: 2020-02-25 16:02
 * @description：activity.js
 * @update: 2020-02-25 16:02
 */
import {Http} from "../utils/http";

class Activity {
    static location = 'a-2'
    static getLocationD () {
        return Http.request({
            url: `/activity/name/${Activity.location}`
        })
    }
}

export {
    Activity
}