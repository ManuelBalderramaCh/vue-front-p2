<template>
    <card class="card" title="Create a New Order">
      <div>
        <form @submit.prevent>
          <div class="row">
            <div class="col-md-5">
              <fg-input
                type="text"
                label="Order Date"
                :disabled="false"
                placeholder="Enter the order date"
                v-model="user.company"
              >
              </fg-input>
            </div>
            <div class="col-md-4">
              <label for="region">Order Mode</label>
                <select id="region" class="form-control" placeholder="Select a order mode">
                  <option>Online</option>
                  <option>Direct</option>
                </select>
              </div>
            <div class="col-md-3">
              <fg-input
                type="text"
                label="Category"
                placeholder="Enter a number"
                v-model="user.email"
              >
              </fg-input>
            </div>
          </div>
  
          <div class="row">
            <div class="col-md-6">
              <fg-input
                type="text"
                label="Customer Id"
                placeholder="Enter a customer id"
                v-model="user.firstName"
              >
              </fg-input>
            </div>
            <div class="col-md-6">
              <fg-input
                type="text"
                label="Order Status"
                placeholder="Enter a order status"
                v-model="user.lastName"
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
                v-model="user.city"
              >
              </fg-input>
            </div>
            <div class="col-md-4">
              <fg-input
                type="text"
                label="Sales rep id"
                placeholder="Enter a list price"
                v-model="user.country"
              >
              </fg-input>
            </div>
            <div class="col-md-4">
              <fg-input
                type="text"
                label="Promotion id"
                placeholder="Enter a promotion code"
                v-model="user.postalCode"
              >
              </fg-input>
            </div>
          </div>
  
          <div class="text-center">
            <p-button type="info" round @click.native.prevent="updateProfile">
              Create Order
            </p-button>
          </div>
          <div class="clearfix"></div>
        </form>
      </div>
    </card>
  </template>
  <script>
  export default {
    data() {
      return {
        user: {
          company: "",
          username: "",
          email: "",
          firstName: "",
          lastName: "",
          address: "",
          city: "",
          postalCode: "",
          aboutMe: ``,
        },
      };
    },
    methods: {
      updateProfile() {
        alert("Your data: " + JSON.stringify(this.user));
      },
    },
  };
  </script>
  <style></style>
  