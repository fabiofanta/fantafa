<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Login</div>
                    <div class="card-body">
                        <form v-on:submit.prevent="onSubmit">
                          <div class="form-group">
                            <label for="email">Email address</label>
                            <input v-model="input.email" type="email" name="email" class="form-control" id="email" aria-describedby="emailHelp">
                            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                          </div>
                          <div class="form-group">
                            <label for="password">Password</label>
                            <input v-model="input.password" type="password" class="form-control" name="password" id="password">
                          </div>
                          <div class="form-group form-check">
                            <input type="checkbox" class="form-check-input" id="check">
                            <label class="form-check-label" for="check">Check me out</label>
                          </div>
                          <button type="submit" class="btn btn-primary">Submit</button>
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
            console.log('Component mounted.')
        },
        data() {
            return {
                input: {
                    email: '',
                    password: ''
                }
            }
        },
        methods: {
            onSubmit() {
                axios.get('/sanctum/csrf-cookie')
                .then(response => {
                    axios.post('api/login', this.input)
                    .then(response => {
                        console.log(response);
                        this.$router.push({ path: '/home'});

                    })
                    .catch(response => {
                        console.log(response);
                        alert('Login failed');
                    })
                })
            }
        }
    }
</script>
