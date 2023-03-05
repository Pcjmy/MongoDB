// 数据模型（规范数据格式）

const mongoose = require('./db')

// 定义 Schema（数据规范）
const UserSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true // 唯一，不重复
  },
  password: String,
  age: Number,
  city: String,
  // 性别
  gender: {
    type: Number,
    default: 0 // 0 - 保密，1 男，2 女
  }
}, {
  timestamps: true // 时间戳，自动添加文档的创建时间
})

// 定义 Model
const User = mongoose.model('user', UserSchema)

module.exports = {
  User
}