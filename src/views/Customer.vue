<template> 
<div class="columns">
    <div class="column is-full">
        <table v-if="data.length!=0" class="table">
            <thead>
                <tr>
                    <th v-for="column in columns" :key="column">{{column}}</th>
                    <th>#</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="row in data" :key="row">
                    <td v-for="key in Object.keys(row)" :key="key"> {{row[key]}} </td>    
                    <td>Aksi</td>   
                </tr>
            </tbody>
        </table> 
        <div v-else class="notification is-danger">
            Warning !<strong> No Data to Show</strong>
        </div>
    </div>
</div>    
</template>

<script>
export default {
    name:'Customer',
    data() {
            return {
                
            }
        },
    computed:{
            data(){
                return this.$dataset;
            },
            columns(){
                return this.$dataset.length>0 ?
                       Object.keys(this.$dataset[0]).map(i => {
                           return i.replace('_',' ')
                       }) : []
            }
        },
        
}
</script>
<style>

</style>
