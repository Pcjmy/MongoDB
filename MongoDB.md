# MongoDB

关系型数据库和非关系型数据库是两种不同的数据存储系统，它们有各自的优缺点和适用场景。

关系型数据库是基于关系模型的，使用 SQL 语言进行操作，数据之间有严格的结构和约束，保证了数据的完整性和安全性。但是它也有一些局限性，比如扩展困难、性能较低、格式单一等。

非关系型数据库是指非关系型的、分布式的、不保证 ACID 标准的数据存储系统。它使用键值对或文档等形式存储数据，格式灵活、性能高、可扩展性强、成本低。但是它也有一些不足，比如不支持 SQL、功能不完善、数据安全性差等。

非关系型数据库适合一些需要处理海量数据、高并发、高性能、格式多样的应用场景 。例如，社交网络、电商平台、物联网等。但是如果你需要保证数据的完整性和安全性，或者需要进行复杂的表关联查询，那么非关系型数据库可能不是一个好的选择。

## 命令行

```shell
> show dbs
admin     0.000GB
comment1  0.000GB
config    0.000GB
local     0.000GB
> use comment1
switched to db comment1
> show collections
comments
user1
> db.user1.insert({username: 'wangwu', password: 'abc'})
WriteResult({ "nInserted" : 1 })
> db.user1.find()
> db.user1.find({city:'shanghai'})
> db.version()
4.2.23
```

对于数据库来说，compass、命令行、nodejs 都是客户端
