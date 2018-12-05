<template>
	<div class="row">
		<div class="col-md-10 col-md-offset-2">
			<h4 class="font-weight-bolder text-center mt-1"> Recent Products</h4>
			<div class="row">
				<div class="col-md-4 col-sm-6 col-xs-12 mr-0 mt-3" v-for="product in products.data" :key="product.id">
					<Product :product="product" />
				</div>
				<div class="col-md-12 loader text-center mt-5">
					<i class="fas fa-5x fa-spin fa-spinner" v-if="loading"></i>
				</div>
			</div>
		</div>
		<div class="col-md-2"></div>
		<div class="col-md-8 text-center mt-1">
			<button @click="prevProduct()" :disabled="paginate.prev === null"  class="btn btn-success"> << Prev</button>
			<button @click="nextProduct()" :disabled="paginate.next === null"  class="btn btn-success">Next >> </button>
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
				products: {},
				paginate: {},
				loading : true
			}
		},
		mounted() {
			this.getProducts();
		},
		methods:{
			getProducts(url = "http://localhost:8000/api/products") {
				this.loading = true;
				Axios.get(url).then(response => {
					this.loading = false;
					console.log(response.data)
					this.products = response.data;
					this.paginate = response.data.links;
				})
			},
			nextProduct() {
				this.getProducts(this.paginate.next);
			},
			prevProduct() {
				this.getProducts(this.paginate.prev);
			}
		}
	}
</script>

<style>
a:hover {
    text-decoration: none;
}
</style>
