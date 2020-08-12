## JSONObject遍历：
```
JSONObject  jsonobject=new JSONObject(str);
Iterator iterator = jsonobject.keys();
 
while(iterator.hasNext()){
 
String key = String.valueOf(iterator.next());//得到键
 
String value = jsonobject.getString(key);//得到值
 
}
```
## JSONArray遍历
```
JSONArray jsonArray=JSONArray.fromObject(arrayStr);
 
Iterator<String> iterator = null;
 
for (int i = 0; i < jsonArray.size(); i++) {
 
JSONObject item = jsonArray.getJSONObject(i);
 
JSONArray columnValues = item.getJSONArray("columnValues");
 
iterator = columnValues.iterator();
 
while (iterator.hasNext()) {
 
String key = String.valueOf(iterator.next());//得到键
 
String value=item.getString(key);//得到值
 
}
 
}
```
--------------------- 
作者：Amazing_deron 
来源：CSDN 
原文：https://blog.csdn.net/Deronn/article/details/78980812