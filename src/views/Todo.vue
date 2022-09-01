<template >
    <div class="container">
    <h1 class="display-2" style="color: var(--va-white);">
        What is up {{  name  }} !</h1>
        <div class="row" style="gap: 1rem;">

            <div class="flex md6 lg4" v-for="task in tasks">
                <va-card stripe stripe-color="success" color="primary">
                    <va-card-title >{{task.title}}
                        <va-checkbox v-model="task.completed" />
                    </va-card-title>
                    <va-card-content>{{task.content}}</va-card-content>
                </va-card>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            name: 'suraj',
            tasks: [
                {
                    title: 'Complete The work',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                    completed: 'completed'
                },
                {
                    title: 'Complete The work',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                    completed: 'completed'
                }
            ],
            value: true
        }
    },

}
console.log("sddf")
</script>

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
.container{
    width: 100%;
    height: 100vh;
    margin-top: var(--navbar-width);
}
</style>