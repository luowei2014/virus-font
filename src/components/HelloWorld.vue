<template>
	<div class="hello" >
		<h2>热门迁入城市：</h2>
		<table style="border: 1px solid silver;padding: 10px;width: 100%;">
			<tr class="head-tr">
				<th class="head-th" v-for="item in headList2" v-bind:key="item">{{item}}</th>
			</tr>
			<tr v-for="item in inoutData" v-bind:key="item">
				<th class="city cyp" style="background-color: chocolate;">{{item.cityName}}</th>
				<th class="province cyp" style="background-color: burlywood;">{{item.provinceName}}</th>
				<th v-if="item.value >= 1" style="background-color: red;color: white;font-weight: bolder;">{{item.value}}</th>
				<th v-else-if="item.value >= 0.9" style="background-color: coral;color: white;font-weight: bolder;">{{item.value}}</th>
				<th v-else>{{item.value}}</th>
			</tr>
		</table>
		
		<h2>热门迁出城市：</h2>
		<table style="border: 1px solid silver;padding: 10px;width: 100%;">
			<tr class="head-tr">
				<th class="head-th" v-for="item in headList3" v-bind:key="item">{{item}}</th>
			</tr>
			<tr v-for="item in outData" v-bind:key="item">
				<th class="city cyp" style="background-color: chocolate;">{{item.cityName}}</th>
				<th class="province cyp" style="background-color: burlywood;">{{item.provinceName}}</th>
				<th v-if="item.value >= 1" style="background-color: red;color: white;font-weight: bolder;">{{item.value}}</th>
				<th v-else-if="item.value >= 0.9" style="background-color: coral;color: white;font-weight: bolder;">{{item.value}}</th>
				<th v-else>{{item.value}}</th>
			</tr>
		</table>
		<table style="border: 1px solid silver;padding: 10px;width: 100%;">
			<tr class="head-tr">
				<th class="head-th" v-for="item in headList" v-bind:key="item">{{item}}</th>
			</tr>
			<tr>暂无数据</tr>
		</table>
	</div>
</template>

<script>
export default {
	data() {
		return {
			headList: ["城市","确诊","疑似","治愈","死亡"],
			headList2: ["城市","省份","迁入人口比例(%)"],
			headList3: ["城市","省份","迁出人口比例(%)"],
			inoutData: [],
			outData: []
		}
	},
	methods: {
		getVirusData() {
			var that=this;
			
			//获取迁出城市数据
			this.$http({
				method: 'post',
				url: 'virus/in/list?size=200',
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
					window.console.log(that.inoutData);
				}).catch(err => window.console.log(err));
				
				
				//获取迁出城市数据
				this.$http({
					method: 'post',
					url: 'virus/out/list?size=200',
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
