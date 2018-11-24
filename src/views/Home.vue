<template>
	<div class="row">
		<div class="col-md-10">
			<h4 class="font-weight-bolder text-center mt-1"> Recent Products</h4>
			<div class="row">
			<div class="col-md-3 col-sm-6 col-xs-12 mr-0 mt-3" v-if="products" v-for="product in products" :key="product.id">
				<Product :product="product" />
			</div>
			</div>
		</div>
	</div>
</template>

<script>
import Axios from 'axios'
import Product from '@/components/Product.vue'

	export default {
		components:{
			Product
		},
		data() {
			return {
				products: {}
			}
		},
		mounted() {
			this.getProducts();
		},
		methods:{
			getProducts() {
				Axios.get("http://localhost:8000/api/products").then(response => {
					console.log(response.data.data)
					this.products = response.data.data;
				})
			}
		}
	}
</script>

<style>
a:hover {
    text-decoration: none;
}
</style>
