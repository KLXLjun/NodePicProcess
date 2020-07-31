const express = require('express'),
      fs = require('fs'),
      path = require('path'),
      gm = require('gm');

const app = express();
const config = require('./config'),
      errpage = require('./err');

const port = config.Port || 3000;
const l = path.join(__dirname, 'pic');

app.all("*", function(req, res, next) {
    res.header("Access-Control-Allow-Origin", config.Access_setting.Origin);
    res.header("Access-control-Allow-Headers", config.Access_setting.Headers);
    res.header("Access-Control-Allow-Methods", config.Access_setting.Methods);
    res.header('X-Powered-By', config.X_Powered_By);
    res.header('Server', config.Server_name);
	console.log(req.method,req.url,req.headers['user-agent']);
    next();
});

app.get('/', (req, res) => res.send('Hello World!'))

app.get(/^\/(.+).(jpg|png|gif|webp|bmp)$/,function(req,res){
    let src = RegExp.$1,
		type = RegExp.$2;
    let imgFile = path.join(l, src+'.'+type);

    let w = req.query.w || null,
        h = req.query.h || null
        quality = req.query.q || null;

    if(config.Pic_Process.Original_Image_Protection == true && w == null && h == null && quality == null){
        res.status(403).send(errpage.str403);
    }else{
        if(fs.existsSync(imgFile)){        
            gm(imgFile)
            .resize(w,h)
            .quality(quality)
            .stream(function(err, stdout, stderr) {
                if (err) {
                    console.log(err);
                    res.end();
                }
                res.type(type);
                stdout.pipe(res);
            });
        }else{
            res.status(404).send(errpage.str404);
        }
    }
});

app.use(function (req, res) {
    res.status(404).send(errpage.str404);
    // 所有未处理的请求路径都会跑到这里
    // 404
});

app.listen(port, () => console.log(`Server listening on port ${port}!`))