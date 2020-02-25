import {config} from "../config/config";
import {promisic} from "../miniprogram_npm/lin-ui/utils/util";

class Http {
    static async request({url, data, method='GET'}) {
        return await promisic(wx.request)({
            url: `${config.apiBaseUrl}${url}`,
            data,
            method,
            header: {
                appkey: config.appkey
            }
        }).then((res)=>{
            if (res.statusCode == 200) {
                return res.data
            } else {
                wx.showToast({
                  title: `请求错误：${res.data.error}`,
                    icon: "none"
                })
            }
        })
    }
}

export {
    Http
}