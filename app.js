const express = require("express")
const app = express()
const port = 1000

const goodsRouter = require("./routes/goods.js") //goods.js
const cartsRouter = require("./routes/carts.js")
const connect = require("./schemas/index.js")
connect() //index에 connect라는 익명함수 실행

app.use(express.json())// body로 전달 받은 json을 사용하기 위한
//(body에 데이터가 들어왔을 떄 그 들어온 데이터를 사용할 수 있게 만들어주는 전역미들웨어)

// /api 일때만 goodsRouter을 실행한다
app.use('/api', [goodsRouter, cartsRouter])

app.post('/', (req, res) => {
    console.log(req.body)

    res.send("기본 URI에 POST 메소드가 정상적으로 실행되었습니다")
})

app.get('/', (req,res) => {
    console.log(req.query)

    // res.send("정상적으로 반환되었습니다")
   
    // const obj = {
    //     "KeyKey" : "value입니다",
    //     "안녕" : "안녕하세요",
    // }
    // res.json(obj)

    res.status(400).json({
        "KeyKey" : "value입니다",
        "안녕" : "안녕하세요",
    })
})

app.get("/:id", (req,res) => {
    console.log(req.params)

    res.send(":id URI에 정상적으로 반환되었습니다.")
})

// app.get('/', (req, res) => {
//     res.send('Hello World!')
// })

// 
// app.use("/api",goodsRouter) 

app.listen(port, () => {
    console.log(port, '포트로 서버가 열렸어요!')
})