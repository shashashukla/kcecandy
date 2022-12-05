<template>

  <div>
    <div style="margin: 10px 10px;">  
      <NuxtLink class="btn btn-primary btn-rounded" to="/">
        Back
      </NuxtLink>
    </div>
    <div class="card-items">
      <!-- {{cardData}} -->
      <div v-for="(data, index ) in cardData" class="card-data">
        <b-card :title="data.ProductName">
          <b-card-text>{{ data.ProductType }}</b-card-text>
          <b-card-text>{{ data.Price }}</b-card-text>
          <b-card-text>{{ data.Description }}</b-card-text>
          <b-button size="sm" variant="danger" class="on-delete" @click="onDelete(data, index)" >
            Remove
          </b-button>
        </b-card>
       
      </div>
      
    </div>
</div>
  
</template>

<style>
.card-items {
  display: flex;
  margin: 40px;
}
.card-data {
  flex: 1;
  margin: 10px;
}
</style>

<script>
import { Console } from "console";
import { mapGetters, mapMutations } from "vuex";

export default {

  data() {
       return {

        productInCart : [],
          
        }
   },

  computed: {
    ...mapGetters({
      cardData: "modules/addToCart/cardData",
    }),
    
  },
// ...mapMutations({
    //     decrement: "modules/addToCart/decrement",
    //   }),
  methods: {

    ...mapMutations({
        decrement: "modules/addToCart/decrement",
        removearray: "modules/addToCart/removearray",
      }),

    onDelete(data, index) {

      console.log('dataid',data);
      console.log('index',index);
      console.log('thisondltcardData',this.cardData);

      //this.cardData.splice(index, 1);

      //this.$delete(this.cardData,index)
      //this.cardData.splice(index);
      //this.$store.dispatch("modules/addToCart/addProductToCart", data);

      //this.cardData.splice(this.cardData.indexOf(data),1);
      //this.cardData.splice(index, 1);

       this.productInCart = this.cardData.find((product) => {
        console.log('product',product);
          return product.id === data.id;
      });
      
        console.log('productInCart',this.productInCart);

       //this.cardData.splice(this.cardData.indexOf(productInCart));
       //this.cardData.splice(productInCart, 1);

      if (this.productInCart) {
        console.log('productInCartifin',this.productInCart.id);
        var productid = this.productInCart.id;
        console.log('productiddas',productid);
          this.decrement();
          this.removearray(index);
          this.$swal('Item removed from cart!!!');
        }

    },

   

  },

  
  
};
</script>
