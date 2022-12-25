const express = require("express")
const router = express.Router()

const Cart = require("../schemas/cart.js")
//cart라는 스키마를 가지고 와야함
const Goods = require("../schemas/goods.js")
//cart에ㅐ 해당하는 정보를 goods에서 찾아야 해서 goods라는 스키마 가지고 옴

//cart에 해당하는 api 만들기
//localhost:1000/api/carts Get Method
router.get("/carts", async(req,res) => {
    const carts = await Cart.find({})
    //장바구니(cart)안에 있는 모든 데이터 가져와서 조회하기
    // [
    //     {goodsId, quantity},
    //     {goodsId, quantity},
    // ]
    const goodsIds = carts.map((cart) => {
        return cart.goodsId
    })
    //cart에 goodsId와 quantity 데이터가 필요
    //goodsId에 해당하는 상품을 다시 가져와줘야함
    //배열 안에 있는 method map를 이용하면 carts안에
    // 데이터들을 한번씩 순회를 돌게 해줌
    //순회를 돌면서 return된 값들만 할당되는 형식
    //goodsId에 해당하는 goods를 가져와야함

    const goods = await Goods.find({goodsId: goodsIds})
    //Goods에 해당하는 모든 정보를 자기고 올건데,
    //goodsIds 변수 안에 존재하는 값일 때만 조회

    const results = carts.map((cart) => {
        return {
            "quantity": cart.quantity,
            "goods": goods.find((item) => item.goodsId === cart.goodsId),
        }
    })

    res.json({
        "carts": results,
    })
    //모든 장바구니 데이터 반복문 돌기 그 값을 cart에 할당

    
    
})


module.exports = router