注意：自iOS 地图 SDK V5.0.0 版本起支持。
下面贴上代码:

```Objective-C
- (void)mapView:(MAMapView *)mapView didAddAnnotationViews:(NSArray *)views{
    MAAnnotationView *view = views[0];
    // 放到该方法中用以保证userlocation的annotationView已经添加到地图上了。
    if ([view.annotation isKindOfClass:[MAUserLocation class]])
    {
        MAUserLocationRepresentation *r = [[MAUserLocationRepresentation alloc] init];
        r.showsAccuracyRing = false;///精度圈是否显示，默认YES
        [self.mapView updateUserLocationRepresentation:r];
    }
}
```

`self.mapView.customizeUserLocationAccuracyCircleRepresentation = YES;`
这个属性有时不好使。