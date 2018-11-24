<template>
	<center>
	<div class="card col-md-12" style="width: 18rem;">
	  <div class="card-body">
	    <h5 class="card-title font-weight-bolder">
				<router-link :to="`/product/${product.id}`">{{ product.name }}</router-link>
				</h5>
	    <p class="card-text">N{{ product.totalPrice }}</p>
	    <a href="#" class="btn btn-secondary">Add to Cart</a>
	  </div>
	</div>
</center>
</template>

<script>
	export default {
		props: ['product'],
		data() {
			return {
				
			}
		}
	}
</script>
<style scoped>
.card {
	background: url(http://www.pngmart.com/files/7/Cart-PNG-Clipart.png);
	background-size: cover;
	background-repeat: no-repeat;
}
</style>