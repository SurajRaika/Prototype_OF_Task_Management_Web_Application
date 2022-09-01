<script>
import selectField_category from './selectField.vue'

export default {
    data() {
        return {
            Todo_LocalData: { categories: [], TodoList: [] },
            categories: ["John", "Jane", "Joe", "Mary", "Mike", "Sue", "Bill", "Kate", "Tom", "Jerry"],
            category: '',
            Title: '',
            description: '',
            Expire_time: new Date(),
            date: new Date()
        }
    },
    components: {
        selectField_category
    }
    ,
    props: ['modelValue'],
    emits: ['update:modelValue'],
    methods: {
        GetCategory(categoryData) {
            this.category = categoryData
        },
        arrayRemove(arr, value) {

            return arr.filter(function (ele) {
                return ele != value;
            });
        }
        ,
        AddTask() {
            console.log("addtask ", this.category & this.Title & this.Expire_time & this.date);
            if (true) {
                var Task = {
                    category: this.category,
                    Title: this.Title,
                    description: this.description,
                    Start_time: this.Expire_time,
                    end_time: (new Date(`${this.date} ${this.Expire_time}`)).getTime()
                };

                this.Todo_LocalData.TodoList.push(Task)

                if (this.Todo_LocalData.categories.includes(this.category)) {
                    this.Todo_LocalData.categories=this.arrayRemove(this.Todo_LocalData.categories,this.category)
                    this.Todo_LocalData.categories.push(this.category)
                }else{
                    this.Todo_LocalData.categories.push(this.category)
                }


                localStorage.setItem('Todo_LocalData', JSON.stringify(this.Todo_LocalData))
                this.category = ''
                this.Title = ''
                this.Expire_time = ''
                this.date = ''
                this.description = ''
                this.Popup = false
            }
        }
    },
    computed: {
        Popup: {
            get() {
                return this.modelValue
            },
            set(Popup) {
                this.$emit('update:modelValue', Popup)
            }
        }
    },

    mounted() {
        this.Todo_LocalData = JSON.parse(localStorage.getItem('Todo_LocalData')) || { categories: [], TodoList: [] }
        console.log(this.Todo_LocalData);
    }

}
</script>
<template >
    <Teleport to="body">
        <div @click.self="Popup = false" class="popup-container" v-if="Popup">
            <div class="popup">
                <div class="row">
                    <div style="display: inline-flex; flex-direction: column;">

                        <label style="color: black;" for="title">Title</label>
                        <input class='Titleinput' v-model="Title" type="text" name="Title" id="title">
                    </div>

                    <selectField_category :category-list="Todo_LocalData.categories" @GetData="GetCategory" />
                </div>
                <div class="row ">
                    <div class="Decription_Input" style="color:black; display: inline-flex; flex-direction: column;">
                        <label for="Decription">Decription</label>
                        <textarea style=" width: 100%; height:100%;" name="" id="Decription" cols="30" rows="10"></textarea>
                    </div>
                </div>
                <div class="row ">
                    <div style="color:black;  display: inline-flex; flex-direction: column;">
                        <label for="Time">Time</label>
                        <input type="time" id="Time" v-model="Expire_time">
                    
                    </div>
                    <div style=" color:black;  display: inline-flex; flex-direction: column;">
                        <label for="date">date</label>
                        <input style=" width: 100%; " type="date" id="date" v-model="date">
                    </div>
                </div>
                <va-button @click="AddTask"> Add Task </va-button>

            </div>
        </div>
    </Teleport>

</template>

<style lang="scss" scoped>
input {
    height: var(--form-input-height);
    border: 0;
}


.popup-container {

    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.697);
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;

    .popup {
        width: var(--popup-width);
        min-height: var(--popup-height);

        padding: 1rem;
        gap: 10px;

        background-color: rgba(13, 141, 221, 0.749);
        border-radius: 1rem;
        display: inline-flex;
        flex-direction: column;
        align-items: center;

        .row {
            width: 100%;


            display: inline-flex;
            // flex-direction: column;
            justify-content: space-around;
            height: fit-content;
            gap: 4px;


            .Decription_Input {
                width: 100%;
                margin: 1rem;
                height: 5rem;
                
            }
        }
    }
}
</style>