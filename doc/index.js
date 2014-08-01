KISSY.add(function  (S,listData) {
	return {
		getInfo:function  () {
			var uaStr = navigator.userAgent;
			var info = (/\(.*?\)/i).exec(uaStr);
			var arrInfo = info && info.length ? info[0].split(';') : [];
			var name = arrInfo[arrInfo.length -1];
			var is = false;
			var i = 0;
			var yunosItem ;
			var list = listData.list;
			for(;i<listData.list.length;i++){
				if (name.indexOf(list[i].name_e) != -1) {
					yunosItem = list[i];
				}
			}
			if (uaStr.toLowerCase().indexOf('yunos') != -1 || yunosItem) {
				is = !is;
			};

			return {data:yunosItem,is:is}
		}
	}
},{
	requires:['./listData.js']
})