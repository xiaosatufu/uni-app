export default {
	data() {
		return {
			name: 'mixin'
		}
	},
	created() {
		console.log('mixin...', this.name);
	},
	mounted() {},
	methods: {
		handleBack() {

			uni.navigateBack();
			// console.log(222)
		},

		handleNavigateTo(url) {

			uni.navigateTo({
				url: url
			});
		},
	}
}
