<template>
    <card class="card" title="Create a New Order">
      <div>
        <form @submit.prevent="created">
          <div class="row">
            <div class="col-md-5">
              <fg-input
                type="text"
                label="Order Id"
                :disabled="false"
                placeholder="Enter the order id"
                v-model="order.order_id"
              >
              </fg-input>
            </div>
            <div class="col-md-4">
              <label for="region">Order Mode</label>
                <select id="order_mode" class="form-control" placeholder="Select a order mode" v-model="order.order_mode">
                  <option>Online</option>
                  <option>Direct</option>
                </select>
              </div>
            <div class="col-md-3">
              <fg-input
                type="text"
                label="Category"
                placeholder="Enter a number"
                v-model="order.category_id"
              >
              </fg-input>
            </div>
          </div>
  
          <div class="row">
            <div class="col-md-6">
              <label for="region">Customer Id</label>
              <select class="form-control" placeholder="Select customer id" v-model="order.customer_id">
                <option v-for="customer in customers" :value="customer.customer_id">{{ customer.customer_id }}</option>
              </select>
            </div>
            <div class="col-md-6">
              <fg-input
                type="text"
                label="Order Status"
                placeholder="Enter a order status"
                v-model="order.order_status"
              >
              </fg-input>
            </div>
          </div>
  
          <div class="row">
            <div class="col-md-4">
              <fg-input
                type="text"
                label="Total Order"
                placeholder="Enter total order"
                v-model="order.order_total"
              >
              </fg-input>
            </div>
            <div class="col-md-4">
              <fg-input
                type="text"
                label="Sales rep id"
                placeholder="Enter a list price"
                v-model="order.sales_rep_id"
              >
              </fg-input>
            </div>
            <div class="col-md-4">
              <fg-input
                type="text"
                label="Promotion id"
                placeholder="Enter a promotion code"
                v-model="order.promotion_id"
              >
              </fg-input>
            </div>
          </div>
  
          <div class="text-center">
            <button type="info" round @click.prevent="created" class="button button-blue">
              Create Order
            </button>
          </div>
          <div class="clearfix"></div>
        </form>
      </div>
    </card>
  </template>
  <script>
import axios from 'axios';

  export default {
    data() {
      return {
        order: {
          order_id: "",
          // order_date: "",
          order_mode: "",
          customer_id: "",
          order_status: "",
          order_total: "",
          sales_rep_id: "",
          promotion_id: "",
        },
        customers: null
      };
    },
    methods: {
      updateProfile() {
        alert("Your data: " + JSON.stringify(this.user));
      },
      listCustomers(){
        axios.get('https://dv786379-3000.usw3.devtunnels.ms/customers')
             .then( res => this.customers = res.data)
      },
      created(){
        axios.post('https://dv786379-3000.usw3.devtunnels.ms/orders', {
          order_id: this.order.order_id,
          // order_date: this.order.order_date,
          order_mode: this.order.order_mode,
          customer_id: this.order.customer_id,
          order_status: this.order.order_status,
          order_total: this.order.order_total,
          sales_rep_id: this.order.sales_rep_id,
          promotion_id: this.order.promotion_id,
        }).then(res => {
          console.log(res);
          this.$router.push('/order-items');
        }).catch(err => {
          this.msg = err.response.data.message;
          console.log(err);
        });
      }
    },
    mounted(){
      this.listCustomers();
    },
  };
  </script>
  <style>/* Estilo base del botón */
  .button {
    display: inline-block;
    padding: 8px 16px;
    border-radius: 25px; /* Hace que el botón sea redondo */
    text-align: center;
    text-decoration: none;
    font-size: 16px;
    cursor: pointer;
  }
  
  /* Estilo para el color de fondo azul */
  .button-blue {
    background-color: #96c0ed;
    color: #fff; /* Color del texto */
  }
  
  /* Estilo para el efecto de hover */
  .button:hover {
    opacity: 0.8; /* Reduce la opacidad al pasar el ratón sobre el botón */
  }</style>
  