var mongoose = require('mongoose');

var staySchema = mongoose.Schema({
    id: Number, // 序數
    area: String,
    city: String,
    name: String,
    banner_url: String,
    photo_url: String,
    stars: Number,
    category: String, // 分類
    price: String, // 價位
    tags: [String],
    tellphone: String,
    address: String,
    booking_url: String, // booking.com 的網址
    web_url: String, // 官方網站
    bus: String, // 公車或交通路線
    amenities: [String], // 便利的服務或設施：洗衣機、烘衣機、置物櫃、保全、無障礙空間、電梯、空調、停車場、wifi
    map_x: Number, // X 座標 經度
    map_y: Number, // Y 座標 緯度
    pictures: [String] // 圖片
});
var Stay = mongoose.model('stays', staySchema);

module.exports = Stay;