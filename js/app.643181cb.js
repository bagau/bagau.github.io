(function(e){function t(t){for(var n,s,u=t[0],c=t[1],o=t[2],i=0,v=[];i<u.length;i++)s=u[i],Object.prototype.hasOwnProperty.call(l,s)&&l[s]&&v.push(l[s][0]),l[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);d&&d(t);while(v.length)v.shift()();return r.push.apply(r,o||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],n=!0,s=1;s<a.length;s++){var c=a[s];0!==l[c]&&(n=!1)}n&&(r.splice(t--,1),e=u(u.s=a[0]))}return e}var n={},l={app:0},r=[];function s(e){return u.p+"js/"+({canvg:"canvg",pdfmake:"pdfmake",xlsx:"xlsx"}[e]||e)+"."+{canvg:"4fb02797",pdfmake:"2a8bb910",xlsx:"d781934e"}[e]+".js"}function u(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,u),a.l=!0,a.exports}u.e=function(e){var t=[],a=l[e];if(0!==a)if(a)t.push(a[2]);else{var n=new Promise((function(t,n){a=l[e]=[t,n]}));t.push(a[2]=n);var r,c=document.createElement("script");c.charset="utf-8",c.timeout=120,u.nc&&c.setAttribute("nonce",u.nc),c.src=s(e);var o=new Error;r=function(t){c.onerror=c.onload=null,clearTimeout(i);var a=l[e];if(0!==a){if(a){var n=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;o.message="Loading chunk "+e+" failed.\n("+n+": "+r+")",o.name="ChunkLoadError",o.type=n,o.request=r,a[1](o)}l[e]=void 0}};var i=setTimeout((function(){r({type:"timeout",target:c})}),12e4);c.onerror=c.onload=r,document.head.appendChild(c)}return Promise.all(t)},u.m=e,u.c=n,u.d=function(e,t,a){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(u.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)u.d(a,n,function(t){return e[t]}.bind(null,n));return a},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=t,c=c.slice();for(var i=0;i<c.length;i++)t(c[i]);var d=o;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";a("85ec")},"25cd":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cfa"),a("cca6"),a("a79d");var n=a("2b0e"),l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"links"},[a("a",{class:e.selected===e.charts.ZING&&"selected",attrs:{href:"#"},on:{click:function(t){e.selected=e.charts.ZING}}},[e._v("ZingChart")]),a("a",{class:e.selected===e.charts.FUSION&&"selected",attrs:{href:"#"},on:{click:function(t){e.selected=e.charts.FUSION}}},[e._v("FusionCharts")]),a("a",{class:e.selected===e.charts.APEX&&"selected",attrs:{href:"#"},on:{click:function(t){e.selected=e.charts.APEX}}},[e._v("ApexChart")]),a("a",{class:e.selected===e.charts.AM&&"selected",attrs:{href:"#"},on:{click:function(t){e.selected=e.charts.AM}}},[e._v("AmChart")]),a("a",{class:e.selected===e.charts.ANY&&"selected",attrs:{href:"#"},on:{click:function(t){e.selected=e.charts.ANY}}},[e._v("AnyChart")])]),e.selected===e.charts.ZING?a("ZingChart"):e._e(),e.selected===e.charts.FUSION?a("FusionCharts"):e._e(),e.selected===e.charts.APEX?a("ApexChart"):e._e(),e.selected===e.charts.AM?a("AmChart"):e._e(),e.selected===e.charts.ANY?a("AnyChart"):e._e()],1)},r=[],s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("Mixed"),a("GMV"),a("Crops")],1)},u=[],c=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("zingchart",{attrs:{data:e.chartConfig,width:1e3}})},o=[],i={data:function(){return{chartConfig:{type:"mixed",title:{text:"График 8 (смешанный)",align:"left",marginLeft:"23%"},legend:{adjustLayout:!0,verticalAlign:"middle"},scaleX:{labels:["3","4","7","8","9","10","11","12"]},series:[{type:"line",text:"Сумма по полю ЦЕНА_ДЛЯ_ГП_разгр_За_Тонну",values:[378220,177565,1617305,1298080,1199610,3311423,3765732,1562425],lineColor:"#f00",marker:{type:"circle",backgroundColor:"#f00"},scales:"scale-x, scale-y"},{type:"bar","background-color":"blue",text:"Сумма по полю Масса разгруженная",values:[13278.7,4592.25,58628.84,40382.67,37233.39,80850.45,87097.42,54561.42],scales:"scale-x, scale-y"},{type:"bar","background-color":"green",text:"Сумма по полю Дистанция, км",values:[121048.18,60999.34,335371.28,368870.82,328795.98,814558.17,957675.89,370012.72],scales:"scale-x, scale-y"},{type:"bar","background-color":"purple",text:"Сумма по полю Тонна/км",values:[3.12,2.91,4.82,3.52,3.65,4.07,3.93,4.22],scales:"scale-x, scale-y"}]}}}},d=i,v=a("2877"),h=Object(v["a"])(d,c,o,!1,null,"8b4b9a04",null),p=h.exports,f=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("zingchart",{attrs:{data:e.chartConfig,width:800}})},m=[],x={data:function(){return{chartConfig:{graphset:[{type:"bar",title:{text:"GMV по месяцам в разрезе терминалов",align:"left",marginLeft:"23%"},legend:{adjustLayout:!0,verticalAlign:"middle"},scaleX:{values:["«ЗТК Тамань» ООО","ООО «НЗТ»","ПАО «НКХП»"]},series:[{values:[null,7088.4,6190.3],text:"3"},{values:[null,373.45,4218.8],text:"4"},{values:[50.52,54478.8,4099.52],text:"7"},{values:[281.87,21625.3,18475.5],text:"8"},{values:[10338.5,14635.65,12259.24],text:"9"},{values:[14357.82,41879.03,24613.6],text:"10"},{values:[null,57155.8,29941.62],text:"11"},{values:[17519.29,30044.05,6998.08],text:"12"}]}]}}}},b=x,g=Object(v["a"])(b,f,m,!1,null,"b40d91cc",null),y=g.exports,_=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("zingchart",{attrs:{data:e.chartConfig,width:800}})},A=[],C={data:function(){return{chartConfig:{graphset:[{type:"bar",title:{text:"График 8 (Грузооборот по культурам)",align:"left",marginLeft:"23%"},legend:{adjustLayout:!0,verticalAlign:"middle"},plot:{stacked:!0},scaleX:{values:["Агрикалчер Кубань","Зерно-трейд","Агрикалчер Ростов"]},scaleY:{values:"0:80000:10000"},series:[{values:[2222,42663,24167],text:"Пшеница 4 класс",stack:1,backgroundColor:"yellowgreen"},{values:[25e3,21e3,null],text:"Пшеница 5 класс",stack:1,backgroundColor:"orange"},{values:[8e3,null,null],text:"Ячмень",stack:1,backgroundColor:"dimgray"},{values:[null,7e3,null],text:"Пшеница 3 класс",stack:1,backgroundColor:"dodgerblue"},{values:[null,null,null],text:"Кукуруза",stack:1,backgroundColor:"yellow"}]}]}}}},w=C,k=Object(v["a"])(w,_,A,!1,null,"bf8aaebc",null),O=k.exports,j={name:"App",components:{Mixed:p,GMV:y,Crops:O}},M=j,E=Object(v["a"])(M,s,u,!1,null,"3b530a52",null),F=E.exports,S=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("Mixed"),a("GMV"),a("Crops")],1)},T=[],$=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("fusioncharts",{attrs:{type:e.type,width:e.width,height:e.height,dataformat:e.dataFormat,dataSource:e.dataSource}})},N=[],X={chart:{caption:"График 8 (смешанный)",xAxisname:"Номер месяца",yAxisname:"Сумма по полю",toolTipColor:"#ffffff",toolTipBorderThickness:"0",toolTipBgColor:"#000000",toolTipBgAlpha:"80",toolTipBorderRadius:"2",toolTipPadding:"5",theme:"fusion"},categories:[{category:[{label:"3"},{label:"4"},{label:"7"},{label:"8"},{label:"9"},{label:"10"},{label:"11"},{label:"12"}]}],dataset:[{seriesname:"Сумма по полю ЦЕНА_ДЛЯ_ГП_разгр_За_Тонну",renderAs:"line",data:[{value:378220},{value:177565},{value:1617305},{value:1298080},{value:1199610},{value:3311423},{value:3765732},{value:1562425}]},{seriesname:"Сумма по полю Масса разгруженная",data:[{value:13278.7},{value:4592.25},{value:58628.84},{value:40382.67},{value:37233.39},{value:80850.45},{value:87097.42},{value:54561.42}]},{seriesname:"Сумма по полю Дистанция, км",data:[{value:121048.18},{value:60999.34},{value:335371.28},{value:368870.82},{value:328795.98},{value:814558.17},{value:957675.89},{value:370012.72}]},{seriesname:"Сумма по полю Тонна/км",data:[{value:3.12},{value:2.91},{value:4.82},{value:3.52},{value:3.65},{value:4.07},{value:3.93},{value:4.22}]}]},P={data:function(){return{type:"mscombi2d",width:800,height:500,dataFormat:"json",dataSource:X}}},G=P,Y=Object(v["a"])(G,$,N,!1,null,"25f84a44",null),I=Y.exports,L=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("fusioncharts",{attrs:{type:e.type,width:e.width,dataformat:e.dataFormat,dataSource:e.dataSource}})},Z=[],V={chart:{caption:"GMV по месяцам в разрезе терминалов",xAxisname:"Номер месяца",yAxisname:"Сумма по полю",theme:"fusion"},categories:[{category:[{label:"«ЗТК Тамань» ООО"},{label:"ООО «НЗТ»"},{label:"ПАО «НКХП»"}]}],dataset:[{seriesname:"3",data:[{value:null},{value:7088.4},{value:6190.3}]},{seriesname:"4",data:[{value:null},{value:373.45},{value:4218.8}]},{seriesname:"7",data:[{value:50.52},{value:54478.8},{value:4099.52}]},{seriesname:"8",data:[{value:281.87},{value:21625.3},{value:18475.5}]},{seriesname:"9",data:[{value:10338.5},{value:14635.65},{value:12259.24}]},{seriesname:"10",data:[{value:14357.82},{value:41879.03},{value:24613.6}]},{seriesname:"11",data:[{value:null},{value:57155.8},{value:29941.62}]},{seriesname:"12",data:[{value:17519.29},{value:30044.05},{value:6998.08}]}]},z={data:function(){return{type:"mscolumn2d",width:800,dataFormat:"json",dataSource:V}}},U=z,B=Object(v["a"])(U,L,Z,!1,null,"ba626056",null),D=B.exports,J=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("fusioncharts",{attrs:{type:e.type,width:e.width,dataformat:e.dataFormat,dataSource:e.dataSource}})},R=[],W={chart:{caption:"График 8 (Грузооборот по культурам)",xAxisname:"Терминалы",yAxisname:"Грузооборот, т",theme:"fusion"},categories:[{category:[{label:"Агрикалчер Кубань"},{label:"Зерно-трейд"},{label:"Агрикалчер Ростов"}]}],dataset:[{seriesname:"Пшеница 4 класс",data:[{value:2222},{value:42663},{value:24167}]},{seriesname:"Пшеница 5 класс",data:[{value:25e3},{value:21e3},{value:null}]},{seriesname:"Ячмень",data:[{value:8e3},{value:null},{value:null}]},{seriesname:"Пшеница 3 класс",data:[{value:null},{value:7e3},{value:null}]},{seriesname:"Кукуруза",data:[{value:null},{value:null},{value:null}]}]},q={data:function(){return{type:"stackedcolumn2d",width:800,dataFormat:"json",dataSource:W}}},H=q,K=Object(v["a"])(H,J,R,!1,null,"4a6637fa",null),Q=K.exports,ee={components:{Mixed:I,GMV:D,Crops:Q}},te=ee,ae=Object(v["a"])(te,S,T,!1,null,"4ade6982",null),ne=ae.exports,le=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("Mixed")},re=[],se=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("apexchart",{attrs:{width:"1000",height:"500",options:e.chartOptions,series:e.series}})},ue=[],ce={data:function(){return{series:[{name:"Сумма по полю ЦЕНА_ДЛЯ_ГП_разгр_За_Тонну",type:"line",data:[378220,177565,1617305,1298080,1199610,3311423,3765732,1562425]},{name:"Сумма по полю Масса разгруженная",type:"column",data:[13278.7,4592.25,58628.84,40382.67,37233.39,80850.45,87097.42,54561.42]},{name:"Сумма по полю Дистанция, км",type:"column",data:[121048.18,60999.34,335371.28,368870.82,328795.98,814558.17,957675.89,370012.72]},{name:"Сумма по полю Тонна/км",type:"column",data:[3.12,2.91,4.82,3.52,3.65,4.07,3.93,4.22]}],chartOptions:{chart:{height:350,type:"line"},title:{text:"График 8 (смешанный)"},dataLabels:{enabled:!0,enabledOnSeries:[1]},labels:["3","4","7","8","9","10","11","12"],xaxis:{type:"category"},yaxis:[{title:{text:"Сумма по полю"}}],legend:{horizontalAlign:"left",offsetX:40},stroke:{width:[2,1,1,1]}}}}},oe=ce,ie=Object(v["a"])(oe,se,ue,!1,null,"cd2d2098",null),de=ie.exports,ve={components:{Mixed:de}},he=ve,pe=Object(v["a"])(he,le,re,!1,null,"60dbd285",null),fe=pe.exports,me=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("Mixed")},xe=[],be=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{ref:"chartdiv",staticClass:"chartdiv"})},ge=[],ye=(a("b0c0"),a("71c9")),_e=a("c497"),Ae=a("5a54");ye["b"](Ae["a"]);var Ce=[{month:"3",mass:13278.7,distance:121048.18,ton:3.12,price:378220},{month:"4",mass:4592.25,distance:60999.34,ton:2.91,price:177565},{month:"7",mass:58628.84,distance:335371.28,ton:4.82,price:1617305},{month:"8",mass:40382.67,distance:368870.82,ton:3.52,price:1298080},{month:"9",mass:37233.39,distance:328795.98,ton:3.65,price:1199610},{month:"10",mass:80850.45,distance:814558.17,ton:4.07,price:3311423},{month:"11",mass:87097.42,distance:957675.89,ton:3.93,price:3765732},{month:"12",mass:54561.42,distance:370012.72,ton:4.22,price:1562425}],we={data:function(){return{chart:null}},mounted:function(){var e=ye["a"](this.$refs.chartdiv,_e["f"]);e.paddingRight=20,e.data=Ce;var t=e.xAxes.push(new _e["a"]);t.dataFields.category="month",t.title.text="Номера месяца",t.renderer.grid.template.location=0,t.renderer.minGridDistance=20;var a=e.yAxes.push(new _e["e"]);a.title.text="Суммы по полям (руб.)";var n=e.series.push(new _e["b"]);n.dataFields.valueY="mass",n.dataFields.categoryX="month",n.name="Сумма по полю Масса разгруженная",n.columns.template.tooltipText="{categoryX}\n[bold]{valueY}[/]";var l=e.series.push(new _e["b"]);l.dataFields.valueY="distance",l.dataFields.categoryX="month",l.name="Сумма по полю Дистанция, км",l.columns.template.tooltipText="{categoryX}\n[bold]{valueY}[/]";var r=e.series.push(new _e["b"]);r.dataFields.valueY="ton",r.dataFields.categoryX="month",r.name="Сумма по полю Тонна/км",r.columns.template.tooltipText="{categoryX}\n[bold]{valueY}[/]";var s=e.series.push(new _e["d"]);s.dataFields.valueY="price",s.dataFields.categoryX="month",s.name="Сумма по полю ЦЕНА_ДЛЯ_ГП_разгр_За_Тонну",s.strokeWidth=3,e.legend=new _e["c"],e.legend.position="right",e.legend.maxWidth=void 0,this.chart=e},beforeDestroy:function(){this.chart&&this.chart.dispose()}},ke=we,Oe=(a("cb59"),Object(v["a"])(ke,be,ge,!1,null,"5e25764f",null)),je=Oe.exports,Me={components:{Mixed:je}},Ee=Me,Fe=Object(v["a"])(Ee,me,xe,!1,null,"374dc8e0",null),Se=Fe.exports,Te=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("Mixed")},$e=[],Ne=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{ref:"chart",staticClass:"chart"})},Xe=[],Pe=a("5ddd"),Ge=a.n(Pe),Ye={chart:{title:"График 8 (смешанный)",animation:!0,tooltip:{displayMode:"union"},interactivity:{hoverMode:"by-x"},series:[{seriesType:"column",name:"Сумма по полю Масса разгруженная",data:[{x:"3",value:13278.7},{x:"4",value:4592.25},{x:"7",value:58628.84},{x:"8",value:40382.67},{x:"9",value:37233.39},{x:"10",value:80850.45},{x:"11",value:87097.42},{x:"12",value:54561.42}]},{seriesType:"column",name:"Сумма по полю Дистанция, км",data:[{x:"3",value:121048.18},{x:"4",value:60999.34},{x:"7",value:335371.28},{x:"8",value:368870.82},{x:"9",value:328795.98},{x:"10",value:814558.17},{x:"11",value:957675.89},{x:"12",value:370012.72}]},{seriesType:"column",name:"Сумма по полю Тонна/км",data:[{x:"3",value:3.12},{x:"4",value:2.91},{x:"7",value:4.82},{x:"8",value:3.52},{x:"9",value:3.65},{x:"10",value:4.07},{x:"11",value:3.93},{x:"12",value:4.22}]},{seriesType:"spline",name:"Сумма по полю ЦЕНА_ДЛЯ_ГП_разгр_За_Тонну",normal:{stroke:{color:"#ef6c00",thickness:2.5}},data:[{x:"3",value:378220},{x:"4",value:177565},{x:"7",value:1617305},{x:"8",value:1298080},{x:"9",value:1199610},{x:"10",value:3311423},{x:"11",value:3765732},{x:"12",value:1562425}]}],type:"column"}},Ie={data:function(){return{chart:null,options:Ye}},mounted:function(){!this.chart&&this.options&&this.init()},methods:{init:function(){if(!this.chart&&this.options){var e=this.Anychart||Ge.a;this.chart=new e.fromJson(this.options),this.chart.container(this.$refs.chart).draw()}}},beforeDestroy:function(){this.chart&&(this.chart.dispose(),this.chart=null)}},Le=Ie,Ze=(a("fe4b"),Object(v["a"])(Le,Ne,Xe,!1,null,"01c705f7",null)),Ve=Ze.exports,ze={name:"AnyChart",components:{Mixed:Ve}},Ue=ze,Be=Object(v["a"])(Ue,Te,$e,!1,null,"7e96cbe6",null),De=Be.exports,Je={ZING:"ZING",FUSION:"FUSION",APEX:"APEX",AM:"AM",ANY:"ANY"},Re={components:{AnyChart:De,AmChart:Se,ApexChart:fe,ZingChart:F,FusionCharts:ne},data:function(){return{charts:Je,selected:Je.ZING}}},We=Re,qe=(a("034f"),Object(v["a"])(We,l,r,!1,null,null,null)),He=qe.exports,Ke=(a("78ae"),a("1567")),Qe=a.n(Ke),et=a("27e3"),tt=a.n(et),at=a("8f68"),nt=a.n(at),lt=a("f273"),rt=a.n(lt),st=a("5206"),ut=a.n(st),ct=a("1321"),ot=a.n(ct);n["a"].config.productionTip=!1,n["a"].component("zingchart",Qe.a),n["a"].use(tt.a,nt.a,rt.a,ut.a),n["a"].use(ot.a),n["a"].component("apexchart",ot.a),new n["a"]({render:function(e){return e(He)}}).$mount("#app")},"630a":function(e,t,a){},"85ec":function(e,t,a){},cb59:function(e,t,a){"use strict";a("630a")},fe4b:function(e,t,a){"use strict";a("25cd")}});
//# sourceMappingURL=app.643181cb.js.map