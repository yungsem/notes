# Set(集合)

## 数据结构
Set 是无序集合，集合内的元素是不重复的字符串。 

> A Redis set is an unordered collection of unique strings (members). 

## 常用命令
### SADD
```sh
SADD key member [member ...]
```
将指定的元素添加到 key 对应的 set 中。如果添加的元素在 set 中已经存在，则被忽略。

```sh
127.0.0.1:6379> sadd set-a 1 1 1 2 2 2 3 4 5
(integer) 5
```

### SMEMBERS
```sh
SMEMBERS key
```
返回 key 对应的 set 中所有的元素。

```sh
127.0.0.1:6379> smembers set-a
1) "1"
2) "2"
3) "3"
4) "4"
5) "5"
```

### SISMEMBER
```sh
SISMEMBER key member
```
判断指定的元素是否在 key 对应的 set 中，如果在，返回 1 ；如果不在，返回 0 。

```sh
127.0.0.1:6379> sismember set-a 9
(integer) 0
127.0.0.1:6379> sismember set-a 5
(integer) 1
```

###  SREM
```sh
SREM key member [member ...]
```
从 key 对应的 set 中删除指定的元素。如果删除成功，返回 1 ；如果同时删除多个元素，其中有一个删除成功，也返回 1 ；如果元素不在 set 中，返回 0 ；如果 key 不存在，也返回 0 。

```sh
127.0.0.1:6379> srem set-a 9 5
(integer) 1
127.0.0.1:6379> srem set-a 5
(integer) 0
127.0.0.1:6379> srem set-b 5
(integer) 0

127.0.0.1:6379> smembers set-a
1) "1"
2) "2"
3) "3"
4) "4"
```

### SCARD
```sh
SCARD key
```
返回 key 对应的 set 中元素的个数。

```sh
127.0.0.1:6379> scard set-a
(integer) 4
```

### SRANDMEMBER
```sh
SRANDMEMBER key [count]
```
如果 count 不指定，则从 key 对应的 set 中随机返回一个元素。

如果指定了 count ，且 count > 0 ，就从 set 中随机返回 count 个元素，当 count > set 总元素个数时，则返回 set 中的所有元素。

如果指定了 count ，且 count < 0 ，就从 set 中随机返回 |count| 个元素，但是返回的元素可能会重复。

无论上述那种情况，返回的元素不会从 set 中删除。
 
```sh
127.0.0.1:6379> smembers set-a
1) "1"
2) "2"
3) "3"
4) "4"
127.0.0.1:6379> srandmember set-a
"4"
127.0.0.1:6379> srandmember set-a 3
1) "2"
2) "4"
3) "1"
127.0.0.1:6379> srandmember set-a 6
1) "1"
2) "2"
3) "3"
4) "4"
127.0.0.1:6379> srandmember set-a -2
1) "2"
2) "2"
127.0.0.1:6379> srandmember set-a -6
1) "1"
2) "1"
3) "4"
4) "1"
5) "2"
6) "3"
```

### SPOP
```sh
SPOP key [count]
```
如果 count 不指定，则从 key 对应的 set 中随机返回一个元素，并删除该元素。

如果指定了 count ，且 count > 0 ，就从 set 中随机返回 count 个元素，当 count > set 总元素个数时，则返回 set 中的所有元素，并删除返回的元素。

该命令中，count 不能小于 0 。

```sh
127.0.0.1:6379> smembers set-a
1) "1"
2) "2"
3) "3"
4) "4"
127.0.0.1:6379> spop set-a
"4"
127.0.0.1:6379> spop set-a 2
1) "1"
2) "2"
127.0.0.1:6379> smembers set-a
1) "3"
127.0.0.1:6379> spop set-a 5
1) "3"
127.0.0.1:6379> smembers set-a
(empty array)
```

### SMOVE
```sh
SMOVE source destination member
```
将指定元素从 source 对应的 set 中移动到 destination 对应的 set 中。转移成功返回 1 。

该命令涉及对两个 key 的操作，先从 source 中删除元素，再将元素添加的 destination 中，虽然涉及两个 key ，但是该命令是原子性的，即要么同时成功，要么同时失败。

如果 source 不存在或 source 中没有指定的元素，则什么也不做，返回 0 。

```sh
127.0.0.1:6379> sadd set-a 1 2 3 4 5 
(integer) 5
127.0.0.1:6379> sadd set-b a b c d e
(integer) 5
127.0.0.1:6379> smove set-a set-b 5
(integer) 1
127.0.0.1:6379> smove set-a set-b 0
(integer) 0
127.0.0.1:6379> smembers set-a
1) "1"
2) "2"
3) "3"
4) "4"
127.0.0.1:6379> smembers set-b
1) "a"
2) "b"
3) "c"
4) "d"
5) "e"
6) "5"
```

### SDIFF
```sh
SDIFF key1 [keyN ...]
```
返回 key1 对应的 set 中有的，但是 key2, ... keyN 对应的 set 中没有的元素。即差集。

```sh
127.0.0.1:6379> sadd set1 a b c d
(integer) 4
127.0.0.1:6379> sadd set2 c
(integer) 1
127.0.0.1:6379> sadd set3 a c e
(integer) 3
127.0.0.1:6379> sdiff set1 set2 set3
1) "b"
2) "d"
```

### SUNION
```sh
SUNION key [key ...]
```
返回指定的所有 key 对应 set 中所有的元素，会自动去重。即去重并集。

```sh
127.0.0.1:6379> sunion set1 set2 set3
1) "a"
2) "b"
3) "c"
4) "d"
5) "e"
```

### SINTER
```sh
SINTER key [key ...]
```
返回指定的所有 key 对应 set 中共有的元素。即交集。

```sh
127.0.0.1:6379> sinter set1 set2 set3
1) "c"
```

### SINTERCARD
```sh
SINTERCARD numkeys key [key ...] [LIMIT limit]
```
返回指定的所有 key 对应 set 中共有的元素的个数。

如果不指定 limit ，则返回所有共有元素的个数。

如果指定了 limit ，如果 limit < 共有元素的个数，则返回 limit 指定的个数；如果 limit > 共有元素的个数，则返回共有元素的个数

该命令只返回元素的个数，不返回结果集。

```sh
127.0.0.1:6379> sinter set1 set3
1) "a"
2) "c"
127.0.0.1:6379> sintercard 2 set1 set3
(integer) 2
127.0.0.1:6379> sintercard 2 set1 set3 limit 1
(integer) 1
127.0.0.1:6379> sintercard 2 set1 set3 limit 4
(integer) 2
```

## 使用场景
### 微信抽奖小程序
1. 点击参与抽奖按钮：
```sh
sadd key 用户ID
```

2. 抽奖页面显示有多少人参加了抽奖：
```sh
scard key
```

3. 抽奖开始，从参与人中随机抽取 2 名中奖者：
可以重复中奖：
```sh
srandmember key 2
```

不可重复中奖：
```sh
spop key 2
```

### 朋友圈查看点赞信息
1. 朋友给你的朋友圈点了一个赞：
```sh
sadd key 点赞用户ID
```

2. 取消点赞：
```sh
srem key 点赞用户ID
```

3. 显示所有点赞的用户：
```sh
smembers key
```

5. 统计点赞总数：
```sh
scard key
```

6. 判断某个朋友是否对这条朋友圈点赞过：
```sh
sismember key 用户ID
```

### 获取两个人共同的好友
1. 甲的好友：
```sh
sadd k1 好友ID
```

2. 乙的好友：
```sh
sadd k2 好友ID
```

3. 甲乙共同的好友：
```sh
sinter k1 k2
```

### 可能认识的人
甲的朋友是 a, b, c 

乙的朋友是 c, d, e

如果甲和乙是朋友，那么甲的朋友有可能也是乙的朋友，推荐给乙的可能认识的人就是 `甲的朋友集合减去已经是乙的朋友的朋友` ，即：
```sh
sadd set-a a b c
sadd set-b c d e
# 该命令的结果集就是基于甲推荐给乙的可能认识的人
sdiff set-a set-b
```

## 参考
[Redis sets](https://redis.io/docs/latest/develop/data-types/sets/)