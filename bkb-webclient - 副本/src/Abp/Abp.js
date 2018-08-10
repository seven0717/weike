import stroe from '../vuex/index'
import Requests from '../axios/http'

// json格式转树状结构
const transData = function (a, idStr, pidStr, chindrenStr){    
    var r = [], hash = {}, id = idStr, pid = pidStr, children = chindrenStr, i = 0, j = 0, len = a.length;    
    for(; i < len; i++){    
        hash[a[i][id]] = a[i];    
    }
    for(; j < len; j++){    
        var aVal = a[j], hashVP = hash[aVal[pid]];    
        if(hashVP){    
            !hashVP[children] && (hashVP[children] = []);    
            hashVP[children].push(aVal);    
        }else{    
            r.push(aVal);    
        }    
    }    
    return r;    
}

// 全局数据
// const globalData = $.parseJSON(sessionStorage.getItem('Abp'))

// 接口地址
const url = {

}

// 本地存储信息
const Storage = {
    AuthorizationBearer:sessionStorage.getItem('AuthorizationBearer'),
    localStorage:localStorage,
    sessionStorage:sessionStorage,
}

export default {
    stroe,
    Requests,
    url,
    Storage,
    // globalData,
    transData
}