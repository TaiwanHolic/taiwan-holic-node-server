var mongoose = require('mongoose');

var spotSchema = mongoose.Schema({
    id: Number, // 序數
    area: String,
    name: String,
    banner_url: String,
    photo_url: String,
    stars: Number,
    price: String, // 價位
    tags: [String],
    tellphone: String,
    address: String,
    web_url: String,
    is_wifi: Boolean, // 是否有 wifi
    is_pet: Boolean, // 是否可以攜帶寵物
    is_parking: Boolean, // 是否提供停車場
    open_time: [{ week: String, time: String }], // 營業時間
    map_x: Number, // X 座標 經度
    map_y: Number, // Y 座標 緯度
    pictures: [String] // 圖片
});
var Spot = mongoose.model('spots', spotSchema);

module.exports = Spot;