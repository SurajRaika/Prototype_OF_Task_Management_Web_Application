<script>

export default {
    data() {
        return {
            name: 'suraj',
            Todo_LocalData:{},
            value: true
        }
    }, 
    mounted() {
        this.Todo_LocalData = JSON.parse(localStorage.getItem('Todo_LocalData')) || { categories: [], TodoList: [] }
    },

}
console.log("sddf")
</script>
<template >
    <div class="container">
        <h1 class="display-2" style="color: var(--va-white);">
            What is up {{ name }} !</h1>
        <div class="row" style="gap: 1rem;">

            <div class="flex md6 lg4" v-for="task in Todo_LocalData.TodoList">
                <va-card stripe stripe-color="success" color="primary">
                    <va-card-title>{{ task.Title }}
                        <va-checkbox v-model="task.completed" />
                    </va-card-title>
                    <va-card-content>{{task.description}}</va-card-content>
                </va-card>
            </div>
        </div>
    </div>
</template>

<style scoped>
div {
    color: aliceblue;
}

.card-header {
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
}

.container {
    width: 100%;
    height: 100vh;
    margin-top: var(--navbar-width);
}
</style>