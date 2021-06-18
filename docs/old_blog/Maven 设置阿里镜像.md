Maven 默认的中央仓库速度慢，可以考虑换成阿里的镜像。修改方式主要有两种。

# 针对所有项目修改中央仓库

Maven 提供了全局配置文件 settings.xml 针对所有项目有效，位置是在安装目录 conf 下。可以将 settings.xml 文件拷贝到当前用户目录 .m2 下，此时只针对当前用户用效。 在 settings.xml 下找到 `<mirrors>` 节点，并在节点下增加镜像配置

```
  <mirrors>
     <mirror>
      <id>alimaven</id>
      <name>aliyun maven</name>
      <url>http://maven.aliyun.com/nexus/content/groups/public/</url>
      <mirrorOf>central</mirrorOf>
    </mirror>
  </mirrors>
```

- id：唯一标识一个镜像
- name：镜像名称
- url：镜像地址
- mirrorOf：代表一个镜像的替代位置，例如 central 就表示代替官方的中央仓库

# 分别给每个项目配置不同的中央仓库

Maven 可以针对每个项目配置不同的中央仓库，在项目 pom.xml `<repositories>` 节点下增加如下配置

```
<repository>
  <id>alimaven</id>
  <name>aliyun maven</name>
  <url>http://maven.aliyun.com/nexus/content/groups/public/</url>
</repository>
```
