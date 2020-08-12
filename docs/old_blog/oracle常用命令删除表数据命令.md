# 删除表数据命令

## truncate 命令

`truncate table 表名；`
```
例如：删除客户信息表
truncate  table customerInfoTable；

注意：
    1.用truncate删除表数据，只是删除表中的数据，表结构不会被删除！

    2.删除整个表的数据时,过程是系统一次性删除数据,效率比较高

    3.truncate删除释放空间
```
## delete命令

`delete table 表名；`
```
例如：删除用户信息表
delete table customerInfoTable；

注意：
    1.用delete删除表数据，只是删除表中的数据，表结构不会被删除！

    2.虽然也是删除整个表的数据,但是过程是系统一行一行地删,效率比truncate低

    3.delete删除是不释放空间的
```
## drop命令

`drop table  表名；`
```
例如：删除用户信息表
drop table  customerInfoTable；

注意：
    1.用drop删除表数据，不但会删除表中的数据，连表结构也被删除了！
 
```
另外可以阅读：https://www.cr173.com/html/40708_1.html  。