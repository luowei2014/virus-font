<template>
	<div class="hello" >
		<h1 style="color: red;">{{msg}}</h1>
		<h3>实时疫情数据</h3>
		<div id="echartsDemo2" style="width: 100%;height: 500px;"></div>
		<span style="margin-top:20px;">选择数据量：</span>
		<select v-model="datalength" @change="dataLengthChange($event)" style="width: 200px;margin-top:20px;">
			<option value="500" selected:disabled>所有城市</option>
			<option value="10">确诊前10城市</option>
			<option value="20">确诊前20城市</option>
			<option value="40">确诊前40城市</option>
			<option value="60">确诊前60城市</option>
			<option value="80">确诊前80城市</option>
			<option value="100">确诊前100城市</option>
		</select>
		<div id="echartsDemo" style="width: 100%;height: 500px;"></div>
		
		<table style="border: 1px solid silver;padding: 10px;width: 100%;height: 400px;overflow: scroll;">
			<tr class="head-tr">
				<th class="head-th" v-for="(itemhv,index) in headList" v-bind:key="index">{{itemhv}}</th>
			</tr>
			<tr v-for="(itemv,index) in virusDdata" v-bind:key="index">
				<th class="cyp" style="background-color: chocolate;">{{itemv.name}}</th>
				<th class="cyp" style="background-color: burlywood;">{{itemv.province}}</th>
				<th>{{itemv.confirm}}</th>
				<!-- <th>{{itemv.suspect}}</th> -->
				<th>{{itemv.heal}}</th>
				<th>{{itemv.dead}}</th>
			</tr>
		</table>
		<h2>热门迁入城市：</h2>
		<table style="border: 1px solid silver;padding: 10px;width: 100%;">
			<tr class="head-tr">
				<th class="head-th" v-for="(itemhin,index) in headList2" v-bind:key="index">{{itemhin}}</th>
			</tr>
			<tr v-for="(itemin,index) in inoutData" v-bind:key="index">
				<th class="city cyp" style="background-color: chocolate;">{{itemin.cityName}}</th>
				<th class="province cyp" style="background-color: burlywood;">{{itemin.provinceName}}</th>
				<th v-if="itemin.value >= 1" style="background-color: red;color: white;font-weight: bolder;">{{itemin.value}}</th>
				<th v-else-if="itemin.value >= 0.9" style="background-color: coral;color: white;font-weight: bolder;">{{itemin.value}}</th>
				<th >{{itemin.value}}</th>
			</tr>
		</table>
		
		<h2>热门迁出城市：</h2>
		<table style="border: 1px solid silver;padding: 10px;width: 100%;">
			<tr class="head-tr">
				<th class="head-th" v-for="(itemhout,index) in headList3" v-bind:key="index">{{itemhout}}</th>
			</tr>
			<tr v-for="(itemout,index) in outData" v-bind:key="index">
				<th class="city cyp" style="background-color: chocolate;">{{itemout.cityName}}</th>
				<th class="province cyp" style="background-color: burlywood;">{{itemout.provinceName}}</th>
				<th v-if="itemout.value >= 1" style="background-color: red;color: white;font-weight: bolder;">{{itemout.value}}</th>
				<th v-else-if="itemout.value >= 0.9" style="background-color: coral;color: white;font-weight: bolder;">{{itemout.value}}</th>
				<th >{{itemout.value}}</th>
			</tr>
		</table>
		
	</div>
</template>

<script>
	import '../../node_modules/echarts/map/js/china.js'
export default {
	data() {
		return {
			headList: ["城市","省份","确诊","治愈","死亡"],
			headList2: ["城市","省份","迁入人口比例(%)"],
			headList3: ["城市","省份","迁出人口比例(%)"],
			inoutData: [],
			outData: [],
			virusDdata:[],
			datalength:200
		}
	},
	methods: {
		getVirusData() {
			var that=this;
			
			//获取迁出城市数据
			this.$http({
				method: 'post',
				url: 'virus/in/list?size=200&sort=desc&colum=value',
				headers: {
					'Content-type': 'application/x-www-form-urlencoded'
				},
				data: {},
				transformRequest: [
					function(data) {
						//更改传值格式
						let ret = '';
						for (let it in data) {
							ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&';
						}
						return ret.slice(0, ret.length - 1);
					}
				]
			}).then(function(r){
					that.inoutData=r.data.data;
					
				}).catch(err => window.console.log(err));
				
				
				//获取迁出城市数据
				this.$http({
					method: 'post',
					url: 'virus/out/list?size=200&sort=desc&colum=value',
					headers: {
						'Content-type': 'application/x-www-form-urlencoded'
					},
					data: {},
					transformRequest: [
						function(data) {
							//更改传值格式
							let ret = '';
							for (let it in data) {
								ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&';
							}
							return ret.slice(0, ret.length - 1);
						}
					]
				}).then(function(r){
						that.outData=r.data.data;
					}).catch(err => window.console.log(err));
					
					//疫情实时数据
					this.$http({
						method: 'post',
						url: 'virus/data/list?size=200&sort=desc&colum=confirm',
						headers: {
							'Content-type': 'application/x-www-form-urlencoded'
						},
						data: {},
						transformRequest: [
							function(data) {
								//更改传值格式
								let ret = '';
								for (let it in data) {
									ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&';
								}
								return ret.slice(0, ret.length - 1);
							}
						]
					}).then(function(r){
							that.virusDdata=r.data.data;
							var keyarray=new Array;
							var valarray=new Array;
							for(var i=0;i<r.data.data.length;i++){
								keyarray[i]=r.data.data[i].name;
								valarray[i]=r.data.data[i].confirm;
							}
							window.console.log(r.data.data);
							that.drawBar(keyarray,valarray);
						}).catch(err => window.console.log(err));
						
						//疫情实时地图数据
						this.$http({
							method: 'post',
							url: 'virus/map/list',
							headers: {
								'Content-type': 'application/x-www-form-urlencoded'
							},
							data: {}

						}).then(function(r){

								that.drawMap(r.data.data);
							}).catch(err => window.console.log(err));
						
						
		},
		drawBar (keyarray,valarray) {
		      let echartsBarDemo = this.$echarts.init(document.getElementById('echartsDemo'))
		      let option = {
		              title: {
		                text: '实时疫情柱状图'
		              },
		              tooltip: {},
		              legend: {
		                data: ['确诊数']
		              },
		              xAxis: {
		                data: keyarray
		              },
		              yAxis: {},
		              series: [{
		                name: '确诊',
		                type: 'bar',
		                data: valarray
		              }]
		            }
		            echartsBarDemo.setOption(option)
		      

		    },
			drawMap(dataList){
				window.console.log(dataList);
				let echartsMapDemo = this.$echarts.init(document.getElementById('echartsDemo2'))
				
						echartsMapDemo.setOption({
							backgroundColor: "#000000",
								tooltip: {}, // 鼠标移到图里面的浮动提示框
								dataRange: {
									show: false,
									min: 0,
									max: 1000,
									text: ['High', 'Low'],
									realtime: true,
									calculable: true,
									color: ['#870002', '#360A0F', '#662E44','#274744']
								},
								geo: { // 这个是重点配置区
									map: 'china', // 表示中国地图
									roam: true,
									label: {
										normal: {
											show: true, // 是否显示对应地名
											textStyle: {
												color: 'white'
											}
										}
									},
									itemStyle: {
										normal: {
											borderColor: '#3E101E'
										},
										emphasis: {
											areaColor: null,
											shadowOffsetX: 0,
											shadowOffsetY: 0,
											shadowBlur: 20,
											borderWidth: 0,
											shadowColor: '#3E101E'
										}
									}
								},
								series: [{
										type: 'scatter',
										coordinateSystem: 'geo' // 对应上方配置
									},
									{
										name: '确诊人数', // 浮动框的标题
										type: 'map',
										geoIndex: 0,
										data: dataList
									}
								]
						})
			},
			dataLengthChange(event){
				var that=this;

				window.console.log(that.datalength);
				
				var keyarray=new Array;
				var valarray=new Array;
				for(var i=0;i<that.virusDdata.length;i++){
					if(i<=that.datalength){
						keyarray[i]=that.virusDdata[i].name;
						valarray[i]=that.virusDdata[i].confirm;
					}
				}
				that.drawBar(keyarray,valarray);
			}
		
		
	},
	mounted() {
		this.getVirusData();
	},
	name: 'HelloWorld',
	props: {
		msg: String
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.cyp{color: white;font-weight: bolder;}
	.head-th{
		border: 1px solid silver;
		padding: 10px;
		font-size: 20px;
		text-align: center;
	}
h3 {
	margin: 40px 0 0;
}
ul {
	list-style-type: none;
	padding: 0;
}
li {
	display: inline-block;
	margin: 0 10px;
}
a {
	color: #42b983;
}
</style>




