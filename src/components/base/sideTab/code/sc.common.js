/**
 * Created by Faker on 2017/2/14.
 */
/**
 * 工具类
 * js中数组遍历for与for in区别(强烈建议不要使用for in遍历数组,1不安全, 2这个方法比普通的循环慢很多，因为它要遍历对象的原型和整个原型链上的所有属性，这是非常耗时的)
 * 标准的for循环中的i是number类型,表示的是数组的下标,但是foreach循环中的i表示的是数组的key是string类型,因为js中一切皆为对象
 * 假设有一天谁不小心自己为了扩展js原生的Array类，或者引入一个外部的js框架也扩展了原生Array。那问题就来了。再此建议两点
	1,不要用for in遍历数组，全部统一采用标准的for循环变量数组( 我们无法保证我们引入的js是否会采用prototype扩展原生的Array )
	2,如果要对js的原生类扩展的时候，不要采用prototype了
 *
 */
// import Vue from 'vue'
// import Resource from 'vue-resource'
// import ElementUI from 'element-ui'

// Vue.use(Resource)
  window.utils = {
    /** 数组的深拷贝，仅限 简单元素
        	方式1,  arr = vArr.concat(),
         	方式2,  arr = vArr.slice(0)
         	* 方式3,如下
    */
    arrClone: function(vArr) {
        var arr = [];
        for (var i in vArr) {
            arr.push(vArr[i]);
        }
        return arr;
    },
    //复制为新对象
    objClone: function(srcObj, openDeepClone) {
        return openDeepClone ? this.objDeepClone(srcObj) : this.objExtendClone(srcObj);
    },
    //复制属性 给新对象
    objPropertyClone: function(srcObj, cloneObj, openDeepClone) {
        return openDeepClone ? this.objDeepClone(srcObj, cloneObj) : this.objExtendClone(srcObj, cloneObj);
    },
    /** 对象的浅拷贝， 用于简单的对象继承，非构造函数的继承
        拷贝有一个问题。那就是，如果父对象的属性等于数组或另一个对象，那么实际上，子对象获得的只是一个内存地址，而不是真正拷贝，因此存在父对象被篡改的可能。
    */
    objExtendClone: function(srcObj, cloneObj) {
        var cloneObj = cloneObj || {};
        for (var i in srcObj) {
            cloneObj[i] = srcObj[i];
        } //cloneObj.uber = srcObj;
        return cloneObj;
    },
    /** 深度拷贝
	 *  方式1转换成json再转换成对象实现对象的深拷贝  var obj2 = JSON.parse(JSON.stringify(obj))
	 *  方式2 仅复制显示的属性
	 */
    objDeepClone: function(srcObj, cloneObj) {
        var isNoCloneObj = cloneObj === undefined;
        var cloneObj = cloneObj || {};
        //	 if(isNoCloneObj){
        //	 	cloneObj = JSON.parse(JSON.stringify(srcObj)); //不适用于 正则或非json、的对象
        //	 }else {
        for (var i in srcObj) {
            if (utils.isObject(srcObj[i]) ) { // type=== 'object' 这样判断 仍然发现null 错误
                cloneObj[i] = (srcObj[i].constructor === Array) ? [] : {};
                this.objDeepClone(srcObj[i], cloneObj[i]);
            } else {
                cloneObj[i] = srcObj[i];
            }
        }
        return cloneObj;
    },
    myForEach: function(arr, callBack) {
        if (utils.isNotEmpty(arr)) { // && arr.length > 0
            for (var i = 0,
            len = arr.length; i < len; i++) {
                callBack(i, arr[i]);
            }
        }
//        else {
//            console.debug('myForEach中该对象arr不能为空！');
//        }
    },
    //treeNode：节点的 【listNodeName】属性数组，  深度优先搜索(DFS)是图论中的经典算法//非递归深度优先实现  效率更高更安全
    depthFirstSearchList: function(treeNode, listNodeName, callback) {
    	var treeNodes = treeNode[listNodeName];
        if (utils.isEmpty(treeNodes)) {
            return;
        }
        var _this = this;
        var idArr = [],
        stack = [];
        //先将第一层节点放入栈
        utils.myForEach(treeNodes, function(index, sonObj) {
            stack.push(sonObj);
        })
        var treeNode;
        while (stack.length) {
            treeNode = stack.shift();
            callback & callback(treeNode, idArr);
            //如果该节点有子节点，继续添加进入栈顶
            if (treeNode[listNodeName] && treeNode[listNodeName].length) {
                stack = treeNode[listNodeName].concat(stack);
            }
        }
        return idArr;
    },
    //treeNode：单个对象的【listNodeName】属性
    depthFirstSearchObj: function(treeNode, PropertityName, callback) {
    	var treeNodePropertity = treeNode[PropertityName];
    	if (utils.isEmpty(treeNodePropertity)) {
    		return;
    	}
    	var _this = this;
    	var propertitiesArr = [],
    	stack = [];
    	//先将第一层节点放入栈
    	stack.push(treeNodePropertity);
    	var treeNodePropertity2, treeNode;
    	while (stack.length) {
    		treeNodePropertity2 = stack.shift();
    		treeNode = callback(treeNodePropertity2, propertitiesArr);
    		//如果该节点有子节点，继续添加进入栈顶
    		if (utils.isNotEmpty(treeNode[PropertityName])) {
    			stack.push(treeNode[PropertityName]);
    		}
    	}
    	return propertitiesArr;
    },
    /** Js判断参数(String,Array,Object)是否为undefined或者值为空*/
    isEmpty: function(str) {
        //           if(typeof str== 'undefined' || str == null) { // 等同于 value === undefined || value === null
        //               return true;
        //           }
        var type = utils.getDataType(str);
        switch (type) {
        case 'Undefined':
        case 'Null':
            return true;
        case 'String':
            return (str = str.replace(/^\s|\s$/g, '')).length == 0 || str == 'null';
        case 'Array':
            return str.length == 0;
        case 'Object':
            return utils.isEmptyObject(str); // 普通对象使用 for...in 判断，有 key 即为 false
        default:
            return false; // 其他对象均视作非空
        }
    },
    isNotEmpty: function(v) {
        return ! utils.isEmpty(v);
    },
    isEmptyObject: function(obj) {
        var name;
        for (name in obj) {
            return false;
        }
        return true;
    },
    isString: function(str) {
        return 'String' == utils.getDataType(str);
    },
    isArray: function(str) {
        return 'Array' == utils.getDataType(str);
    },
    isObject: function(str) {
        return 'Object' == utils.getDataType(str);
    },
    isFunction: function(str) {
        return 'Function' == utils.getDataType(str);
    },
    isNumber: function(str) {
        return 'Number' == utils.getDataType(str);
    },
    isDate: function(str) {
        return 'Date' == utils.getDataType(str);
    },
    isDateStr: function(str) {
        return utils.dateStrCheck(str);
        //return  'Object' == utils.isObject(str) && str instanceof Date;
    },
    getDataType: function(str) {
        var type = Object.prototype.toString.call(str).slice(8, -1);
        return type;
    },
    dateDayGap: function(dateStr1, dateStr2) { //查询 两个 日期间隔天数
	    if (!dateStr1 || !dateStr2) return 0;
	    var date1 = utils.tranferCompatibleDate(dateStr1);
	    var date2 = utils.tranferCompatibleDate(dateStr2);
	    var s1 = date1.getTime(),
	    s2 = date2.getTime();
	    var total = (s2 - s1) / 1000;
	    var day = parseInt(total / (24 * 60 * 60)); //计算整数天数
	    //console.log("dayD : " + day);
	    return day;
	},
    //	 1 短时间，形如 (23:30:06)
    isDateTimeHMS: function(str) {
    	if (utils.checkObjTypeIsInvalid(str, 'String')) return false;
        var a = str.match(/^(\d{1,2})(:)?(\d{1,2})\2(\d{1,2})$/);
        if (a == null) {
            console.error('传入的str=' + str + '不是时间格式！');
            return false;
        }
        if (a[1] > 24 || a[3] > 60 || a[4] > 60) {
            console.error('传入的str=' + str + '时间格式不对！');
            return false;
        }
        return true;
    },
    //2. 短日期，形如 (2008-09-13)
    isDateTimeYMD: function(str) {
    	if (utils.checkObjTypeIsInvalid(str, 'String')) return false;
        var r = str.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/);
        if (r == null) return false;
        var d = new Date(r[1], r[3] - 1, r[4]);
        return (d.getFullYear() == r[1] && (d.getMonth() + 1) == r[3] && d.getDate() == r[4]);
    },
    //3 长时间，形如 (2008-09-13 23:30:06)
    isDateTimeYMDHMS: function(str) {
    	if (utils.checkObjTypeIsInvalid(str, 'String')) return false;
        var reg = /^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2}) (\d{1,2}):(\d{1,2}):(\d{1,2})$/;
        var r = str.match(reg);
        if (r == null) return false;
        var d = new Date(r[1], r[3] - 1, r[4], r[5], r[6], r[7]);
        return (d.getFullYear() == r[1] && (d.getMonth() + 1) == r[3] && d.getDate() == r[4] && d.getHours() == r[5] && d.getMinutes() == r[6] && d.getSeconds() == r[7]);
    },
    dateStrCheck: function(dateStr) {
        return utils.isDateTimeYMDHMS(dateStr) || utils.isDateTimeYMD(dateStr); // || utils.isDateTimeHMS(dateStr) ;
    },
    treeToArray :function (data, parent, level, expandedAll) {
      var tmp = []
      Array.from(data).forEach(function (record) {
        if (record._expanded === undefined) {
          Vue.set(record, '_expanded', expandedAll)
        }
        if (parent) {
          Vue.set(record, '_parent', parent)
        }
        var _level = 0
        if (level !== undefined && level !== null) {
          _level = level + 1
        }
        Vue.set(record, '_level', _level)
        tmp.push(record)
        if (record.children && record.children.length > 0) {
          var children = utils.treeToArray(record.children, record, _level, expandedAll)
          tmp = tmp.concat(children)
        }
      })
      return tmp
    },
    tranferCompatibleDate: function(vDate) {
		if (utils.isString(vDate) && utils.isDateStr(vDate) ) {
            vDate = vDate.replace(new RegExp(/-/gm), '/'); //将所有的'-'转为'/'即可 解决IE、firefox浏览器下JS的new Date()的值为Invalid Date、NaN-NaN的问题
            return new Date(vDate);
		} else if (utils.isString(vDate)) { //针对这种数据先如此处理 "2017-04-15T10:56:31.958Z"
            return new Date(vDate);
        } else if (utils.isDate(vDate)) { //标准日期格式  Sat Apr 15 2017 13:54:50 GMT+0800 (中国标准时间)
        	return new Date(vDate);
        } else if (utils.isObject(vDate)) {
            try {
                return new Date(vDate);
            } catch(e) {
                console.error('传入的对象=' + vDate + '转换成日期对象异常！');
                return vDate;
            }
        } else {
            console.error('传入的date=' + vDate + '不是正确的日期格式！');
            return;
        }

    },
    getArrayMax: function(arr) {
        if (utils.checkObjTypeIsInvalid(arr, 'Array')) return arr;
        var max = arr[0];
        var len = arr.length;
        for (var i = 1; i < len; i++) {
            if (arr[i] > max) {
                max = arr[i];
            }
        }
        return max;
    },
    getStringNoRepeat: function(str, separator) {
        if (utils.isEmpty(str)) {
            return str;
        }
        separator = utils.isEmpty(separator) ? ' ': separator;
        var sepratorV = separator == ' ' ? (/[ ]+/) : separator == ';' ? (/[;]/) : '其他分隔符';
        if (sepratorV == '其他分隔符') {
            return str;
        }
        var words = str.split(sepratorV);
        var uniqueArr = utils.getArrayNoRepeated(words);
        str = uniqueArr.join(separator);
        return str;
    },
    getStringNoRepeatAndReplace: function(str, prefix, replaceElement, separator, noFindToAdd) {
        if (utils.isEmpty(str)) {
            return replaceElement;
        }
        separator = utils.isEmpty(separator) ? ' ': separator;
        var sepratorV = separator == ' ' ? (/[ ]+/) : separator == ';' ? (/[;]/) : '其他分隔符';
        if (sepratorV == '其他分隔符') {
            return str;
        }
        var words = str.split(sepratorV);
        var uniqueArr = utils.getArrayNoRepeated(words);
        var uniqueReplaceArr = utils.replaceArrayElementByPrefix(uniqueArr, prefix, replaceElement, noFindToAdd === undefined ? true: noFindToAdd);
        str = uniqueReplaceArr.join(separator);
        return str;
    },
    /**数组去重*/
    getArrayNoRepeated: function(arr) {
        if (utils.checkObjTypeIsInvalid(arr, 'Array')) return arr;
        var res = [];
        var json = {};
        for (var i = 0; i < arr.length; i++) {
            if (!json[arr[i]]) {
                res.push(arr[i]);
                json[arr[i]] = 1;
            }
        }
        return res;
    },
    replaceArrayElementByPrefix: function(arr, prefix, replaceElement, noFindToAdd) {
        if (utils.checkObjTypeIsInvalid(arr, 'Array')) return arr;
        var isFind = false;
        for (var i = 0; i < arr.length; i++) {
            if (arr[i].indexOf(prefix) == 0) { // =0以此开头 =-1不包含，大于0 包含该字符串
                arr[i] = replaceElement;
                isFind = true;
            }
        }
        if (!isFind && noFindToAdd) {
            arr.push(replaceElement);
        }
        return arr;
    },
    isArrContainsValue: function(arr, obj) {
        if (utils.checkObjTypeIsInvalid(arr, 'Array')) return false;
        var i = arr.length;
        while (i--) {
            if (arr[i] === obj) {
                return true;
            }
        }
        return false;
    },
    checkObjTypeIsInvalid: function(obj, type) {
        var valid = true;
        switch (type) {
        case 'String':
            valid = utils.isString(obj);
            break;
        case 'Array':
            valid = utils.isArray(obj);
            break;
        case 'Object':
            valid = utils.isObject(obj);
            break;
        default:
            valid = true;
            break;
        }
        if (!valid) {
            console.debug('传入的对象不是' + type + '类型！');
        }
        return ! valid;
    },
    myIndexOf: function(str, matchStr, isIgnoreCase) {
    	if (utils.checkObjTypeIsInvalid(str, 'String') || utils.checkObjTypeIsInvalid(matchStr, 'String')) return -1;
        var mm = isIgnoreCase ? 'i': '';
        var re = eval('/' + matchStr + '/' + mm);
        var rt = str.match(re);
        return (rt == null) ? -1 : rt.index;
    },
    myIndexOf2: function(srcStr, matchStr) { //都转成大写比较
        if (utils.checkObjTypeIsInvalid(srcStr, 'String') || utils.checkObjTypeIsInvalid(matchStr, 'String')) return -1;
        //        arg1是子串，arg2是原来的串,存在就返回其下标，不存在返回undefined
        var arr1 = [],
        arr2 = [];
        arr1 = matchStr.split('');
        arr2 = srcStr.split('');
        for (var i = 0; i < arr2.length; i++) {
            if (arr1[0] == arr2[i]) {
                for (var g = 0; g < arr1.length; g++) {
                    if (arr1[g] !== arr2[g + i]) {
                        break;
                    }
                    if (g == arr1.length - 1) {
                        return i;
                    }
                }
            } else {
                continue;
            }
        }
    },
    myAssign: function() { //解决IE浏览器下 对象不支持“assign”属性或方法
    	var vm = this;
    	if(Object.prototype.constructor.hasOwnProperty("assign")){
			return Object.assign.apply(vm, arguments);
    	}else {
    		return utils.myObjectAssign.apply(vm, arguments);
    	}
    },
    myObjectAssign: function() {
		'use strict';
		var target = arguments[0];
		// 第一个参数为空，则抛错
		if (target === undefined || target === null) {
		    throw new TypeError('Cannot convert first argument to object');
		}

		var to = Object(target);
		// 遍历剩余所有参数
		for (var i = 1; i < arguments.length; i++) {
		    var nextSource = arguments[i];
		    // 参数为空，则跳过，继续下一个
		    if (nextSource === undefined || nextSource === null) {
		        continue;
		    }
		    nextSource = Object(nextSource);

		    // 获取改参数的所有key值，并遍历
		    var keysArray = Object.keys(nextSource);
		    for (var nextIndex = 0,
		    len = keysArray.length; nextIndex < len; nextIndex++) {
		        var nextKey = keysArray[nextIndex];
		        var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
		        // 如果不为空且可枚举，则直接浅拷贝赋值
		        if (desc !== undefined && desc.enumerable) {
		            to[nextKey] = nextSource[nextKey];
		        }
		    }
		}
		return to;
    },
    getWordByteLength: function(str) {
        if (utils.checkObjTypeIsInvalid(str, 'String')) return str;
        str = str.replace(/[^\\x00-\\xff]/g, '**');
        return str.length;
    },
    isIEbrowser: function () { //ie? IE11的userAgent里是没有MSIE标志
	  	return (!!window.ActiveXObject || "ActiveXObject" in window);
	},
    consoleObj: function(_obj) {
        console.debug('打印对象属性= ' + this.obj2String(_obj));
    },
    consoleObj: function(tip, _obj) {
        console.debug(tip + '= ' + this.obj2String(_obj));
    },
    /**
		   * 将JS的任意对象输出为json格式字符串
		   * @param {Object} _obj: 需要输出为string的对象
		   */
    obj2String: function(_obj) { // 调试打印 对象值
        var t = typeof(_obj);
        if (t != 'object' || _obj === null) {
            // simple data type
            if (t == 'string') {
                // _obj = '"' + _obj + '"';//
                _obj = '"' + _obj.replace(/([\'\"\\])/g, '\\$1').replace(/(\n)/g, '\\n').replace(/(\r)/g, '\\r').replace(/(\t)/g, '\\t') + '"';
            }
            return String(_obj);
        } else {
            if (_obj instanceof Date) {
                return _obj.toLocaleString();
            } // recurse array or object
            var n, v, json = [],
            arr = (_obj && _obj.constructor == Array);
            for (n in _obj) {
                v = _obj[n];
                t = typeof(v);
                if (t == 'string') {
                    v = '"' + v + '"';
                } else if (t == 'object' && v !== null) {
                    v = this.obj2String(v);
                }
                json.push((arr ? '': '"' + n + '":') + String(v));
            }
            return (arr ? '[': '{') + String(json) + (arr ? ']': '}');
        }
    },
};
/**
	 * 请求类
	 */
var request = {
    postMessege: function(vObject) { //通信
        var dataToParent = JSON.stringify(vObject);
        window.top.postMessage(dataToParent, '*');
    },
    savePost: function(_this, url, jsonData, callback) { //保存请求
        //if(jsonData.url==undefined)return false;
        if (url == null) {
            var returnObj = {
                'msg': '新增成功！',
                'success': true,
                mode: 5
            };
            callback & callback(returnObj);
            return;
        }
        Vue.http.options.emulateJSON = true;
        _this.$http.post(url, jsonData.postData, {
            emulateJSON: true
        }).then(function(response) {
            if (callback != undefined) {
                response.data.mode = 5;
                callback & callback(response.data);
            }
        });
    },
    sendRequest: function(_this, url, vData) { //执行通讯发送请求
        request.savePost(_this, url, vData,
        function(vObject) {
            request.postMessege(vObject);
        });
    },
    tableListener: function(callback) {
        window.onmessage = function(e) {
            callback & callback(JSON.parse(e.data));
        };
    },
    closeForm: function(vdata) {
        this.postMessege({
            mode: 6
        });
    },
    showPrompt:function(vdata){
    	this.postMessege(vdata);
    }
};
/*浏览器兼容变量*/
if (((navigator.userAgent.indexOf('MSIE') >= 0) && (navigator.userAgent.indexOf('Opera') < 0)) || !!window.ActiveXObject || 'ActiveXObject' in window) {
    var ieCompatible = true;
} else if (navigator.userAgent.indexOf('Firefox') >= 0) {
    var foxCompatible = true;
} else if (navigator.userAgent.indexOf('Opera') >= 0) {
    var operaCompatible = true;
} else {
    var elseCompatible = true;
}
/**
	 Test
	 */
//var str = " null1";
//var str1 = [];
// debugger;
// utils.consoleObj("str isEmpty",utils.isEmpty(str));
// utils.consoleObj("str1 isEmpty",utils.isEmpty(str1));
// 用来更新json对象数据
function updateJson(jsonObj, prop, val, callback) {
    // 如果 val 被忽略
    if (typeof val == 'undefined' || val === '' || val == null) { //空串也不给
        // 删除属性
        delete jsonObj[prop];
    } else {
        // 添加 或 修改
        jsonObj[prop] = val;
    }
    callback && callback();
};
//注册一个全局自定义指令v-focus
Vue.directive('focus', {
    // 当绑定元素插入到DOM中
    inserted: function(el, binding) {
        // 聚焦元素
        if (binding.value) {
            el.focus();
        }
    },
    update: function(el, binding) {
        if (binding.value) {
            el.focus();
        }
    }
});


// 对Date的扩展，将 Date 转化为指定格式的String
// 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，
// 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
// 例子：
// (new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423
// (new Date()).Format("yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18
Date.prototype.Format = function(fmt) { //author: meizz
    var o = {
        'M+': this.getMonth() + 1,
        //月份
        'd+': this.getDate(),
        //日
        'h+': this.getHours(),
        //小时
        'm+': this.getMinutes(),
        //分
        's+': this.getSeconds(),
        //秒     /*q->季度*/
        'q+': Math.floor((this.getMonth() + 3) / 3),
        'S': this.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length));
    for (var k in o) if (new RegExp('(' + k + ')').test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)));
    return fmt;
} //调用：
//var time1 = new Date().Format("yyyy-MM-dd");
//var time2 = new Date().Format("yyyy-MM-dd HH:mm:ss");
//console.info("time1=" + time1);
//判定对象是否为空
function isNull(data) {
    return ((data == '' || data == undefined || data == null || data == 'undefined') ? true: false);
};
function isNumber(val) {
    if (val === undefined) {
        return false;
    } else if (!isNaN(val)) {
        return true;
    } else {
        return false;
    }
} //获得币种名称
function getCurrencyName(currency) {
    return (currency == '0' ? '元': '美金');
} //将金额转化成万元
//p1-金额;p2-转换单位;p3-是否产生千位分隔符;p4-是否返回币种;
// p5-币种;p6-要保留的小数位数 p7-对于整数是否需要加上小数位(.00)
// p8 0是后面是否要保留小数位;p9-乘数因子
function tranToMillionYuan(p1, p2, p3, p4, p5, p6, p7, p8, p9) {
    var currency = '';
    var amount;
    var numberArc;
    if (p1 == 0 && !p8) {
        return p1;
    }
    var decimal = 0;
    p1 = p1.toString();
    if (p1.indexOf('.') > 0) {
        decimal = p1.substr(p1.indexOf('.') + 1, p1.length - 1).length;
    }
    p6 = p6 ? p6: decimal;
    if (p1.toString().indexOf('.') == -1 && !p7 && !p2) {
        p6 = 0;
    } //如果需要返回币种，先获得币种名称
    if (p4 == true) {
        // currency = "(" + (p2 == true ? '万' : '') + getCurrencyName(p5) + ")";
    } //加入传入的金额格式不正确;
    if (isNaN(p1) || p1 == 0) {
        var retP1 = Number(p1).toFixed(p6);
        return retP1.toString() + (p4 == true ? currency: '');
    } //判定是否能被1W整除，转化成万元,
    /*if (p2 == true) {
	     amount = (!(p1 % 10000) ? p1 * 10000 / (10000 * 10000) : p1 * 10000 / (10000.0 * 10000));
	     }*/

    if (p2) { //p2:要转换的单位（万元，亿元等等）
        var vp2 = p2 + '.0';
        amount = (!(p1 % p2) ? p1 * p2 / (p2 * p2) : p1 * p2 / (vp2 * p2));
    } else {
        amount = p1;
    }
    if (p9) {
        amount = amount * p9;
    } //是否产生千位分隔符
    if (p3 == true) {
        amount = addThousSeparator(amount, p6);
    } else {
        amount = Number(amount).toFixed(p6);
    }
    return amount;
} //实现千位分隔符
function addThousSeparator(nbr, p6) {
    if (nbr && nbr > 999) {
        //1. 从后往前插进数组，然后 join(",");
        var newNbr = Number(nbr).toFixed(p6).toString();
        var arr = [];
        while (newNbr > 999) {
            var idx = newNbr.indexOf('.');
            if (idx > -1) { //包含小数
                arr.push(newNbr.substr(idx - 3, newNbr.length - (idx - 3)));
                newNbr = newNbr.substr(0, idx - 3);
            } else {
                arr.push(newNbr.substr(newNbr.length - 3, 3));
                newNbr = newNbr.substr(0, newNbr.length - 3);
            }
        }
        arr.push(newNbr);
        arr.reverse();
        return arr.join(',');
    } else {
        return Number(nbr).toFixed(p6);
    }
};
//获取元素绝对位置
function getAbsPosition(element) {
    var abs = {
        x: 0,
        y: 0
    } //如果浏览器兼容此方法
    if (document.documentElement.getBoundingClientRect) {
        //注意，getBoundingClientRect()是jQuery对象的方法
        //如果不用jQuery对象，可以使用else分支。
        abs.x = element.getBoundingClientRect().left;
        abs.y = element.getBoundingClientRect().top;
        /*
	        abs.x += window.screenLeft +
	            (document.documentElement.scrollLeft || document.body.scrollLeft) -
	            (document.documentElement.clientLeft || document.body.clientLeft);
	        abs.y += window.screenTop +
	            (document.body.scrollTop || document.documentElement.scrollTop) -
	            (document.documentElement.clientTop || document.body.clientLeft);*/
        //去掉screenLeft与screenTop先，梁国策
        abs.x += 0 + (document.documentElement.scrollLeft || document.body.scrollLeft) - (document.documentElement.clientLeft || document.body.clientLeft);
        abs.y += 0 + (document.body.scrollTop || document.documentElement.scrollTop) - (document.documentElement.clientTop || document.body.clientLeft);
    } //如果浏览器不兼容此方法
    else {
        while (element != document.body) {
            abs.x += element.offsetLeft;
            abs.y += element.offsetTop;
            element = element.offsetParent;
        } //计算想对位置
        abs.x += window.screenLeft + document.body.clientLeft - document.body.scrollLeft;
        abs.y += window.screenTop + document.body.clientTop - document.body.scrollTop;
    }
    return abs;
};
var elementDict = { //定义一个控件元素字典对象
    'input': 1,
    //输入框
    'select': 2,
    //下拉框
    'input_Date': 3,
    //日期控件
    'radio': 4,
    //单选框
    'input_list': 5,
    //左右list
    'input_file': 6,
    //文件上传
    'msgLabel': 7,
    //标签控件
    'textArea': 8,
    //文本域
    'tree': 9,
    //树
    'switchBtn': 10,
    //开关控件
    'prototype': 11,
    //批量复制的按钮
    'multiselect': 12,
    //多组下拉框
    'button': 13 //批量复制的按钮
};
var btnStyleModeDict = {
    generalButton: 1,
    //普通的按钮模式。 默认
    navButton: 2,
    //导航样式的 按钮
};
//获取非行间样式
function getStyle(obj, attr) {
    if (obj.currentStyle) {
        return obj.currentStyle[attr];
    } else {
        return getComputedStyle(obj, false)[attr];
    }
}
/*window.onload = function(){  //设置iframe的高度
	var iframe = document.getElementsByTagName("iframe");
	for(var i=0;i<iframe.length;i++){
		var viframe = iframe[i];
		console.log(viframe);
		console.log(viframe.contentWindow.document.getElementsByTagName('html')[0].offsetHeight);
		viframe.style.height =  (viframe.contentWindow.document.getElementsByTagName('html')[0].offsetHeight + 30) + "px";
		}
	};

	*/

export default utils;
