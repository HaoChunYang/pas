MySql新建用户并给授权指定的数据库权限

## 使用 root 管理员登陆 mysql

```
mysql -u root -p;
输入密码:
```

## 创建新用户

```
CREATE USER 'user1'@'%' IDENTIFIED BY '新用户密码';
```

> '%' - 所有情况都能访问
> 
> ‘localhost’ - 本机才能访问
> 
> ’xx.xx.xx.xx‘ - 指定 ip 才能访问

**修改密码命令**

```
update mysql.user set password=password('新密码') where user='user1';
```

## 查询用户

```
--查询用户
select user,host from mysql.user;
```

##  给该用户添加权限
```
grant all privileges on 想授权的数据库.* to 'user1'@'%';
```

## 刷新用户权限
```
flush privileges;
```

## 查看用户权限

```
--查看用户“user1”
show grants for user1;
```

## 删除用户
```
Delete FROM mysql.user Where User='user1';
```