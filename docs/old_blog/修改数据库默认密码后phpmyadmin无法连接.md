修改数据库默认密码后phpmyadmin无法连接，提示phpMyAdmin 试图连接到 MySQL 服务器，但服务器拒绝连接 

解决方案 在phpMyAdmin的安装目录下找到配置文件 `config.inc.php`

修改其中的密码项`$cfg[‘Servers’][$i][‘password’]`就可以了
```
$cfg['Servers'][$i]['auth_type'] = 'config';
$cfg['Servers'][$i]['user'] = '用户名';
$cfg['Servers'][$i]['password'] = '密码';
$cfg['Servers'][$i]['extension'] = 'mysqli';
$cfg['Servers'][$i]['AllowNoPassword'] = true;
$cfg['Lang'] = '';
```
其它的不用改。修改后，文件一定要保存成功，才会生效。

__注意：有些默认编辑器权限不够无法保存。__