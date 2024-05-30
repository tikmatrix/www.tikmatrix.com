# Setting Up a Proxy

## Setting up a unique proxy IP address for each mobile device

### Recommended Settings

1. Purchase a VPS with residential proxy IPs from the target country. Ideally, choose a VPS with native IP and dual ISP.

    Recommended VPS:
    1. [Lisahost](https://lisahost.com/aff.php?aff=1886) 68 RMB/month
    2. [UUUVPS](https://uuuvps.com/aff.php?aff=189) 48 RMB/month
2. Use [x-ui](https://github.com/vaxilu/x-ui) to quickly set up a VPN on the VPS.

    ```shell
    bash <(curl -Ls https://raw.githubusercontent.com/vaxilu/x-ui/master/install.sh)
    ```

3. Install the [NekoBoxForAndroid](https://github.com/MatsuriDayo/NekoBoxForAndroid) client on your mobile device.

4. Add the proxy configuration to the client.

* If you are a user in China, you need to use a transit proxy to preemptively enhance the VPS node speed and prevent the VPS IP from being blocked.

    Recommended transit proxies:
    1. [KuaiNingMeng VPN](https://flm13.com/s/obpb11), which offers a free trial
    2. [Shadowsocks](https://portal.shadowsocks.au/aff.php?aff=23208)
