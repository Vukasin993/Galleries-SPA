<template>
    <div>
        <form class="form-inline" @submit.prevent="handleSearchText">
            <input class="form-control" type="search" placeholder="Search galleries..." v-model="search">
            <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            search: ''
        }   
    },
    methods: {
        handleSearchText() {
            this.$emit('handleSearchText', this.search)
        }
    }
}
</script> 