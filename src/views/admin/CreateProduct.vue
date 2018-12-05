<template>
    <div class="container">
        <div class="row mt-3">
            <div class="col-md-8 offset-md-2"> 
                <div class="card">
                    <div class="card-header">
                        Add Product
                    </div>
                    <div class="card-body">
                        <div class="row">
                            <div class="col-md-12">
                                <input type="text" v-model="name" class="form-control" placeholder="Name">
                            </div> 
                            <div class="col-md-4 mt-3">
                                <input type="text" v-model.number="price" class="form-control" placeholder="Price">
                            </div>
                            <div class="col-md-4 mt-3">
                                <input type="text" v-model.number="stock" class="form-control" placeholder="Stock">
                            </div>
                            <div class="col-md-4 mt-3">
                                <input type="text" v-model.number="discount" class="form-control" placeholder="DIscount">
                            </div>
                            <div class="col-md-12 mt-3">
                                <wysiwyg v-model="detail" />
                            </div>
                            <div class="col-md-12 text-center  mt-2">
                                <button class="btn btn-info btn-block">Add Product</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import "vue-wysiwyg/dist/vueWysiwyg.css"

export default {
    data() {
        return {

        }
    }
}
</script>

