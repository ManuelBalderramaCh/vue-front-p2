<template>
  <div class="row">
    <div class="col-12">
      <card class="strpied-tabled-with-hover" body-classes="table-full-width table-responsive">
            <template slot="header">
              <h4 class="card-title">Product Information</h4>
              <p class="card-category">Here is a list of all the products in the database</p>
            </template>

              <table class="table-hover table-striped" style="padding: 15%; width: 100%; margin-left: 1%;">
                <thead>
                  <tr>
                    <th scoped="col"> Id</th>
                    <th scoped="col"> Name</th>
                    <th scoped="col"> Description</th>
                    <th scoped="col"> Category</th>
                    <th scoped="col"> Weight Class</th>
                    <th scoped="col"> Warranty Period</th>
                    <th scoped="col"> Supplier</th>
                    <th scoped="col"> Product Status</th>
                    <th scoped="col"> List Price</th>
                    <th scoped="col"> Minimum Price</th>
                    <th scoped="col"> Catalog URL</th>
                    <th scoped="col"> Edit</th>
                    <th scoped="col"> Delete</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="product in products" :key="product._id">
                    <td>{{ product._id }}</td>
                    <td>{{ product.name }}</td>
                    <td>{{ product.description }}</td>
                    <td>{{ product.category }}</td>
                    <td>{{ product.weightClass }}</td>
                    <td>{{ product.warrantyPeriod }}</td>
                    <td>{{ product.supplier }}</td>
                    <td>{{ product.productStatus }}</td>
                    <td>{{ product.listPrice }}</td>
                    <td>{{ product.minimumPrice }}</td>
                    <td>{{ product.catalogURL }}</td>
                    <td><router-link tag="button"
                                        class="btn btn-light btn-sm">Ir</router-link></td>
                    <td><button type="button" tag="button" class="btn btn-info btn-sm" @click="edit(product._id)">Edit</button></td>
                    <td><button type="button" tag="button" class="btn btn-danger btn-sm" @click="deleteP(product._id)">Delete</button></td>
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
      products: null,
    };
  },
  methods: {
    list(){
      axios.get('http://localhost:3000/products')
      .then(res => this.products = res.data.obj);
    },
    edit(productId){
            axios.get(`http://localhost:3000/products/${productId}`)
            .then(res => {
                console.log(res);
                this.$router.push(`/product-edit/${productId}`)
            }).catch(err => {
                this.msg = err.response.data.message;
                console.log(err);
            });
    },
    deleteP(productId){
        axios.delete(`http://localhost:3000/products/${productId}`)
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
