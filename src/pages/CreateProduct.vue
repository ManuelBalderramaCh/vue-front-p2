<template>
  <card class="card" title="Create a New Product">
    <div>
      <form @submit.prevent="created">
        <div class="row">
          <div class="col-md-5">
            <fg-input
              type="text"
              label="Product Name"
              :disabled="false"
              placeholder="Enter a name for the product"
              v-model="product.product_name"
            >
            </fg-input>
          </div>
          <div class="col-md-4">
            <label for="region">Product Status</label>
              <select id="region" class="form-control" placeholder="Select a status" v-model="product.product_status">
                <option>Orderable</option>
                <option>Obsolete</option>
                <option>Under Development</option>
                <option>Planned</option>
              </select>
            </div>
          <div class="col-md-3">
            <fg-input
              type="text"
              label="Category"
              placeholder="Enter a number"
              v-model="product.category_id"
            >
            </fg-input>
          </div>
        </div>

        <div class="row">
          <div class="col-md-4">
            <fg-input
              type="text"
              label="Weight Class"
              placeholder="Enter number"
              v-model="product.weight_class"
            >
            </fg-input>
          </div>
          <div class="col-md-4">
            <fg-input
              type="text"
              label="Product Id"
              placeholder="Enter a id for the product"
              v-model="product.product_id"
            >
            </fg-input>
          </div>
          <div class="col-md-4">
            <fg-input
              type="text"
              label="Warranty Period Interval"
              placeholder="Enter +00-00"
              v-model="product.warranty_period"
            >
            </fg-input>
          </div>
        </div>

        <div class="row">
          <div class="col-md-4">
            <fg-input
              type="text"
              label="Supplier Id"
              placeholder="Enter a supplier (number)"
              v-model="product.supplier_id"
            >
            </fg-input>
          </div>
          <div class="col-md-4">
            <fg-input
              type="text"
              label="List Price"
              placeholder="Enter a list price"
              v-model="product.list_price"
            >
            </fg-input>
          </div>
          <div class="col-md-4">
            <fg-input
              type="text"
              label="Min Price"
              placeholder="Enter a min price"
              v-model="product.min_price"
            >
            </fg-input>
          </div>
        </div>

        <div class="row">
          <div class="col-md-12">
            <fg-input
              type="text"
              label="Catalog URL"
              placeholder="Enter a catalog url for the product"
              v-model="product.catalog_url"
            >
            </fg-input>
          </div>
        </div>

        <div class="row">
          <div class="col-md-12">
            <div class="form-group">
              <label>Product Description</label>
              <textarea
                type="text"
                rows="5"
                class="form-control border-input"
                placeholder="Here can be your description"
                v-model="product.product_description"
              >
              </textarea>
            </div>
          </div>
        </div>
        <div class="text-center">
          <button type="info" round @click.prevent="created" class="button button-blue">
            Create Product
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
      product: {
        product_id: "",
        product_name: "",
        product_description: "",
        category_id: "",
        weight_class: "",
        warranty_period: "",
        supplier_id: "",
        product_status: "",
        list_price: "",
        min_price: "",
        catalog_url: "",
      }
    };
  },
  methods: {
    updateProfile() {
      alert("Your data: " + JSON.stringify(this.user));
    },
    created(){
      axios.post('https://dv786379-3000.usw3.devtunnels.ms/products', {
        product_id: this.product.product_id,
        product_name: this.product.product_name,
        product_description: this.product.product_description,
        category_id: this.product.category_id,
        weight_class: this.product.weight_class,
        warranty_period: this.product.warranty_period,
        supplier_id: this.product.supplier_id,
        product_status: this.product.product_status,
        list_price: this.product.list_price,
        min_price: this.product.min_price,
        catalog_url: this.product.catalog_url
      }).then(res => {
        console.log(res);
        this.$router.push('/product-information');
      }).catch(err => {
        this.msg = err.response.data.message;
        console.log(err);
      });
    }
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
