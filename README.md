> 原博文：https://alexzhong22c.github.io/2017/05/07/vue-checkbox-table/
>
>  [demo](https://alexzhong22c.github.io/vue-checkbox-table/vue-checkbox-table.html) (在线演示初次加载会有点慢，请稍等)

vue.js的出现，导致很多小插件的简单实现成为可能。

但是，正是由于**vue的数据绑定**使用起来耦合度太强，导致一些比较常规的插件的实现方式要稍微有所不同。

---

这是一个带复选框(checkbox)的表格，只用纯vue不用其他框架实现：

![](http://olqa2s510.bkt.clouddn.com/show-vue-checkbox-table.png)

## 效果：

- 表头的checkbox视之为一个全局(global)的checkbox，点击它可以实现“全选”和“全不选”
- 其他的checkbox视之为表中每个条目的一部分，若被勾选则代表该条目被勾选
- **如果全部条目的checkbox都被勾上，表头的checkbox会被自动勾上**

## 实现：

- 每个条目中的checkbox用`:value="item['id']"`来绑定，每当被勾选，对应的value(也就是这个id)会被放进**数组checkedIds**
- 用一个**深度 watcher**，通过判断**数组checkedIds**的长度，实现 “如果所有条目被勾选，**变量isAllChecked**变为true，则全局checkbox被自动勾选”
- 全局checkbox不能用`:value`来绑定状态，要用`:checked`和一个**onclick函数**绑定状态，否则逻辑会混乱

## 作用原理链：

### 当我点击全局checkbox：

1. 触发一个**onclick函数**
2. 改变**数组checkedIds**（因为`:value`的数据绑定，影响其他checkbox是否会被勾选）
3. 通过一个**深度watcher**得出**变量isAllChecked**的值(因为`:checked`的数据绑定，影响全局checkbox是否被勾选)

### 当我点击某个条目中的checkbox：

1. 因为`:value`的数据绑定，改变**数组checkedIds**
2. 通过一个**深度watcher**得出**变量isAllChecked**的值(因为`:checked`的数据绑定，影响全局checkbox是否被勾选)

## 最后：

如果对`:value`和`:checked`的用法不清楚可以看看官网的checkbox是怎么写的：

https://cn.vuejs.org/v2/guide/forms.html#checkbox

但是官网并没有像这里这样做出一个带复选框的表格。

重申一次，正是由于**vue的数据绑定**使用起来耦合度太强，全局checkbox不能用`:value`来绑定状态，要用`:checked`和一个**onclick函数**绑定状态，否则逻辑会混乱。

如果你想找**带分页导航条的**demo，可以参考我的：

https://github.com/AlexZhong22c/vue-table-nav

> 如果各位看官喜欢的话留一个Star吧！