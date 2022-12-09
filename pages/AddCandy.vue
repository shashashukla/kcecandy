<template>
  <div>
     <div
     class="col-lg-12 col-md-12 bg-white overflow-hidden shadow sm:rounded-lg">
        <h2 class="col-lg-6 col-md-6 font-semibold ">
          KCE Candy
        </h2>
      </div>

    <div class="col-lg-12 col-md-12 " style="margin-top: 10px;">
      <div class="card">
          <h3
          class="card-header text-center font-weight-bold text-uppercase py-4">
            Add New Candy
          </h3>
      </div>
      <form class="col-lg-6 col-md-6 " name="addform"
      enctype="multipart/form-data" >
          <div class="form-group">
            <label for="exampleInputEmail1">Candy Name</label>
            <input type="text" class="form-control" placeholder="Candy Name"
            v-model="AddCandyForm.ProductName" required = 'true'>
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Candy Type</label>
            <input type="text" class="form-control" placeholder="Candy Type"
            v-model="AddCandyForm.ProductType" >
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Price</label>
            <input type="text" class="form-control" placeholder="Price"
            v-model="AddCandyForm.Price">
          </div>

          <div class="form-group">
            <label for="exampleInputPassword1">Description</label>

            <textarea class="form-control" placeholder="Description"
            v-model="AddCandyForm.Description"></textarea>
          </div>

          <button type="button" class="btn btn-primary save-btn"
           @click="saveForm">
            Submit
          </button>

          <button class="btn btn-warning btn-rounded" @click="toindex">
            Back
          </button>

        </form>
    </div>
</div>


</template>

<script>
import fetch from "node-fetch";
export default {
  name: "AddCandyPage",


  data() {
    return {

      AddCandyForm: {
        ProductName: "",
        ProductType: "",
        Price: "",
        Description: "",

      },


    };
  },


  methods: {


    saveForm() {
      const url = ("http://localhost:3000/posts");
      const options = {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },

        body: JSON.stringify(this.AddCandyForm),

      };
      try {
        fetch(url, options)
            .then((response) => response.json())
            .then((data) => {
              return data;
              // this.$swal('Product Added!!!');
            });
      } catch (error) {
        throw error;
      }
    },

    async toindex() {
      this.$router.push({name: "index"});
    },

  },
};
</script>
