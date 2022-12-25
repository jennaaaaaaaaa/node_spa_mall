const mongoose = require("mongoose")

//defaultId 라는 하나의 데이터를 정의한 것
//true 무조건 값이 있어야 한다
const cartSchema = new mongoose.Schema({
    goodsId: {
        type: Number,
        required: true,
        unique: true
    },
    quantity: {
        type: Number,
        require: true,

    }
})

//mongoose model => defaults의 컬렉션
//컬렉션 명: Defaults/ defaultSchema: 실제로 데이터가 생성될 스키마 값
// module.exports = mongoose.model("Defaults", defaultSchema)
module.exports = mongoose.model("Cart", cartSchema)