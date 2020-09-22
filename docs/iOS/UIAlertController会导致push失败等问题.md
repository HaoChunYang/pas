# UIAlertController会导致push失败等问题

**当前界面的`UIAlertController`弹起的时候，我通过find当前视图的顶层controller，然后跳转，最后失败，原因在于最顶层的是`UIAlertcontroller`，不存在`navgationController`，不能`push`。**

正确的写法：
``` swift
[alertV dismissViewControllerAnimated:YES completion:^{

    [self.navigationController pushViewController:newController animated:YES];

}；
```

**务必在UIAlertController dismiss成功后再push界面**