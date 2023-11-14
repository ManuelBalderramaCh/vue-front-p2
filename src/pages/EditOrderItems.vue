<template>
  <card class="card" title="Edit Product">
    <div>
      <form @submit.prevent>
        <div class="row">
          <div class="col-md-5">
            <fg-input
              type="text"
              label="Order Id"
              :disabled="true"
              placeholder="Enter an order id"
              v-model="order_item.order_id"
              :value="order_item.order_id"
            >
            </fg-input>
          </div>
          <div class="col-md-4">
            <fg-input
              type="text"
              label="Line Item Id"
              :disabled="true"
              placeholder="Enter an line item id"
              v-model="order_item.line_item_id"
              :value="order_item.line_item_id"
            >
            </fg-input>
            </div>
        </div>

        <div class="row">
          <div class="col-md-4">
            <fg-input
              type="text"
              label="Product Id"
              placeholder="Enter an product id"
              :disabled="true"
              v-model="order_item.product_id"
              :value="order_item.product_id"
            >
            </fg-input>
          </div>
          <div class="col-md-4">
            <fg-input
              type="text"
              label="Unit Price"
              placeholder="Enter a unit price"
              v-model="order_item.unit_price"
              :value="order_item.unit_price"
              :disabled="false"
            >
            </fg-input>
          </div>
          <div class="col-md-4">
            <fg-input
              type="text"
              label="Quantity"
              placeholder="Enter a quantity"
              v-model="order_item.quantity"
              :value="order_item.quantity"
            >
            </fg-input>
          </div>
        </div>

        <div class="text-center">
          <button type="info" round @click.prevent="edit(id)" class="button button-blue">
            Edit Order Item
          </button>
        </div>
        <div class="clearfix"></div>
      </form>
    </div>
  </card>
</template>
<script>

import axios from 'axios';
import Card from "@/components/Cards/Card.vue";

export default {
  data() {
    return {
      order_item: {
        order_id: "",
        line_item_id: "",
        product_id: "",
        unit_price: "",
        quantity: "",
      },
      id: this.$route.params.id,
    };
  },
  methods: {
    updateProfile() {
      alert("Your data: " + JSON.stringify(this.user));
    },
    async list(){
      try{
      await axios.get('https://dv786379-3000.usw3.devtunnels.ms/order_items/' + this.id)
      .then(res => this.order_item = res.data);
      }catch(err){
        console.log(err)
      }
    },
    edit(id){
      axios.put(`https://dv786379-3000.usw3.devtunnels.ms/order_items/${id}`, {
        order_id: this.order_item.order_id,
        line_item_id: this.order_item.line_item_id,
        product_id: this.order_item.product_id,
        unit_price: this.order_item.unit_price,
        quantity: this.order_item.quantity,
      })
      .then(res => {
        console.log(res);
        this.$router.push('/order-items');
      }).catch(err => {
        this.msg = err.response.data.message;
        console.log(err);
      });
    }
  },
  mounted(){
    this.list();
  },
};
</script>
<style></style>
