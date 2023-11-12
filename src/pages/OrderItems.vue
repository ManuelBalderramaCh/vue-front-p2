<template>
  <div class="row">
    <div class="col-12">
      <card class="strpied-tabled-with-hover" body-classes="table-full-width table-responsive">
            <template slot="header">
              <h4 class="card-title">Order Items</h4>
              <p class="card-category">Here is a list of all the order items in the database</p>
            </template>

              <table class="table-hover table-striped" style="padding: 15%; width: 100%; margin-left: 1%;">
                <thead>
                  <tr>
                    <th scoped="col"> Id</th>
                    <th scoped="col"> Line Item Id</th>
                    <th scoped="col"> Product Id</th>
                    <th scoped="col"> Unit Price</th>
                    <th scoped="col"> Quantity</th>
                    <th scoped="col"> Edit</th>
                    <th scoped="col"> Delete</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="orderItem in orderItems" :key="orderItem._id">
                    <td>{{ orderItem._id }}</td>
                    <td>{{ orderItem.lineItemId }}</td>
                    <td>{{ orderItem.productId }}</td>
                    <td>{{ orderItem.unitPrice }}</td>
                    <td>{{ orderItem.quantity }}</td>
                    <td><router-link tag="button"
                                        class="btn btn-light btn-sm">Ir</router-link></td>
                    <td><button type="button" tag="button" class="btn btn-info btn-sm" @click="edit(orderItem._id)">Edit</button></td>
                    <td><button type="button" tag="button" class="btn btn-danger btn-sm" @click="deleteP(orderItem._id)">Delete</button></td>
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
      orderItems: null,
    };
  },
  methods: {
    list(){
      axios.get('http://localhost:3000/order_items')
      .then(res => this.orderItems = res.data.obj);
    },
    edit(orderItemId){
            axios.get(`http://localhost:3000/order_items/${orderItemId}`)
            .then(res => {
                console.log(res);
                this.$router.push(`/order_item-edit/${orderItemId}`)
            }).catch(err => {
                this.msg = err.response.data.message;
                console.log(err);
            });
    },
    deleteP(orderItemId){
        axios.delete(`http://localhost:3000/order_items/${orderItemId}`)
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
