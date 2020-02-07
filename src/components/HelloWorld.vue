<template>
	<div class="hello" >
		<h1 style="color: red;">{{msg}}</h1>
		<h3>实时疫情数据</h3>
		<table style="border: 1px solid silver;padding: 10px;width: 100%;height: 400px;overflow: scroll;">
			<tr class="head-tr">
				<th class="head-th" v-for="itemhv in headList" v-bind:key="itemhv">{{itemhv}}</th>
			</tr>
			<tr v-for="itemv in virusDdata" v-bind:key="itemv">
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
				<th class="head-th" v-for="itemhin in headList2" v-bind:key="itemhin">{{itemhin}}</th>
			</tr>
			<tr v-for="itemin in inoutData" v-bind:key="itemin">
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
				<th class="head-th" v-for="itemout in headList3" v-bind:key="itemout">{{itemout}}</th>
			</tr>
			<tr v-for="itemout in outData" v-bind:key="itemout">
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
export default {
	data() {
		return {
			headList: ["城市","省份","确诊","治愈","死亡"],
			headList2: ["城市","省份","迁入人口比例(%)"],
			headList3: ["城市","省份","迁出人口比例(%)"],
			inoutData: [],
			outData: [],
			virusDdata:[]
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
					window.console.log(that.inoutData);
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
