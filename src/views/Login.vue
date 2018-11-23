<template>
	<div class="row">
		<div class="col-md-6 offset-md-3 mt-3">
			<div class="card">
			  <h5 class="card-header text-center"><b>Login</b></h5>
			  <div class="card-body">
			    <form>
			      <div class="form-group">
			        <label for="exampleInputEmail1">Email address</label>
			        <input :class="{ 'is-invalid': errors.email, 'is-valid' : !errors.email && this.submitted }" v-model="email" type="email" class="form-control" placeholder="Enter email">
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
			      <button :disabled="loading" @click.prevent="loginUser" type="submit" class="btn btn-success btn-block">
			      	<i class="fas fa-spin fa-spinner" v-if="loading"></i>
			      	{{ loading ? '' : 'Login' }}
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
		data() {
			return {
				email: '',
				password: '',
				errors: {},
				submitted: false,
				loading: false
			}
		},
		methods: {
			loginUser(){
				this.loading = true;
				Axios.post("http://localhost:8000/api/login", {
					email: this.email,
					password: this.password
				}).then((response) => {
					this.loading = false;
					this.submitted = true;
					this.$root.auth = response.data.success;
					localStorage.setItem('auth',JSON.stringify(response.data.success));
					this.$noty.success("Logged In")
					this.$router.push('/');
					console.log(response);
				}).catch(({response}) => {
					this.loading = false;
					this.submitted = true;
					this.$noty.error("Oops, something went wrong!")
					if(response.status === 401) {
						this.errors={
							email: ["These credentials do not match our records."]
						};
					console.log(response);
					} else {
						this.errors = response.data.error;
					}
				})
				
			}
		}
	}
</script>