---
sidebar_position: 6
---

# 设置代理

为每个手机设置独立的代理IP地址

## 推荐设置

1. 购买目标国家的住宅代理IP的VPS,最好是原生IP,双ISP的VPS。

    推荐的vps:
    1. [丽萨主机](https://lisahost.com/aff.php?aff=1886) 68 RMB/月
    2. [UUUVPS](https://uuuvps.com/aff.php?aff=189) 48 RMB/月
2. 使用[x-ui](https://github.com/vaxilu/x-ui)在VPS上面一键搭建VPN。

    ```shell
    bash <(curl -Ls https://raw.githubusercontent.com/vaxilu/x-ui/master/install.sh)
    ```

3. 手机安装[NekoBoxForAndroid](https://github.com/MatsuriDayo/NekoBoxForAndroid)客户端。
4. 添加代理配置到客户端。

* 如果是中国用户,还需要使用一个机场代理做前置代理,一方面可以加速vps的节点速度,另外一方面可以防止vps的IP被封。

    推荐的机场:
    1. [快柠檬VPN](https://flm13.com/s/obpb11),支持免费试用
    2. [Shadowsocks](https://portal.shadowsocks.au/aff.php?aff=23208)
