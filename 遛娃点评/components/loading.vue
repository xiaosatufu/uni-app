<template>
	<view>
		<div class="box">
			<div class="thing"></div>
			<div class="thing"></div>
			<div class="thing"></div>
			<div class="thing"></div>
		</div>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss">
	// html,
	// body {
	// 	background-color: #1d1f20;
	// 	margin: 0;
	// 	height: 100%;
	// }

	$size: 30rpx;

	.box {
		height: #{$size * 2};
		width: #{$size * 2};
		position: relative;
		top: calc(50% - #{$size / 2});
		left: calc(50% - #{$size / 2});
		perspective: 1000rpx;
	}

	.thing {
		height: $size;
		width: $size;
		background-color: #E87722;
		position: absolute;
		box-sizing: border-box;
		top: 0;
		left: 0;
	}

	@for $i from 1 through 4 {
		.thing:nth-of-type(#{$i}) {
			animation: bounce 0.5s ease-in-out infinite alternate,
			move 4s #{-$i}s infinite;
		}
	}

	@keyframes bounce {
		from {
			transform: scale(1);
		}

		to {
			transform: scale(0.8);
		}
	}

	@keyframes move {
		0% {
			top: 0;
			left: 0;
			background-color: #E87722;
		}

		25% {
			top: 0;
			left: 50%;
			background-color: #A4D65E;
		}

		50% {
			top: 50%;
			left: 50%;
			background-color: #69B3E7;
		}

		75% {
			top: 50%;
			left: 0;
			background-color: #FFC845;
		}
	}
</style>
