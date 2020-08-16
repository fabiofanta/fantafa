<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Login</div>

                    <div class="card-body">
                        <form class="" action="" method="post">
                            <input type="text" name="email" value="">
                            <input type="text" name="password" value="">
                            <button type="submit" name="button">Login</button>
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
                test: 'Pizza'
            }
        }
    }
</script>
