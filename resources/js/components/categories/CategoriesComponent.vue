<template>
    <div class="col-lg-3">
        <h1 class="my-4">Bibliodarium</h1>
        <div class="list-group">
            <h1>Categories</h1>
            <a v-for="category in categories" v-bind:key="category.id" href="#" class="list-group-item">{{  category.name  }}</a>
        </div>
    </div>
</template>
<script>
    export default {
        data: function() {
            return {
                categories: []
            }
        },

        mounted() {
            this.init()
        },

        methods: {
            init: function() {
                axios.get('/api/categories')
                .then((response) => {
                    this.categories = response.data.data                   
                });
            }
        }
    }
</script>