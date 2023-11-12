<template>
  <div class="row">
    <div class="col-12">
      <card class="strpied-tabled-with-hover" body-classes="table-full-width table-responsive">
            <template slot="header">
              <h4 class="card-title">Orders List</h4>
              <p class="card-category">Here is a list of all the orders list in the database</p>
            </template>

              <table class="table-hover table-striped" style="padding: 15%; width: 100%; margin-left: 1%;">
                <thead>
                  <tr>
                    <th scoped="col"> Id</th>
                    <th scoped="col"> Order Date</th>
                    <th scoped="col"> Order Mode</th>
                    <th scoped="col"> Customer Id</th>
                    <th scoped="col"> Order Status</th>
                    <th scoped="col"> Total Order</th>
                    <th scoped="col"> Sales Rep Id</th>
                    <th scoped="col"> Promotion Id</th>
                    <th scoped="col"> Edit</th>
                    <th scoped="col"> Delete</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="order in orders" :key="order._id">
                    <td>{{ order._id }}</td>
                    <td>{{ order.firstName }}</td>
                    <td>{{ order.lastName }}</td>
                    <td>{{ order.creditLimit }}</td>
                    <td>{{ order.email }}</td>
                    <td>{{ order.incomeLevel }}</td>
                    <td>{{ order.region }}</td>
                    <td><router-link tag="button"
                                        class="btn btn-light btn-sm">Ir</router-link></td>
                    <td><button type="button" tag="button" class="btn btn-info btn-sm" @click="edit(order._id)">Edit</button></td>
                    <td><button type="button" tag="button" class="btn btn-danger btn-sm" @click="deleteP(order._id)">Delete</button></td>
                  </tr>
                </tbody>
              </table>
          </card>
    </div>
  </div>
 
</template>
<script>

import Card from "@/components/Cards/Card.vue";
import axios from 'axios';

export default {
  components: {
    Card,
  },
  data() {
    return {
      orders: null,
    };
  },
  methods: {
    list(){
      axios.get('http://localhost:3000/orders')
      .then(res => this.orders = res.data.obj);
    },
    edit(orderId){
            axios.get(`http://localhost:3000/orders/${orderId}`)
            .then(res => {
                console.log(res);
                this.$router.push(`/order-edit/${orderId}`)
            }).catch(err => {
                this.msg = err.response.data.message;
                console.log(err);
            });
    },
    deleteP(orderId){
        axios.delete(`http://localhost:3000/orders/${orderId}`)
        .then(res => {
            console.log(res);
            this.list();
        }).catch(err => {
            this.msg = err.response.data.message;
            console.log(err);
        });
    },
  },
};
</script>
<style></style>
