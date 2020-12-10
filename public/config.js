/*
 * @Author: caist
 * @Date: 2020-02-28 10:13:06
 * @LastEditTime: 2020-04-24 16:39:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \portal-font\public\config.js
 */
// window.baseurl=''
// http%3a%2f%2flocalhost%3a8080%2f%23%2flogin_by_cas
// http%3a%2f%2f192.168.140.59%3a8080%2f%23%2flogin_by_cas



const urlConfig = {
    'casLogOutPre': 'http://192.168.12.146:8081/cas/logout?service=',
    'casLogInPre': 'http://192.168.12.146:8081/cas/login?service=',
    // 'casServiceUrl': process.env.NODE_ENV === 'development' ? 'http%3a%2f%2flocalhost%3a8080%2f%23%2flogin_by_cas': 'http%3a%2f%2f117.73.9.79%3a8080%2f%23%2flogin_by_cas',
    'casServiceUrl': 'http%3a%2f%2f192.168.12.146%3a8080%2f%23%2flogin_by_cas',
    'localCasServiceUrl': 'http%3a%2f%2flocalhost%3a8080%2f%23%2flogin_by_cas',
    'dev': 'http://192.168.12.146:9000',
    'pro': 'http://192.168.12.146:9000',
    'imgUpload': '/api/portal/uploadPhoto',
    'imgPathPre': 'http://192.168.12.146:9000/api/system/photo/',
    ncUrl:"www.baidu.com",
    afUrl:"www.baidu.com",
    ypUrl:'http://192.168.12.146:8090'
};

localStorage.setItem("urlConfig", JSON.stringify(urlConfig));

// export default urlConfig