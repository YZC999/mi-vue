<template>
	<div class="jm_chip preload">
		<div class="jm_chip-container">
			<div class="content">
				<h2 class="webfont title">
					{{ chiptit1 }}<br>{{ chiptit2 }}
				</h2>
				<p class="item-des">
					{{ chiptit3 }}
				</p>
				<ul class="chip-list">
					<li class="item" v-for="chip in chips">
						<h2>{{ chip.t1 }}</h2><br>
						<h4>{{ chip.t2 }}</h4>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return{
				chiptit1:'3GB+32GB',
				chiptit2:'大电视有大内存',
				chiptit3:'内存大升级，能装下你爱的应用，还能加速你的游戏。',
				chips:[
					{t1:'4核',t2:'Cortex A53 1.8GHz'},
					{t1:'4核',t2:'Cortex A53 1.8GHz'},
					{t1:'4核',t2:'Cortex A53 1.8GHz'}
				]
			}
		}
	}
</script>

<style>
	.jm_chip.preload{
		background: url(//c1.mifile.cn/f/i/17/mitv4/65index/bg-chip.jpg) no-repeat center center;
	}

	.jm_chip{
		height: 1000px;
	}

	.jm_chip-container{
		text-align: center;
    	color: #fff;
    	width: 1226px;
    	margin-right: auto;
    	margin-left: auto;
	}

	.jm_chip-container .content{
		padding-top: 80px;
	}

	.jm_chip-container .title{
		padding-bottom: 10px;
		opacity: 1;
		transform:translate3d(0,0,0)
	}

	.jm_chip-container .item-des{
		transition: all .8s .2s;
	}

	.jm_chip-container .chip-list{
		opacity: 1;
		transform:translate3d(0,0,0);
		margin-top: 50px;
	}

	.jm_chip-container .chip-list .item:first-child{
		border-left: none;
	}

	.jm_chip-container .chip-list .item{
		display: inline-block;
		padding: 0 70px;
		border-left: 1px solid #fff;
	}

	.jm_chip-container .chip-list li{
		list-style: none;
	}
</style>