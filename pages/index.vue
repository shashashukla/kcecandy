<template>
  <div>
     <div class="col-lg-12 col-md-12 bg-white
     overflow-hidden shadow sm:rounded-lg">
        <h2 class="col-lg-6 col-md-6 font-semibold float-left">
          KCE Candy
        </h2>


      </div>
      <div class="clearfix"></div>

      <div class="col-lg-12 col-md-12 " style="margin-top: 10px;">

                <div class="card">
                  <h3 class="card-header text-center
                  font-weight-bold text-uppercase py-4">
                    Home Page
                  </h3>
                  <div class="card-body">
                    <div id="table" class="table-editable">

                      <div class="col-sm-12 col-md-12">
                      <div class="col-sm-12 col-md-4 float-left ">

                          <label>
                            <input type="search"
                            class="form-control form-control-sm"
                            placeholder="Search By Name"
                            aria-controls="dtBasicExample" v-model="search">
                          </label>

                          <button type="button"
                          class="btn btn-success btn-rounded btn-sm my-0"
                          @click="reset">
                            Reset
                          </button>


                      </div>

                      <div class="col-sm-12 col-md-5 float-right ">

                        <b-button @click="goToCartPage()"
                        class="add_new_candy" size="sm">Cart
                          <b-badge variant="light">{{ getCounter }}</b-badge>
                        </b-button>

                        <span class="table-add float-right mb-3 mr-2">

                            <button
                            class="btn btn-info btn-rounded btn-sm my-0"
                            @click="toaddnew">
                               Add new candy
                            </button>
                        </span>

                      </div>
                      </div>

                      <table
                      class="table table-bordered table-responsive-md
                      table-striped text-center">
                        <thead>
                          <tr>
                            <th class="text-center">Product Name</th>
                            <th class="text-center">Price</th>
                            <th class="text-center">Details</th>
                            <th class="text-center">Action</th>

                          </tr>
                        </thead>
                        <tbody>
                            <tr
                            v-for="(products) in this.getallproducts"
                            :key="products.id"
                            >
                            <td class="pt-3-half" >{{products.ProductName}}</td>

                            <td class="pt-3-half" >{{products.Price}}</td>
                            <td class="pt-3-half" >{{products.Description}}</td>

                            <td>
                                <button type="button"
                                class="btn btn-info btn-rounded btn-sm my-0"
                                @click="Viewcandy(products.id)">
                                  View
                                </button>

                                <button type="button"
                      class="btn btn-secondary btn-rounded
                      btn-sm my-0 editpage"
                      @click="Editcandy(products.id)">
                                  Edit
                                </button>

                                <button type="button"
                                class="btn btn-success btn-rounded btn-sm my-0"
                                @click="addToCart(products)">
                                  Add to Cart
                                </button>
                            </td>

                          </tr>

                           <div class="item error" v-if="search &&
                           !this.getallproducts.length">
                            <p>No results found!</p>
                           </div>


                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>


       </div>


  </div>


</template>


<script>
import {mapGetters, mapMutations} from "vuex";
import fetch from "node-fetch";
export default {
  name: "IndexPage",
  data() {
    return {
      allproducts: [],
      search: "",
      state: {
        cart: [],
        cartCount: 0,
      },
    };
  },
  async mounted() {
    this.getallproductslist();
  },

  computed: {

    ...mapGetters({
      getCounter: "modules/addToCart/getCounter",
      cardData: "modules/addToCart/cardData",
    }),

    getallproducts() {
      if (this.search) {
        return this.allproducts.filter((item)=>{
          return this.search.toLowerCase().split(" ").every(
              (v) => item.ProductName.toLowerCase().includes(v),
          );
        });
      } else {
        return this.allproducts;
      }
    },

  },


  methods: {


    ...mapMutations({
      increment: "modules/addToCart/increment",
    }),

    getallproductslist() {
      const url = "http://localhost:3000/posts";
      const options = {
        method: "GET",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json;charset=UTF-8",
        },

      };
      fetch(url, options)
          .then((response) => response.json())
          .then((data) => {
            this.allproducts = data;
          });
    },

    Viewcandy(id) {
      this.$router.push({name: "ViewCandy", params: {id: id}});
    },

    Editcandy(id) {
      this.$router.push({name: "EditCandy", params: {id: id}});
    },


    reset() {
      this.search = null;
    },

    goToCartPage() {
      this.$router.push("/cartpage");
    },

    addToCart(item) {
      const productInCart = this.cardData.find((product) => {
        return product.id === item.id;
      });
      if (productInCart) {
        this.$swal("Item already added into cart!!!");
      } else {
        this.$bvToast.show("add-to-cart");
        this.increment();
        this.$store.dispatch("modules/addToCart/addProductToCart", item);
      }
    },

    async toaddnew() {
      this.$router.push({name: "AddCandy"});
    },


  },

};
</script>
