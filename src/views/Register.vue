<template>
	<div class="row">
		<div class="col-md-6 offset-md-3 mt-3">
			<div class="card">
			  <h5 class="card-header text-center"><b>Register</b></h5>
			  <div class="card-body">
			    <form m>
			    	<div class="form-group">
			        <label for="exampleInputEmail1">Name</label>
			        <input :class="{ 'is-invalid': errors.name, 'is-valid' : !errors.name && this.submitted }" v-model="name" type="text" class="form-control" placeholder="Enter Name">
			        <div class="errors" v-if="errors.name">
				        <small class="text-danger" v-for="error in errors.name" :key="error">{{error}}</small>
			        </div>
			      </div>
			      <div class="form-group">
			        <label for="exampleInputEmail1">Email address</label>
			        <input :class="{ 'is-invalid': errors.email, 'is-valid' : !errors.email && this.submitted }" v-model="email" type="text" class="form-control" placeholder="Enter email">
			        <div class="errors" v-if="errors.email">
				        <small class="text-danger" v-for="error in errors.email" :key="error">{{error}}</small>
			        </div>
			      </div>
			      <div class="form-group">
			        <label for="exampleInputPassword1">Password</label>
			        <input :class="{ 'is-invalid': errors.password, 'is-valid' : !errors.password && this.submitted }" v-model="password" type="password" class="form-control" placeholder="Password">
			        <div class="errors" v-if="errors.password">
				        <small class="text-danger" v-for="error in errors.password" :key="error">{{error}}</small>
			        </div>
			      </div>
			      <button :disabled="loading" @click.prevent="registerUser" type="submit" class="btn btn-success btn-block">
			      	<i class="fas fa-spin fa-spinner" v-if="loading"></i>
			      	{{ loading ? '' : 'Register' }}
			      </button>
			    </form>
			  </div>
			</div>
		</div>
	</div>
</template>

<script>
import Axios from 'axios'

	export default {
		beforeRouteEnter(to, from, next) {
			if (localStorage.getItem('auth')) {
				return next({path: "/"});
			}
			next();
		},
		name: 'Register',
		data() {
			return {
				name: '',
				email: '',
				password: '',
				errors: {},
				submitted: false,
				loading: false
			}
		},
		methods: {
			registerUser() {
			    this.loading = true;
				Axios.post("http://localhost:8000/api/register", {
					name: this.name,
					email: this.email,
					password: this.password
				}).then(response => {
					this.loading = false;
					console.log(response);
					this.submitted = true;
					//const { data } = response.data.success;
					localStorage.setItem('auth', JSON.stringify(response.data.success))
					this.$noty.success("Successful")
					this.$root.auth = response.data.success;
					this.$router.push('/');
				}).catch(({response}) => {
					this.loading = false;
					this.submitted = true;
					this.$noty.error("Oops, something went wrong!")
					console.log(response);
					this.errors = response.data.error;
				})
			}
		}
	}
</script>