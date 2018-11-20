<template>
	<div class="row">
		<div class="col-md-6 offset-md-3 mt-3">
			<div class="card">
			  <h5 class="card-header text-center"><b>Register</b></h5>
			  <div class="card-body">
			    <form m>
			    	<div class="form-group">
			        <label for="exampleInputEmail1">Name</label>
			        <input v-model="name" type="text" class="form-control" placeholder="Enter Name">
			        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
			      </div>
			      <div class="form-group">
			        <label for="exampleInputEmail1">Email address</label>
			        <input v-model="email" type="text" class="form-control" placeholder="Enter email">
			        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
			      </div>
			      <div class="form-group">
			        <label for="exampleInputPassword1">Password</label>
			        <input v-model="password" type="password" class="form-control" placeholder="Password">
			      </div>
			      <button @click.prevent="registerUser" type="submit" class="btn btn-success btn-block">Register</button>
			    </form>
			  </div>
			</div>
		</div>
	</div>
</template>

<script>
import Axios from 'axios'

	export default {
		name: 'Register',
		data() {
			return {
				name: '',
				email: '',
				password: ''
			}
		},
		methods: {
			registerUser() {
			      
				Axios.post("http://localhost:8000/api/register", {
					name: this.name,
					email: this.email,
					password: this.password
				}).then(response => {
					//const { data } = response.data.success;
					localStorage.setItem('auth', JSON.stringify(response.data.success))
					this.$root.auth = response.data.success;
				}).catch(({response}) => {
					console.log(response);
				})
			}
		}
	}
</script>