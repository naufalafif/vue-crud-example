import Vue from 'vue'
import Vuex from 'vuex'
import customers from './models/customer'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
      customers: customers
    },
    mutations: {
      remove_customer (state,index) {

        if (index > -1) {
           state.customers.splice(index, 1);
        }
      },
      add_customer(state,payload){
          state.customers.push(payload);
      },
      edit_customer(state,payload){
          state.customers = state.customers.map(i=> {
            if(i.id==payload.id){
                return payload;
            }
            return i;
          })
      }
    },
    actions:{
        removeCustomer({state,commit},id){
            try {
                var index = state.customers.map(i => {
                    if(id==i.id) return true;
                    return false;
                }).indexOf(true);

                if(index!=-1){
                    commit('remove_customer',index);
                    return true;
                }else{
                    return false;
                }                
            } catch (error) {
                console.log(error);
                return false;
            }
            
        },
        addCustomer({commit},payload){
            commit('add_customer',payload);
        },
        editCustomer({commit},payload){
            commit('edit_customer',{'id': payload.id, 'first_name': payload.first_name, 'last_name': payload.last_name, 'date': payload.date, 'gender': payload.gender })
        }

    }
  })

  export default store;