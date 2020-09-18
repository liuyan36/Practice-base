let express = require('express');    //引入express模块
let Mock = require('mockjs');        //引入mock模块

let app = express();                //实例化express

/**
 * 配置test.action路由
 * @param  {[type]} req  [客户端发过来的请求所带数据]
 * @param  {[type]} res  [服务端的相应对象，可使用res.send返回数据，res.json返回json数据，res.down返回下载文件]
 */
app.all('/test.action', function(req, res) {
    res.send('hello world');
});
/**
 * 监听8090端口
 */
app.listen('8090');