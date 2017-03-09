var express = require('express');
var path = require('path');
var http = require('http');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');

var db = require('./models/db'); // 連結資料庫
var routes = require('./routes'); // 設定 router
var city_routes = require('./routes/city');
var itinerary_routes = require('./routes/itinerary');

var app = express();

//設定handlebars view引擎
app.engine('.hbs', exphbs({ defaultLayout: 'main-layout', extname: '.hbs' }));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'views')); // 設定 views 路徑
app.use('/', express.static(path.join(__dirname, 'public'))); // 設定靜態檔案路徑

/**
 * 設定資料庫和 GUI 
 */
// var mongo_express = require('mongo-express/lib/middleware')
// var mongo_express_config = require('./mongo_express_config')
// app.use('/mongo_express', mongo_express(mongo_express_config));

// 取得 API 的路徑，暫時用不到
// const api = require('./server/routes/api');
// 設定 Server url 的 API 路徑
// app.use('/api', api);

// 解析 Client 來的 Post 需求，暫時用不到
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// 設定首頁路徑
app.get('/', routes.index);
app.use('/city', city_routes);
app.use('/itinerary', itinerary_routes);

// app.get('/test', (req, res) => {
//     res.sendFile(path.join(__dirname, 'views/test.html'));
// });

// var eventPath = require('./routes/event.js');
// app.use('/event', eventPath);
// var birds = require('./routes/birds');
// app.use('/birds', birds);

// 設定 exporess port 為：環境變數的 post 或者 3000
var port = process.env.PORT || '3000'
app.set('port', port);

// 建立 http server
server = http.createServer(app);

server.listen(port, () => console.log(`Server running on localhost:${port}`));