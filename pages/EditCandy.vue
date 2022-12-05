<template>
  <div>
     <div class="col-lg-12 col-md-12 bg-white overflow-hidden shadow sm:rounded-lg">
        <h2 class="col-lg-6 col-md-6 font-semibold ">
          KCE Candy
        </h2>
      </div>
      
    <div class="col-lg-12 col-md-12 " style="margin-top: 10px;">  
      <div class="card">
          <h3 class="card-header text-center font-weight-bold text-uppercase py-4">
            Edit Candy
          </h3>
      </div>
      <form class="col-lg-6 col-md-6 " enctype="multipart/form-data">
        <div class="form-group">
            <label for="exampleInputEmail1">Candy Name</label>
            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Candy Name" v-model="ViewCandyForm.ProductName">
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Candy Type</label>
            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Candy Type" v-model="ViewCandyForm.ProductType">
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Price</label>
            <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Price" v-model="ViewCandyForm.Price">
          </div>

          <div class="form-group">
            <label for="exampleInputPassword1">Description</label>
           
            <textarea class="form-control" placeholder="Description" v-model="ViewCandyForm.Description"></textarea>
          </div>

        
          
          <button type="button" class="btn btn-primary on-edit" @click="saveupdateForm">Submit</button>
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
    name: 'EditCandyPage',

   data() {
        return {

          ViewCandyForm:{
            ProductName: '',
            ProductType: '',
            Price: '',
            Description: '',
          },
         
          arr: [],
        }
   },

   async mounted(){

    console.log('dataid',this.$route.params.id);

    this.getallproducts();
    },


    methods: {

      getallproducts() {
            console.log('getdata');

            var id = this.$route.params.id;

            console.log('idval', id);

            const url = ("http://localhost:3000/posts/"+id);
            const options = {
              method: "GET",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json;charset=UTF-8",
              },
              // body: JSON.stringify({
              //   id: 10,
              //   //b: 20,
              // }),
            };
            fetch(url, options)
              .then((response) => response.json())
              .then((data) => {
                console.log('resdata',data);
                this.ViewCandyForm = data;
                console.log('thisallproducts',this.ViewCandyForm);
              });
         

            //fetch("products.json").then(response => (this.allproducts = response.data));

           
      },

        async saveupdateForm() {

          var id = this.$route.params.id;

          const url =(`http://localhost:3000/posts/${id}`);
              const options = {
                method: "PUT",
                headers: {
                  Accept: "application/json",
                  "Content-Type": "application/json",
                },
              
                body: JSON.stringify(this.ViewCandyForm),
              
            };
          try {
            await fetch(url, options)
              .then((response) => response.json())
              .then((data) => {
                //this.$swal('Product Updated!!!');
              
            }); 
          } catch (error) {
              throw error;
          }
        },
        async toindex() {
         this.$router.push({name: 'index'});
        },

  },
}
</script>