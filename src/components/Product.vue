<template>
	<!-- <div class="card col-md-12" style="width: 18rem;">
	  <div class="card-body">
	    <h5 class="card-title font-weight-bolder">
				<router-link :to="`/product/${product.id}`">{{ product.name }}</router-link>
				</h5>
	    <p class="card-text">N{{ product.totalPrice }}</p>
	    <a href="#" class="btn btn-secondary">Add to Cart</a>
	  </div>
	</div> -->
	<center>
	<div class="card" style="width: 18rem;">
		<img class="card-img-top" src="https://i.ytimg.com/vi/QD0Wlsm_Sdk/maxresdefault.jpg" height="150" width="180" alt="Card image cap">
		<div class="card-body">
			<div class="row">
				<div class="col-md-6 col-xs-12">
					<router-link :to="`/product/${product.id}`">{{ product.name }}</router-link>
				</div>
				<div class="col-md-6 col-xs-12"><p class="card-text">N{{ product.totalPrice }}</p></div>
				<div class="col-md-12 col-xs-12 mt-1"><button class="btn btn-primary btn-info btn-block">Add To Cart</button></div>
			</div>
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
button {
	border-radius: 0px;
}
</style>