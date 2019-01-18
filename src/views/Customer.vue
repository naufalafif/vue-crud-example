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
                <tr v-for="(row,index_row) in data" :key="index_row">
                    <td v-for="(column,index) in columns" :key="index"> {{row[column]}} </td>    
                    <td>
                        <a class="button is-small is-primary">Edit</a>
                        <a class="button is-small is-danger" @click="deleteCustomer(row.id)">Delete</a>
                    </td>   
                </tr>
            </tbody>
        </table> 
        <div v-else class="notification is-danger">
            Warning !<strong> No Data to Show</strong>
        </div>
    </div>
    <div class="column">
        <CustomerInputForm></CustomerInputForm>
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
                
            }
        },
    computed:{
            data(){
                console.log('baru',this.$store.state.customers)
                return this.$store.state.customers;
            },
            columns(){
                return this.$store.state.customers.length>0 ?
                       Object.keys(this.$store.state.customers[0]) : []
            },
        },
    methods:{
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

</style>
