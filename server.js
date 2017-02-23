// 引用套件
var express = require('express');
var path = require('path');
var http = require('http');
var bodyParser = require('body-parser');
var routes = require('./routes');

var app = express();

// 連結 db
// 引用 db model Schema，require 這種方式不會有重複 define db schema 的問題，因為實體都是同一個
// var db = require('./models/db');
require('./models/db');
var Event = require('./models/event');

// 取得 API 的路徑，暫時用不到
// const api = require('./server/routes/api');
// 設定 Server url 的 API 路徑
// app.use('/api', api);

// 解析 Client 來的 Post 需求，暫時用不到
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// 設定靜態檔案路徑
app.use('/', express.static(path.join(__dirname, 'public')));
// 設定 render 的 html 路徑
app.set('views', path.join(__dirname, 'views'));

//設定handlebars view引擎
var exphbs = require('express-handlebars');
app.engine('.hbs', exphbs({ defaultLayout: 'main-layout', extname: '.hbs' }));
app.set('view engine', '.hbs');

// 設定首頁路徑
app.get('/', routes.index);
app.get('/test', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/test.html'));
});
var eventPath = require('./routes/event.js');
app.use('/event', eventPath);
var birds = require('./routes/birds');
app.use('/birds', birds);

// 測試 test 資料庫
app.get('/eventdb', function(req, res) {
    Event.find({}, function(err, data) {
        // data 為 json array 格式
        res.render('test', { data: data });
    })
});

// 設定 exporess port 為：環境變數的 post 或者 3000
var port = process.env.PORT || '3000'
app.set('port', port);

// 建立 http server
server = http.createServer(app);

server.listen(port, () => console.log(`Server running on localhost:${port}`));