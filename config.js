// 核心配置

module.exports =  config = {
    //运行端口
    Port: 24454,

    //同源策略
    Access_setting: {
        // 允许什么网站的请求 *为允许所有网站访问 (同源策略需要浏览器支持)
        Origin: "*",

        // 允许接收的头部
        Headers: "Range,Cache-Control,Content-Language,User-Agent",

        // 允许的请求类型
        Methods: "GET,POST,PUT,OPTIONS,HEAD",
    },

    //响应头 server 可以进行伪装(或许)
    Server_name: "HuyaoiPicProcess Alpha",

    //X-Powered-By
    X_Powered_By: "huyaoi",


    //图片处理参数
    Pic_Process: {

        //原图保护 (还没写完)
        Original_Image_Protection: true
    }
}

