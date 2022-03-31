<template>
  <div class="container">
    <component-loading :active="isLoading"></component-loading>
    <h2>前台產品列表</h2>
    <div class="container">
      <div class="row row-cols-1 row-cols-lg-5 g-3">
        <div class="col" v-for="product in products" :key="product.id">
          <div class="card h-100">
            <img :src="product.imageUrl" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">{{ product.title }}</h5>
              <p class="card-text">
                {{ product.description }}
              </p>
              <div class="h5" v-if="product.price === product.origin_price">
                {{ product.price }} 元
              </div>
              <div v-else>
                <del class="h6">原價 {{ product.origin_price }} 元</del>
                <p class="h5">現在只要 {{ product.price }} 元</p>
              </div>
            </div><!-- .card-body-->
            <div class="card-footer bg-white">
              <div class="d-grid gap-2 text-center d-md-block">
                <button type="button"
                  class="btn my-2 me-2 btn-outline-primary btn-sm"
                  :disabled="isLoadingItem === product.id"
                  @click="openProductModal(product.id)">
                  <font-awesome-icon
                    icon="spinner" pulse
                    v-if="isLoadingItem === product.id"/>
                  查看更多
                </button>
                <button type="button"
                  class="btn btn-primary btn-sm"
                  :disabled="isLoadingItem === product.id"
                  @click="addCart(product.id)">
                  <font-awesome-icon
                    icon="spinner" pulse
                    v-if="isLoadingItem === product.id"/>
                  加到購物車
                </button>
              </div><!-- .d-grid-->
            </div><!-- .card-footer-->
          </div><!-- .card -->
        </div><!-- .col -->
      </div><!-- .row -->
      <!-- 分頁元件 -->
      <page-pagination
        :pages="pagination"
        @get-product="getProducts">
      </page-pagination>
    </div><!-- .container -->
    <!-- 產品Modal -->
    <product-modal
      ref="productModal"
      :id="productId"
      @add-cart="addCart"></product-modal>
  </div>
</template>

<script>
import emitter from '@/libs/emitter';
import ProductModal from '@/components/ProductModal.vue';
// import PagePagination from '@/components/PagePagination.vue';

export default {
  data() {
    return {
      // 購物車列表
      cartData: {
        carts: [],
      },
      // 產品列表
      products: [],
      productId: '',
      isLoadingItem: '',
      isLoading: false,
      product: {},
      modal: {
        ProductModal: '',
      },
      pagination: {},
    };
  },
  components: {
    ProductModal,
    // PagePagination,
  },
  methods: {
    addCart(id, qty = 1) {
      const data = {
        product_id: id,
        qty,
      };
      this.isLoadingItem = id;
      this.$http
        .post(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`, { data })
        .then((res) => {
          console.log(res);
          this.$refs.productModal.closeModal();
          this.isLoadingItem = '';
          emitter.emit('get-cart');
        });
    },
    getProducts(page = 1) {
      this.isLoading = true;
      this.$http
        .get(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products?page=${page}`)
        .then((res) => {
          this.products = res.data.products;
          this.isLoading = false;
          this.pagination = res.data.pagination;
        });
    },
    openProductModal(id) {
      this.productId = id;
      this.$refs.productModal.openModal();
    },
  },
  mounted() {
    this.getProducts();
  },
};
</script>
