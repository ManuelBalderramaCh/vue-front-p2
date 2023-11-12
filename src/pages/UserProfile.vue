<template>
  <card class="card" title="Edit Customer">
    <div>
      <form @submit.prevent>
       <!-- Nombre -->
        <div class="row">
          <div class="col-md-5">
            <fg-input
              type="text"
              label="First Name"
              :disabled="false"
              placeholder="Enter name"
              v-model="user.company"
            >
            </fg-input>
          </div>
          <!-- Apellidos -->
          <div class="col-md-7">
            <fg-input
              type="text"
              label="Last Name"
              placeholder="Enter last name"
              v-model="user.username"
            >
            </fg-input>
          </div>
        </div>
        <!-- Email -->
        <div class="row">
          <div class="col-md-12">
            <fg-input
              type="text"
              label="Email"
              placeholder="Enter Email"
              v-model="user.address"
            >
            </fg-input>
          </div>
        </div>
        
        <div class="row">
          <!-- Limite de credito -->
          <div class="col-md-4">
            <fg-input
              type="text"
              label="Credit Limit"
              placeholder="Enter a credit limit"
              v-model="user.firstName"
            >
            </fg-input>
          </div>
          <!-- Nivel de ingresos -->
          <div class="col-md-4">
            <fg-input
              type="text"
              label="Income Level"
              placeholder="Enter income level"
              v-model="user.lastName"
            >
            </fg-input>
          </div>
          <!-- Region -->
          <div class="col-md-4">
            <label for="region">Region</label>
            <select id="region" class="form-control" placeholder="Enter a Region">
              <option>A</option>
              <option>B</option>
              <option>C</option>
            </select>
          </div>
        </div>

        <div class="text-center">
          <p-button type="info" round @click.native.prevent="updateProfile">
            Edit Customer
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
