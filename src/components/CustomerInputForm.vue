<template>
<div>
    <form @submit="submit($event)">
        <div class="field">
            <label class="label">First Name</label>
            <div class="control">
                <input class="input" v-model="customer.first_name" type="text" placeholder="First Name" required>
            </div>
        </div>
        <div class="field">
            <label class="label">Last Name</label>
            <div class="control">
                <input class="input" v-model="customer.last_name" type="text" placeholder="Last Name" required>
            </div>
        </div>
        <div class="field">
            <label class="label">Date</label>
            <div class="control">
                <input class="input" v-model="currentDate" type="text" disabled>
            </div>
        </div>
        
        <div class="field-body">
            <div class="field is-narrow">
            <label class="label">Gender</label>    
            <div class="control">
                <label class="radio">
                <input type="radio" v-model="customer.gender" value="Male" >
                Male
                </label>
                <label class="radio">
                <input type="radio" v-model="customer.gender" value="Female" >
                Vemale
                </label>
            </div>
            </div>
        </div>

        <div class="field is-grouped" style="margin-top:20px">
            <div class="control">
                <button class="button is-link">Submit</button>
            </div>
            <div class="control">
                <button class="button is-text">Cancel</button>
            </div>
        </div>
    </form>
</div>
</template>

<script>
export default {
    name:'CustomerInputForm',
    data(){
        return {
            customer:{
                first_name:'Naufal',
                last_name:'Afif',
                gender:'Male',
            }
        }
    },
    computed:{
        currentDate(){
            return new Date().toString();
        }
    },
    methods:{
        submit(event){
            event.preventDefault();
            
            var payload = this.customer;
            payload['date'] = this.currentDate;
            payload['id'] =   this.$store.state.customers.length!=0? Math.max(...this.$store.state.customers.map(i => i.id)) + 1 : 0;
            
            
            const customer = Object.create(payload);
            this.$store.dispatch('addCustomer',customer);
            console.log(this.$store.state.customers);
        }   
    }
}
</script>

<style>

</style>
