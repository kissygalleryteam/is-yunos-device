## 综述

is-yunos-device



* 版本：1.0
* 作者：方元
* demo：[http://gallery.kissyui.com/is-yunos-device/1.0/demo/index.html](http://gallery.kissyui.com/gallery/1.0/demo/index.html)
* 功能: 根据UA来判断手机是否是云OS系统 注：手机可能root掉之后刷了其他系统。

## 初始化组件
		
    S.use('gallery/is-yunos-device/1.0/index', function (S, is) {
          var info = is.getInfo();
            alert(JSON.stringify(info))
            /*数据格式
            {
            	data:yunosItem,//-> {"name_e": "G9","name_c": "大7","name": "基伍"}
            	is:false or true
            };
            */
    })
	

## API说明
