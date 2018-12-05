<template>
<div>
    <div class="card mt-3" v-if="!loading">
        <img class="card-img-top" src="" height="150" width="180" alt="Card image cap">
        <div class="card-body">
            <h5 class="card-title">{{ product.name }}</h5>
            <p class="card-text">{{ product.description }}</p>
            <div class="row">
                <div class="col-xs-4 mr-1">
                    <button type="button" class="btn btn-primary">
                        Stock <span class="badge badge-light">{{ product.stock }}</span>
                    </button>
                </div>
                <div class="col-xs-4 mr-1">
                    <button type="button" class="btn btn-warning">
                        Star <span class="badge badge-light">{{ product.rating }}</span>
                    </button>
                </div>
                <div class="col-xs-4 mr-1">
                    <button type="button" class="btn btn-info">
                        Off <span class="badge badge-light">{{ product.discount }} %</span>
                    </button>
                </div>
            </div>
            
            <div class="row mt-2">
                <div class="col-4">
                    <h5 class="font-weight-bolder">Price: #<del>{{ product.price }}</del></h5>
                </div>
                <div class="col-4">
                    <h5 class="font-weight-bolder">Total Price: #{{ product.totalPrice }}</h5>
                </div>
                <div class="col-4">
                    <a :href="product.href.reviews" class="btn btn-secondary">View Reviews >></a>
                </div>
            </div>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
        </div>
    </div>
    <div class="loader text-center mt-5" v-else>
        <i class="fas fa-5x fa-spin fa-spinner" v-if="loading"></i>
    </div>
</div>
</template>

<script>
import Axios from 'axios'
export default {
    mounted() {
        this.getProduct();
    },
    methods:{
        getProduct(){
            Axios.get(`http://localhost:8000/api/products/${ this.$route.params.id }`).then(response => {
                    this.loading = false
					this.product = response.data.data;
			})
        }
    },
    data() {
        return {
            product: {},
            loading: true
        }
    }
}
</script>
<style scoped>
img {
    background-color: grey;
}
a:hover {
    text-decoration: none;
}
</style>

