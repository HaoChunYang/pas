(self.webpackChunkbugu=self.webpackChunkbugu||[]).push([[4459],{7711:(e,n,s)=>{"use strict";s.r(n),s.d(n,{data:()=>a});const a={key:"v-15522274",path:"/old_blog/iOS%E4%B8%AD%E5%8E%BB%E6%8E%89%E9%AB%98%E5%BE%B7%E5%9C%B0%E5%9B%BE%E6%B7%A1%E8%93%9D%E8%89%B2%E7%B2%BE%E5%BA%A6%E5%9C%88.html",title:"",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[],filePathRelative:"old_blog/iOS中去掉高德地图淡蓝色精度圈.md",git:{updatedTime:1597237797e3}}},4171:(e,n,s)=>{"use strict";s.r(n),s.d(n,{default:()=>i});const a=(0,s(6252).uE)('<p>注意：自iOS 地图 SDK V5.0.0 版本起支持。 下面贴上代码:</p><div class="language-Objective ext-Objective line-numbers-mode"><pre class="language-Objective"><code>- (void)mapView:(MAMapView *)mapView didAddAnnotationViews:(NSArray *)views{\n    MAAnnotationView *view = views[0];\n    // 放到该方法中用以保证userlocation的annotationView已经添加到地图上了。\n    if ([view.annotation isKindOfClass:[MAUserLocation class]])\n    {\n        MAUserLocationRepresentation *r = [[MAUserLocationRepresentation alloc] init];\n        r.showsAccuracyRing = false;///精度圈是否显示，默认YES\n        [self.mapView updateUserLocationRepresentation:r];\n    }\n}\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p><code>self.mapView.customizeUserLocationAccuracyCircleRepresentation = YES;</code> 这个属性有时不好使。</p>',3),i={render:function(e,n){return a}}}}]);