# XCode文件后面带有问号和字母的意思

1. A：工程发现里面很多文件的后面都带有一个`?`，一些文件的后面是`A`，而且有时看到一些文件的后面是`M`，这些都是代表什么意思啊？？

   Q：`A`代表`add`,`M`代表`modify`,`?`代表未识别出文件类型
  
2. A：为什么引入有的文件夹时黄色的，有时是蓝色的？？

   Q：勾选`create groups`表示把文件和引用都导入项目，此时文件夹显示为正常的黄色；

   勾选`create refrences`只是把原文件的引用导入，显示为蓝色，当原文件在原目录中找不到，项目就会报错，或者把目标项目在其他的mac设备上运行，也会报错

3. A：导入正常，为什么文件后都有问号，并且不能使用？？？

   Q：此时点击你的带问号的文件在Xcode上的菜单栏上点击`source control`->`add selected files`就可以了