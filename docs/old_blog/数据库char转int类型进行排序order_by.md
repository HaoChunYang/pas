# 数据库char转int类型进行排序`order by`

数据库查询出结果进行排序order by 时，如果是char类型的数字，需要转成int型的再排序，才能正确排序。否则会出现：2排在10后面。

char转化int排序
## MySql
mysql为我们提供了两个类型转换函数：CAST和CONVERT

- 使用CAST将varchar转换成int类型排序
```
select server_id from cardserver
 where game_id = 1 
order by CAST(server_id as SIGNED) desc limit 10;
```

- 使用CONVERT将varchar转换成int类型排序
```
select server_id from cardserver
 where game_id = 1 
order by CONVERT(server_id,SIGNED) desc limit 10;
```
- +0
```
select server_id from cardserver 
where game_id = 1 
order by server_id+0 desc limit 10;
```