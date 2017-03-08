var mongoose = require('mongoose');

var itinerarySchema = mongoose.Schema({
    _id: String, // ID
    id: Number,
    name: String, // 名稱
    banner_url: String, // 大圖
    photo_url: String, // 縮圖
    stars: Number,
    tags: [String],
    day: String, // 天數
    suggest_time: String, // 建議遊玩期間
    area: String, // 地區
    city: String, // 城市
    overview: String, // overview
    map_x: String, // 地圖(X座標)
    map_y: String, // 地圖(Y座標)
    package: String, // package
    equipments: [String],
    book_url: String, // book a package
    link: String,
    file: String, // PDF 檔案位置
    pictures: [String] // 照片
});
var Itinerary = mongoose.model('itineraries', itinerarySchema);

module.exports = Itinerary;