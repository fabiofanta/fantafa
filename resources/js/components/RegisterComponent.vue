<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Register</div>
                    <div class="card-body">
                        <form v-on:submit.prevent="onSubmit">
                            <div class="form-group row">
                                <label for="inputName" class="col-sm-2 col-form-label">Name</label>
                                <div class="col-sm-10">
                                  <input v-model="input.name" name="name" type="name" class="form-control" id="inputName">
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="inputEmail" class="col-sm-2 col-form-label">Email</label>
                                <div class="col-sm-10">
                                  <input v-model="input.email" name="email" type="email" class="form-control" id="inputEmail">
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
                                <div class="col-sm-10">
                                  <input v-model="input.password" name="password" type="password" class="form-control" id="inputPassword">
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="inputPassword-confirm" class="col-sm-2 col-form-label">Confirm Password</label>
                                <div class="col-sm-10">
                                  <input v-model="input.password_confirmation" name="password_confirmation" type="password" class="form-control" id="inputPassword-confirm">
                                </div>
                            </div>
                            <div class="form-group row">
                                <div class="col-sm-10">
                                  <button type="submit" class="btn btn-primary">Register</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        mounted() {
        },
        data() {
            return {
                input: {
                    name: '',
                    email: '',
                    password: '',
                    password_confirmation: ''
                }
            }
        },
        methods: {
            onSubmit() {
                axios.get('/sanctum/csrf-cookie')
                .then(response => {
                    axios.post('api/register', this.input)
                    .then(response => {
                        console.log(response);
                        this.$router.push({ path: '/home'});
                    })
                    .catch(response => {
                        console.log(response);
                        alert('Registration failed');
                    })
                })
            },
        }
    }
</script>
