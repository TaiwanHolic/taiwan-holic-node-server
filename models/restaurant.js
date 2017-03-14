var mongoose = require('mongoose');

var restaurantSchema = mongoose.Schema({
    id: Number, // 序數
    area: String, // 地區：北、中、南、東
    name: String, // 店名
    banner_url: String, // 大圖
    photo_url: String, // 縮圖
    stars: Number, // 星星數
    price: String, // 價位
    tags: [String], // 標籤、分類
    tellphone: String, // 聯絡電話
    address: String, // 地址
    web_url: String, // 網址
    is_wifi: Boolean, // 是否有 wifi
    is_parking: Boolean, // 是否有停車場
    open_time: [{ week: String, time: String }], // 營業時間
    map_x: Number, // X 座標 經度
    map_y: Number, // Y 座標 緯度
    pictures: [String] // 圖片
});
var Restaurant = mongoose.model('restaurants', restaurantSchema);

module.exports = Restaurant;