---
sidebar_position: 1
---

# 连接设备

现在支持 USB 和 TCP 连接。

## 步骤

1. 打开手机的开发者设置 - USB调试开关(参考下面截图)
2. 通过USB连接电脑. USB 连接是默认的连接方式。请等待 10 秒。
3. 如果需要OTG(TCP)连接，点击`Scan Tcp Devices`按钮。请等待 10 秒。

## 截图

![usbsetp12en.png](../img/usbsetp12.png)
![usbsetp12en.png](../img/usbsetp34.png)
![usbsetp12en.png](../img/usbsetp56.png)

### 提示

* 不同品牌操作流程可能有所差异,但是基本上大差不差.
* 如果没有反应,请尝试更换数据线或者电脑主机背后的USB口

## 如何连接主板机或机箱

1. 找你的主板机或机箱的卖家要授权文件:`adbkey` 和 `adbkey.pub`两个文件
2. 复制授权文件到电脑的`C:\用户\你的计算机用户名\.android`目录
3. 重启电脑

## 截图2

![usbsetp12en.png](../img/adbkey.png)

### 提示2

* 请妥善备份这2个授权文件,因为等下次重装系统或者更换新电脑时,还会需要用到这2个文件.​
* 这2个文件丢失的话,就需要接手机屏幕起来点 允许.
