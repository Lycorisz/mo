---
title: 自适应插件------lib-flexible
date: "2022-4-27"
categories:
  - Vue
tags:
  - 技巧
publish: true
---

### 项目中需要对器械进行控制，固使用 mqtt 进行开发

#### 首先在入口 index.html 中引入

```
  <script src="https://cdnjs.cloudflare.com/ajax/libs/paho-mqtt/1.0.1/mqttws31.min.js" type="text/javascript"></script>
```

#### 然后再创建工具类 mqtt.js

```
    var hostname = '121.5.238.208', // 约定好的地址
        port = 8083, // 约定好的端口，默认8083，需要后端配合打开8083端口
        clientId = '', // 约定的id
        timeout = 5000,
        keepAlive = 100,
        cleanSession = false,
        ssl = false,
        // userName = 'mao2080',
        // password = '123',
        topic = '/plc/plc_data'; // 约定的topic
    var client = new Paho.MQTT.Client(hostname, port, clientId);
    //建立客户端实例
    var options = {
        invocationContext: {
            host: hostname,
            port: port,
            path: client.path,
            clientId: clientId
        },
        timeout: timeout,
        keepAliveInterval: keepAlive,
        cleanSession: cleanSession,
        useSSL: ssl,
        // userName: userName,
        // password: password,
        onSuccess: onConnect,
        onFailure: function (e) {
            console.log(e);
            let s = "{time:" + new Date().Format("yyyy-MM-dd hh:mm:ss") + ", onFailure()}";
            console.log(s);
        }
    };
    client.connect(options);
    //连接服务器并注册连接成功处理事件
    function onConnect() {
        console.log("onConnected");
        let s = "{time:" + new Date().Format("yyyy-MM-dd hh:mm:ss") + ", onConnected()}";
        client.subscribe(topic, {qos: 0});
    }

    client.onConnectionLost = onConnectionLost;

    //注册连接断开处理事件
    client.onMessageArrived = onMessageArrived;

    //注册消息接收处理事件
    function onConnectionLost(responseObject) {
        console.log(responseObject);
        let s = "{time:" + new Date().Format("yyyy-MM-dd hh:mm:ss") + ", onConnectionLost()}";
        console.log(s);
        if (responseObject.errorCode !== 0) {
            console.log("onConnectionLost:" + responseObject.errorMessage);
            console.log("连接已断开");
        }
    }

    function onMessageArrived(message) {
        let s = "{time:" + new Date().Format("yyyy-MM-dd hh:mm:ss") + ", onMessageArrived()}";
        console.log(message);
        if (!!message.destinationName&&message.destinationName=='/plc/plc_data'){
            localStorage.setItem('mqtt', message.payloadString)
        }
        // console.log("收到消息:" + message.payloadString);
    }

    function send(s) {
        // var s = document.getElementById("msg").value;
        // 此处s需要与后端约定格式，按照指定格式编写json数据
        if (s) {
            // s = "{time:" + new Date().Format("yyyy-MM-dd hh:mm:ss") + ", content:" + (s) + ", from: web console}";
            console.log(s)
            let message = new Paho.MQTT.Message(JSON.stringify(s));
            message.destinationName = '/plc/write';
            console.log(message)
            client.send(message);
            // document.getElementById("msg").value = "";
        }
    }

    var count = 0;

    function start() {
        window.tester = window.setInterval(function () {
            if (client.isConnected) {
                var s = "{time:" + new Date().Format("yyyy-MM-dd hh:mm:ss") + ", content:" + (count++) +
                    ", from: web console}";
                message = new Paho.MQTT.Message(s);
                message.destinationName = topic;
                client.send(message);
            }
        }, 1000);
    }

    function stop() {
        window.clearInterval(window.tester);
    }

    Date.prototype.Format = function (fmt) { //author: meizz
        var o = {
            "M+": this.getMonth() + 1, //月份
            "d+": this.getDate(), //日
            "h+": this.getHours(), //小时
            "m+": this.getMinutes(), //分
            "s+": this.getSeconds(), //秒
            "q+": Math.floor((this.getMonth() + 3) / 3), //季度
            "S": this.getMilliseconds() //毫秒
        };
        if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
        for (var k in o)
            if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[
                k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        return fmt;
    }

    export default {
        onConnect,
        onMessageArrived,
        send
    }
```

### 最后在需要的页面引入使用即可

```
 import mqtt from "../utils/mqtt.js";
```
