<template>
  <card class="card" title="Create a New Product">
    <div>
      <form @submit.prevent>
        <div class="row">
          <div class="col-md-5">
            <fg-input
              type="text"
              label="Product Name"
              :disabled="false"
              placeholder="Enter a name for the product"
              v-model="user.company"
            >
            </fg-input>
          </div>
          <div class="col-md-4">
            <label for="region">Product Status</label>
              <select id="region" class="form-control" placeholder="Select a status">
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
              v-model="user.email"
            >
            </fg-input>
          </div>
        </div>

        <div class="row">
          <div class="col-md-6">
            <fg-input
              type="text"
              label="Weight Class"
              placeholder="Enter number"
              v-model="user.firstName"
            >
            </fg-input>
          </div>
          <div class="col-md-6">
            <fg-input
              type="text"
              label="Warranty Period Interval"
              placeholder="Enter +00-00"
              v-model="user.lastName"
            >
            </fg-input>
          </div>
        </div>

        <div class="row">
          <div class="col-md-4">
            <fg-input
              type="text"
              label="Supplier"
              placeholder="Enter a supplier (number)"
              v-model="user.city"
            >
            </fg-input>
          </div>
          <div class="col-md-4">
            <fg-input
              type="text"
              label="List Price"
              placeholder="Enter a list price"
              v-model="user.country"
            >
            </fg-input>
          </div>
          <div class="col-md-4">
            <fg-input
              type="text"
              label="Min Price"
              placeholder="Enter a min price"
              v-model="user.postalCode"
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
              v-model="user.address"
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
                v-model="user.aboutMe"
              >
              </textarea>
            </div>
          </div>
        </div>
        <div class="text-center">
          <p-button type="info" round @click.native.prevent="updateProfile">
            Create Product
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
