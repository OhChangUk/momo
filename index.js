const express = require('express')
var cors = require('cors')
const app = express()
const port = 3000

app.use(cors())

app.get('/', function (req, res) {
  res.json('Hello World')
  // req(Request) - 요청
  // res(Response) - 응답
  // 응답에 'Hello World'를 담아서 보내겠다.
})
// http 메소드 - 요청의 목적, 종류를 알려주기 위해 사용하는 수단
// 요청 - get, post
// get - 주소창에서 데이터 전달
// post - 내부적으로 body에 데이터 전달
// 콜백함수 - 함수(끝나고 실행할 함수)

app.get('/dog', function (req, res) {
  res.json({'sound' : '멍멍'})
})
app.get('/user/:id', function (req, res) {
  // const q = req.params
  // console.log(q)
  const q = req.query
  console.log(q.name)

  res.json(q.name)
})

app.post('/user/:id', function (req, res) {
  const q = req.params
  console.log(q)

  res.json(q)
})

app.get('/sound/:name', (req,res)=>{
  const {name} = req.params
  
  if(name == 'dog'){
    res.json('강아지')
  }else if(name === 'cat'){
    res.json('고양이')
  }else if(name === 'bird'){
    res.json('새')
  }else{
    res.json('알 수 없음')
  }
})

app.listen(port, () => {
    console.log(`listening on port ${port}`) 
})
// port - 들어올수 있는 입구()