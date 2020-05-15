<template> 
<div class="columns">
    <div class="column is-three-fifths">
        <table v-if="data.length!=0" class="table">
            <thead>
                <tr>
                    <th v-for="(column,index) in columns" :key="index">{{column}}</th>
                    <th>#</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(row,index_row) in data" :key="index_row" v-bind:class="{ editing: editId === row.id }" >
                    <td v-for="(column,index) in columns" :key="index"> {{row[column]}} </td>    
                    <td>
                        <p class="buttons">
                            <a class="button is-small is-primary" @click="editCustomer(row)">Edit</a>
                            <a class="button is-small is-danger" @click="deleteCustomer(row.id)">Delete</a>
                        </p>
                    </td>   
                </tr>
            </tbody>
        </table> 
        <div v-else class="notification is-danger">
            Warning !<strong> No Data to Show</strong>
        </div>
    </div>
    <div class="column">
        <a href="#" v-show="showAdd == false" @click="addCustomer()" class="button is-small is-danger" style="float:right;margin-top:-20px" >X</a>
        <CustomerInputForm :editId="editId"></CustomerInputForm>
    </div>
</div>    
</template>

<script>

import CustomerInputForm from '../components/CustomerInputForm.vue';

export default {
    name:'Customer',
    components:{
        CustomerInputForm,
    },
    data() {
            return {
                showAdd:true,
                editId:'',
            }
        },
    computed:{
            data(){
                return this.$store.state.customers;
            },
            columns(){
                return this.$store.state.customers.length>0 ?
                       Object.keys(this.$store.state.customers[0]) : []
            }
        },
    methods:{
            editCustomer(customer){
                this.editId = customer.id;
                this.showAdd = false;
            },
            addCustomer(){
                this.editId = "";
                this.showAdd = true;
            },
            deleteCustomer(customer){
                this.$swal({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    type: 'warning',
                    showCancelButton: true,
                    confirmButtonText: 'Yes, delete it!'
                    }).then((result) => {
                    if (result.value) {
                        
                        this.$store.dispatch('removeCustomer',customer).then((res)=>{
                            if(res) this.$swal(
                                    'Deleted!',
                                    'Record has been deleted.',
                                    'success'
                                    )
                            else this.$swal(
                                    'Fail!',
                                    'Fail to delete record.',
                                    'error'
                                    )                                 
                        });
                        

                    }
                    })
            }
        }
        
}
</script>
<style>
.editing {
    background-color: #fff8db;
}
</style>
