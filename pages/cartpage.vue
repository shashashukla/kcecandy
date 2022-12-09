<!-- eslint-disable vue/multi-word-component-names -->
<template>

  <div>
    <div style="margin: 10px 10px;">
      <NuxtLink class="btn btn-primary btn-rounded" to="/">
        Back
      </NuxtLink>
    </div>
    <div class="card-items">
      <!-- {{this.cardData}} -->
      <div v-for="(data, index ) in cardData" :key="data.id" class="card-data">
        <b-card :title="data.ProductName">
          <b-card-text>{{ data.ProductType }}</b-card-text>
          <b-card-text>{{ data.Price }}</b-card-text>
          <b-card-text>{{ data.Description }}</b-card-text>
          <b-button size="sm" variant="danger"
          class="on-delete" @click="onDelete(data, index)" >
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
import {mapMutations, mapGetters} from "vuex";

export default {

  data() {
    return {

      productInCart: [],
    };
  },

  computed: {
    ...mapGetters("modules/addToCart", ["cardData"]),
  },

  methods: {
    ...mapMutations("modules/addToCart", ["decrement", "removearray"]),

    onDelete(data, index) {
      this.productInCart = this.cardData.find((product) => {
        console.log("product", product);
        return product.id === data.id;
      });
      if (this.productInCart) {
        console.log("productInCartifin", this.productInCart.id);
        const productid = this.productInCart.id;
        console.log("productiddas", productid);
        this.decrement();
        this.removearray(index);
        this.$swal("Item removed from cart!!!");
      }
    },


  },

};
</script>
