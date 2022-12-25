const mongoose = require("mongoose")

//defaultId 라는 하나의 데이터를 정의한 것
//true 무조건 값이 있어야 한다
const goodsSchema = new mongoose.Schema({
    goodsId: {
        type: Number,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true, //이름이 무조건 있어야한다
        unique: true,//똑같은 이름은 존재하지 않는다
    },
    thumbnailUrl: {
        type: String,
    },
    category: {
        type: String,
    },
    price: {
        type: Number,
    }
})

//mongoose model => defaults의 컬렉션
//컬렉션 명: Defaults/ defaultSchema: 실제로 데이터가 생성될 스키마 값
// module.exports = mongoose.model("Defaults", defaultSchema)
module.exports = mongoose.model("Goods", goodsSchema)