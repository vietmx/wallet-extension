!function(e){function t(t){for(var r,c,i=t[0],u=t[1],s=t[2],p=0,f=[];p<i.length;p++)c=i[p],a[c]&&f.push(a[c][0]),a[c]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);for(l&&l(t);f.length;)f.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,i=1;i<n.length;i++){var u=n[i];0!==a[u]&&(r=!1)}r&&(o.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},a={1:0},o=[];function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="";var i=window.webpackJsonp=window.webpackJsonp||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var l=u;o.push([329,0]),n()}({147:function(e,t,n){e.exports=n.p+"manifest.json"},160:function(e,t){},329:function(e,t,n){"use strict";n.r(t);n(96);var r=n(19),a=n.n(r),o=n(94),c=n.n(o),i=n(78),u=n.n(i),s=n(17),l=n(141),p=n.n(l),f=n(79),h=n.n(f),d=n(27),v={chains:[{chainId:"testnet.aergo.io",nodeUrl:"http://testnet.aergo.io:7845"},{chainId:"main.aergo.io",nodeUrl:"https://mainnet-api-http.aergo.io"},{chainId:"aergo.io",nodeUrl:"https://mainnet-api-http.aergo.io"},{chainId:"sqltestnet.aergo.io",nodeUrl:"https://sqltestnet-api-http.aergo.io"},{chainId:"dev.chain",nodeUrl:"http://127.0.0.1:7845"}]},m=n(80),g=n(5);function w(e,t,n,r,a,o,c){try{var i=e[o](c),u=i.value}catch(e){return void n(e)}i.done?t(u):Promise.resolve(u).then(r,a)}function y(e){return function(){var t=this,n=arguments;return new Promise(function(r,a){var o=e.apply(t,n);function c(e){w(o,r,a,c,i,"next",e)}function i(e){w(o,r,a,c,i,"throw",e)}c(void 0)})}}function k(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var x=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return function(e,t,n){t&&k(e.prototype,t),n&&k(e,n)}(e,[{key:"fetchAccountTransactionsAfter",value:function(e){return function(e){return function(){var t=y(regeneratorRuntime.mark(function t(n){var r,a,o,c,i,u,s,l,p,f,h,v;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(r=n.account,a=n.blockno,o=n.limit,"testnet.aergo.io"===(c=r.data.spec.chainId)||"aergo.io"===c){t.next=4;break}return t.abrupt("return",e({account:r,blockno:a,limit:o}));case 4:return"testnet.aergo.io"==c&&(i="https://api.aergoscan.io/testnet"),"aergo.io"==c&&(i="https://api.aergoscan.io/main"),u=new g.Address(r.data.spec.address),console.log("[track account] Fetching txs for ".concat(u," on ").concat(c," since ").concat(a,"...")),s=encodeURIComponent("(from:".concat(u," OR to:").concat(u,") AND blockno:>").concat(a)),l=1e3,p=0,f="".concat(i,"/transactions?q=").concat(s,"&sort=blockno:desc&size=").concat(l,"&from=").concat(p),t.next=14,fetch(f);case 14:return h=t.sent,t.next=17,h.json();case 17:return v=t.sent,console.log("[track account] Got ".concat(v.hits.length," (of ").concat(v.total,") txs for ").concat(u," since ").concat(a,".")),t.abrupt("return",v.hits.map(function(e){return new d.Transaction(e.hash,{chainId:c,from:e.meta.from,to:e.meta.to,hash:e.hash,ts:e.meta.ts,blockhash:"",blockno:e.meta.blockno,amount:e.meta.amount,type:e.meta.type,status:d.Transaction.Status.Confirmed})}));case 20:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()}}},{key:"fetchAccountTransactions",value:function(e){var t=this;return function(){return function(){var n=y(regeneratorRuntime.mark(function n(r){var a,o,c;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return a=e.accountManager.getCompleteAccountSpec(r.data.spec),n.next=3,e.getClient(a.chainId).blockchain();case 3:return o=n.sent,c=o.bestHeight,n.abrupt("return",t.fetchAccountTransactionsBefore(e)(y(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",[]);case 1:case"end":return e.stop()}},e,this)})))({account:r,blockno:c}));case 6:case"end":return n.stop()}},n,this)}));return function(e){return n.apply(this,arguments)}}()}}}]),e}(),b=n(14);function R(e){return(R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function A(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function O(e,t){return!t||"object"!==R(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function I(e){return(I=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function T(e,t){return(T=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var _=function(e){function t(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(e=O(this,I(t).call(this)))._idleTimeout=null,e.set("initial"),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&T(e,t)}(t,s["EventEmitter"]),function(e,t,n){t&&A(e.prototype,t),n&&A(e,n)}(t,[{key:"set",value:function(e){var t=this;"inactive"!=e&&this._idleTimeout&&clearTimeout(this._idleTimeout),this.state!=e&&"inactive"==e&&(this._idleTimeout&&clearTimeout(this._idleTimeout),this._idleTimeout=setTimeout(function(){t.set("idle")},6e4)),this.state!=e&&console.log("[state] ".concat(this.state," -> ").concat(e)),this.state=e,this.emit("change",e),this.emit(e)}}]),t}(),S=(n(245),n(22),n(3));function M(e){return(M="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function U(e,t,n,r,a,o,c){try{var i=e[o](c),u=i.value}catch(e){return void n(e)}i.done?t(u):Promise.resolve(u).then(r,a)}function C(e){return function(){var t=this,n=arguments;return new Promise(function(r,a){var o=e.apply(t,n);function c(e){U(o,r,a,c,i,"next",e)}function i(e){U(o,r,a,c,i,"throw",e)}c(void 0)})}}function E(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function P(e,t){return!t||"object"!==M(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function j(e){return(j=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function q(e,t){return(q=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var N=function(e){function t(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(e=P(this,j(t).call(this))).id=a.a.runtime.id,e.requests={},e.lastRequestId=0,e.uiState={popupOpen:!1},e.state=new _,e._lockTimeout=null,e.wallet=new d.Wallet({appName:"aergo-browser-wallet",instanceId:e.id}),e.wallet.use(x),e.wallet.useStorage(m.a).then(C(regeneratorRuntime.mark(function t(){var n,r,a,o;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.firstLoad(),t.prev=1,t.next=4,e.wallet.datastore.getIndex("settings").get("customChains");case 4:for(n=t.sent,r=Object.keys(n.data),a=0;a<r.length;a++)o=r[a],e.wallet.useChain({chainId:o,nodeUrl:n.data[o].nodeUrl});t.next=11;break;case 9:t.prev=9,t.t0=t.catch(1);case 11:case"end":return t.stop()}},t,this,[[1,9]])})));var n=!0,r=!1,o=void 0;try{for(var c,i=v.chains[Symbol.iterator]();!(n=(c=i.next()).done);n=!0){var u=c.value;e.wallet.useChain(u)}}catch(e){r=!0,o=e}finally{try{n||null==i.return||i.return()}finally{if(r)throw o}}return e.wallet.keyManager.on("lock",function(){e.emit("update",{unlocked:!1}),console.log("[lock] locked")}),e.wallet.keyManager.on("unlock",function(){e.emit("update",{unlocked:!0}),console.log("[lock] unlocked")}),e.state.on("idle",function(){console.log("[state] idle, pausing trackers"),e.wallet.accountManager.pause(),e.wallet.transactionManager.pause()}),e.state.on("active",function(){console.log("[state] active, resuming trackers"),e.wallet.accountManager.resume(),e.wallet.transactionManager.resume()}),e.lock(),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&q(e,t)}(t,s["EventEmitter"]),function(e,t,n){t&&E(e.prototype,t),n&&E(e,n)}(t,[{key:"firstLoad",value:function(){var e=C(regeneratorRuntime.mark(function e(){var t,n,r,a,o,c,i;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.wallet.accountManager.getAccounts();case 2:for(t=e.sent,n=!0,r=!1,a=void 0,e.prev=6,o=t[Symbol.iterator]();!(n=(c=o.next()).done);n=!0)i=c.value,this.trackAccount(i);e.next=14;break;case 10:e.prev=10,e.t0=e.catch(6),r=!0,a=e.t0;case 14:e.prev=14,e.prev=15,n||null==o.return||o.return();case 17:if(e.prev=17,!r){e.next=20;break}throw a;case 20:return e.finish(17);case 21:return e.finish(14);case 22:case"end":return e.stop()}},e,this,[[6,10,14,22],[15,,17,21]])}));return function(){return e.apply(this,arguments)}}()},{key:"lock",value:function(){this.wallet.lock()}},{key:"unlock",value:function(){var e=C(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.wallet.unlock(t);case 2:this.keepUnlocked();case 3:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"setupAndUnlock",value:function(){var e=C(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.wallet.setupAndUnlock(t);case 2:this.keepUnlocked();case 3:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"setActiveAccount",value:function(){var e=C(regeneratorRuntime.mark(function e(t){var n,r,a;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.chainId,r=t.address,e.next=3,this.wallet.accountManager.getOrAddAccount({address:r,chainId:n});case 3:a=e.sent,this.activeAccount=a,console.log("Active account is now",{chainId:n,address:r});case 6:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"getActiveAccount",value:function(){var e=C(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.activeAccount);case 1:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"keepUnlocked",value:function(){var e=this;this._lockTimeout&&clearTimeout(this._lockTimeout),this._lockTimeout=setTimeout(function(){console.log("[lock] auto-locking..."),e.lock()},18e4)}},{key:"isUiOpen",value:function(){return this.uiState.popupOpen}},{key:"trackAccount",value:function(e,t){var n=this,r=this.wallet.accountManager.trackAccount(e);this.wallet.transactionManager.trackAccount(e),r.then(function(e){e.removeAllListeners("update"),e.on("update",function(e){console.log("got new state",e),n.emit("update",{accounts:[e]}),t&&(t(e),t=!1)})})}},{key:"permissionRequest",value:function(e,t,n,r,o){var c=this.lastRequestId++;this.requests[c]={type:e,data:t,senderURL:n,callback:r,cancelCallback:o},a.a.windows.getCurrent(function(e){var t=Math.max(0,e.left+e.width-330);a.a.windows.create({url:chrome.runtime.getURL("popup-request.html?request=".concat(c)),type:"popup",width:330,height:525,top:e.top,left:t})})}},{key:"respondToPermissionRequest",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=this.requests[e];r&&(n?r.cancelCallback({error:"user cancelled request"}):r.callback(t))}},{key:"signMessage",value:function(){var e=C(regeneratorRuntime.mark(function e(t){var n,r,a,o;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.address,r=t.chainId,a=t.message,this.keepUnlocked(),e.next=4,this.wallet.accountManager.getOrAddAccount({address:n,chainId:r});case 4:return o=e.sent,e.next=7,this.wallet.keyManager.signMessage(o,S.Buffer.from(a));case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"signTransaction",value:function(){var e=C(regeneratorRuntime.mark(function e(t){var n,r,a,o,c;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.address,r=t.chainId,a=t.txData,this.keepUnlocked(),e.next=4,this.wallet.accountManager.getOrAddAccount({address:n,chainId:r});case 4:return o=e.sent,e.next=7,this.wallet.accountManager.prepareTransaction(o,a);case 7:return c=e.sent,e.next=10,this.wallet.keyManager.signTransaction(o,c);case 10:return e.abrupt("return",e.sent);case 11:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"sendTransaction",value:function(){var e=C(regeneratorRuntime.mark(function e(t){var n,r,a;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.txBody,r=t.chainId,this.keepUnlocked(),e.next=4,this.wallet.sendTransaction({address:n.from,chainId:r},n);case 4:return a=e.sent,console.log(a,a.transaction.txBody),e.abrupt("return",a.transaction.txBody);case 7:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"setupCommunication",value:function(e){var t=this,n=h()({unlock:function(){var e=C(regeneratorRuntime.mark(function e(n,r){var a;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.password,e.prev=1,e.next=4,t.unlock(a);case 4:e.next=11;break;case 6:return e.prev=6,e.t0=e.catch(1),console.error(e.t0),r({error:""+e.t0}),e.abrupt("return");case 11:r({});case 12:case"end":return e.stop()}},e,this,[[1,6]])}));return function(t,n){return e.apply(this,arguments)}}(),lock:function(){var e=C(regeneratorRuntime.mark(function e(n){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.lock(),n({});case 2:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),setup:function(){var e=C(regeneratorRuntime.mark(function e(n,r){var a;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.password,e.next=3,t.setupAndUnlock(a);case 3:r({});case 4:case"end":return e.stop()}},e,this)}));return function(t,n){return e.apply(this,arguments)}}(),isUnlocked:function(){var e=C(regeneratorRuntime.mark(function e(n){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n(t.wallet.unlocked);case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),reset:function(){var e=C(regeneratorRuntime.mark(function e(n){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.wallet.deleteAllData();case 2:n();case 3:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),addNetwork:function(){var e=C(regeneratorRuntime.mark(function e(n,r){var a,o,c;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.chainId,o=n.nodeUrl,console.log("Adding chain",{chainId:a,nodeUrl:o}),t.wallet.useChain({chainId:a,nodeUrl:o}),c={},e.prev=4,e.next=7,t.wallet.datastore.getIndex("settings").get("customChains");case 7:c=e.sent.data,e.next=12;break;case 10:e.prev=10,e.t0=e.catch(4);case 12:return c[a]={chainId:a,nodeUrl:o},e.next=15,t.wallet.datastore.getIndex("settings").put({key:"customChains",data:c});case 15:r({});case 16:case"end":return e.stop()}},e,this,[[4,10]])}));return function(t,n){return e.apply(this,arguments)}}(),getBlockchainStatus:function(){var e=C(regeneratorRuntime.mark(function e(n,r){var a,o;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.chainId,e.next=3,t.wallet.getClient(a).blockchain();case 3:o=e.sent,r({blockHeight:o.bestHeight,chainId:a});case 5:case"end":return e.stop()}},e,this)}));return function(t,n){return e.apply(this,arguments)}}(),getAccounts:function(){var e=C(regeneratorRuntime.mark(function e(n){var r,a,o,c,i,u,s;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.keepUnlocked(),e.next=3,t.wallet.accountManager.getAccounts();case 3:for(r=e.sent,a=!0,o=!1,c=void 0,e.prev=7,i=r[Symbol.iterator]();!(a=(u=i.next()).done);a=!0)s=u.value,t.trackAccount(s);e.next=15;break;case 11:e.prev=11,e.t0=e.catch(7),o=!0,c=e.t0;case 15:e.prev=15,e.prev=16,a||null==i.return||i.return();case 18:if(e.prev=18,!o){e.next=21;break}throw c;case 21:return e.finish(18);case 22:return e.finish(15);case 23:n(r);case 24:case"end":return e.stop()}},e,this,[[7,11,15,23],[16,,18,22]])}));return function(t){return e.apply(this,arguments)}}(),createAccount:function(){var e=C(regeneratorRuntime.mark(function e(n,r){var a,o;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.chainId,t.keepUnlocked(),e.prev=2,e.next=5,t.wallet.accountManager.createAccount(a);case 5:o=e.sent,t.trackAccount(o),r(o.data.spec),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),r({error:e.t0});case 13:case"end":return e.stop()}},e,this,[[2,10]])}));return function(t,n){return e.apply(this,arguments)}}(),removeAccount:function(){var e=C(regeneratorRuntime.mark(function e(n,r){var a,o;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.chainId,o=n.address,e.next=3,t.wallet.accountManager.removeAccount({chainId:a,address:o});case 3:r();case 4:case"end":return e.stop()}},e,this)}));return function(t,n){return e.apply(this,arguments)}}(),setActiveAccount:function(){var e=C(regeneratorRuntime.mark(function e(n,r){var a,o;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.chainId,o=n.address,e.next=3,t.setActiveAccount({chainId:a,address:o});case 3:r();case 4:case"end":return e.stop()}},e,this)}));return function(t,n){return e.apply(this,arguments)}}(),getActiveAccount:function(){var e=C(regeneratorRuntime.mark(function e(n){var r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getActiveAccount();case 2:r=e.sent,n(r);case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),importAccount:function(){var e=C(regeneratorRuntime.mark(function e(n,r){var a,o,c,i,u;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.privateKey,o=n.chainId,t.keepUnlocked(),c=Object(b.identifyFromPrivateKey)(a),i=c.address,e.prev=4,e.next=7,t.wallet.accountManager.addAccount({address:i,chainId:o});case 7:return u=e.sent,console.log("importAccount",u,a),e.next=11,t.wallet.keyManager.importKey({account:u,privateKey:a});case 11:t.trackAccount(u),r(u.data.spec),e.next=19;break;case 15:e.prev=15,e.t0=e.catch(4),console.error(e.t0),r({error:"Could not import account. "+e.t0});case 19:case"end":return e.stop()}},e,this,[[4,15]])}));return function(t,n){return e.apply(this,arguments)}}(),exportAccount:function(){var e=C(regeneratorRuntime.mark(function e(n,r){var a,o,c,i,u,s,l,p;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.address,o=n.chainId,c=n.password,i=n.format,t.keepUnlocked(),e.next=4,t.wallet.accountManager.getOrAddAccount({address:a,chainId:o});case 4:return u=e.sent,e.next=7,t.wallet.keyManager.getUnlockedKey(u);case 7:if(s=e.sent,console.log(u,s),l=s.data.privateKey,"wif"!==i){e.next=18;break}return e.t0=b.encodePrivateKey,e.next=14,Object(b.encryptPrivateKey)(l,c);case 14:e.t1=e.sent,p=(0,e.t0)(e.t1),e.next=23;break;case 18:return e.t2=JSON,e.next=21,Object(b.keystoreFromPrivateKey)(S.Buffer.from(l),c);case 21:e.t3=e.sent,p=e.t2.stringify.call(e.t2,e.t3);case 23:r({privateKey:p});case 24:case"end":return e.stop()}},e,this)}));return function(t,n){return e.apply(this,arguments)}}(),sendTransaction:function(){var e=C(regeneratorRuntime.mark(function e(n,r,a){var o;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.sendTransaction({txBody:n,chainId:r});case 3:o=e.sent,a({tx:o}),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0),a({error:e.t0.message||""+e.t0});case 11:case"end":return e.stop()}},e,this,[[0,7]])}));return function(t,n,r){return e.apply(this,arguments)}}(),signTransaction:function(){var e=C(regeneratorRuntime.mark(function e(n,r,a){var o;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.signTransaction({txData:n,address:n.from,chainId:r});case 3:o=e.sent,a({tx:o}),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0),a({error:e.t0.message||""+e.t0});case 11:case"end":return e.stop()}},e,this,[[0,7]])}));return function(t,n,r){return e.apply(this,arguments)}}(),getAccountTx:function(){var e=C(regeneratorRuntime.mark(function e(n,r){var a;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log("getAccountTx",n),n.address){e.next=3;break}return e.abrupt("return",r({}));case 3:return e.next=5,t.wallet.transactionManager.getAccountTransactions(n);case 5:(a=e.sent).sort(function(e,t){return e.data.ts<t.data.ts?1:e.data.ts==t.data.ts?0:-1}),r(a);case 8:case"end":return e.stop()}},e,this)}));return function(t,n){return e.apply(this,arguments)}}(),syncAccountState:function(){var e=C(regeneratorRuntime.mark(function e(n,r){var a;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n.address){e.next=2;break}return e.abrupt("return",r({}));case 2:return e.next=4,t.wallet.accountManager.getOrAddAccount(n);case 4:a=e.sent,t.trackAccount(a,r);case 6:case"end":return e.stop()}},e,this)}));return function(t,n){return e.apply(this,arguments)}}(),signMessage:function(){var e=C(regeneratorRuntime.mark(function e(n,r){var a,o,c,i;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.address,o=n.chainId,c=n.message,e.prev=1,e.next=4,t.signMessage({address:a,chainId:o,message:c});case 4:i=e.sent,r({signedMessage:i}),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),console.error(e.t0),r({error:e.t0});case 12:case"end":return e.stop()}},e,this,[[1,8]])}));return function(t,n){return e.apply(this,arguments)}}(),getStaking:function(){var e=C(regeneratorRuntime.mark(function e(n,r){var a,o,c;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.address,o=n.chainId,t.keepUnlocked(),e.prev=2,e.next=5,t.wallet.getClient(o).getStaking(a);case 5:c=e.sent,r({amount:c.amount.toString(),when:c.when}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),r({error:e.t0});case 12:case"end":return e.stop()}},e,this,[[2,9]])}));return function(t,n){return e.apply(this,arguments)}}(),getPermissionRequestData:function(){var e=C(regeneratorRuntime.mark(function e(n,r){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:r(t.requests[n]);case 1:case"end":return e.stop()}},e,this)}));return function(t,n){return e.apply(this,arguments)}}(),respondToPermissionRequest:function(){var e=C(regeneratorRuntime.mark(function e(n,r){var a,o;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:a=n.requestId,o=n.result,t.respondToPermissionRequest(a,o),r();case 3:case"end":return e.stop()}},e,this)}));return function(t,n){return e.apply(this,arguments)}}(),denyPermissionRequest:function(){var e=C(regeneratorRuntime.mark(function e(n,r){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.requests[n]&&(t.respondToPermissionRequest(n,null,!0),delete t.requests[n]),r();case 2:case"end":return e.stop()}},e,this)}));return function(t,n){return e.apply(this,arguments)}}(),getChainInfo:function(){var e=C(regeneratorRuntime.mark(function e(n,r){var a,o;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.chainId,e.next=3,t.wallet.getClient(a).getChainInfo();case 3:o=e.sent,r({chainInfo:JSON.parse(JSON.stringify(o))});case 5:case"end":return e.stop()}},e,this)}));return function(t,n){return e.apply(this,arguments)}}()});p()(e,n,e,function(e){e&&log.error(e)}),n.on("remote",function(e){var n=e.sendUpdate.bind(e);t.on("update",n)}),this.state.on("change",function(e){t.emit("update",{state:e})})}}]),t}();function G(e,t,n,r,a,o,c){try{var i=e[o](c),u=i.value}catch(e){return void n(e)}i.done?t(u):Promise.resolve(u).then(r,a)}function L(e){return function(){var t=this,n=arguments;return new Promise(function(r,a){var o=e.apply(t,n);function c(e){G(o,r,a,c,i,"next",e)}function i(e){G(o,r,a,c,i,"throw",e)}c(void 0)})}}function K(){return(K=L(regeneratorRuntime.mark(function e(){var t,n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n=function(e){var n=e.name;if(console.log("Establishing connection with",n),"external"===n)e.onMessage.addListener(function(){var e=L(regeneratorRuntime.mark(function e(n,r){var a,o,c,i;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if("AERGO_REQUEST"===n.type){e.next=2;break}return e.abrupt("return");case 2:console.log("received message",n,r.sender.url),a=["ACTIVE_ACCOUNT","SIGN","SIGN_TX","SEND_TX"],o={ACTIVE_ACCOUNT:"AERGO_ACTIVE_ACCOUNT",SIGN:"AERGO_SIGN_RESULT",SIGN_TX:"AERGO_SIGN_TX_RESULT",SEND_TX:"AERGO_SEND_TX_RESULT"},c=n.action||"",-1===a.indexOf(c)&&console.log("message with invalid action type",c),i=new URL(r.sender.url).origin,t.permissionRequest(c,n.data,i,function(e){r.postMessage({type:"AERGO_RESPONSE",eventName:o[c],result:e})},function(e){r.postMessage({type:"AERGO_CANCEL",eventName:o[c],result:e})});case 9:case"end":return e.stop()}},e,this)}));return function(t,n){return e.apply(this,arguments)}}());else{var r=new u.a(e);t.state.set("active"),t.setupCommunication(r),t.uiState.popupOpen=!0,c()(r,function(){t.uiState.popupOpen=!1,console.log("Closed connection with",n),t.state.set("inactive")})}},t=new N,a.a.runtime.onConnect.addListener(n);case 3:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}n(147),console.log("AERGO Wallet Background Script"),console.log("Extension ID",a.a.runtime.id),function(){K.apply(this,arguments)}(),chrome.contextMenus.removeAll(),chrome.contextMenus.create({title:"Open full page",contexts:["browser_action"],onclick:function(){a.a.tabs.create({url:"tab.html"})}})}});
//# sourceMappingURL=background.js.map