// 使用 model 操作数据库

const { User } = require('./model')

// 定义一个async的匿名函数，并执行。为了里面能用await
!(async () => {
  // 新增数据
  const zhangsan = new User({
    username: 'zhangsan',
    password: 'abc',
    age: 20,
    city: 'beijing',
    gender: 1
  })
  zhangsan.save()
})()