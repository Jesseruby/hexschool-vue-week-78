<template>
  <component-loading :active="isLoading"></component-loading>
  <div id="productModal"
    class="modal fade"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    ref="modal">
    <div class="modal-dialog modal-xl" role="document">
      <div class="modal-content border-0">
        <div class="modal-header bg-dark text-white">
          <h5 class="modal-title" id="exampleModalLabel">
            <span>{{ product.title }}</span>
          </h5>
          <button type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close">
          </button>
        </div><!-- .modal-header -->
        <div class="modal-body">
          <div class="row">
            <div class="col-sm-6">
              <img class="img-fluid" :src="product.imageUrl" alt="" />
            </div>
            <div class="col-sm-6">
              <span class="badge bg-primary rounded-pill">
                {{  product.category }}
              </span>
              <p>商品描述：{{ product.description }}</p>
              <p>商品內容：{{ product.content }}</p>
              <div class="h5">{{ product.origin_price }} 元</div>
              <del class="h6">原價 {{ product.origin_price }} 元</del>
              <div class="h5">現在只要 {{ product.price }} 元</div>
              <div>
                <div class="input-group">
                  <select id="" class="form-select" v-model="qty">
                    <option :value="num" v-for="num in 5" :key="`${num}-${id}`">
                      {{ num }}
                    </option>
                  </select>
                  <button type="button"
                    class="btn btn-primary"
                    @click="$emit('add-cart', product.id, qty)">
                    加入購物車
                  </button>
                </div><!-- .input-group -->
              </div>
            </div><!-- .col -->
          </div><!-- .row -->
        </div><!-- .modal-body -->
      </div><!-- .modal-content -->
    </div><!-- .modal-dialog -->
  </div><!-- .productModal -->
</template>

<script>
import Modal from 'bootstrap/js/dist/modal';

export default {
  props: ['id'],
  data() {
    return {
      modal: {},
      product: {},
      qty: 1,
    };
  },
  watch: {
    id() {
      this.product = {};
      this.getProduct();
    },
  },
  methods: {
    getProduct() {
      this.isLoading = true;
      this.$http
        .get(
          `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/product/${this.id}`
        )
        .then((res) => {
          this.isLoading = false;
          console.log(res);
          this.product = res.data.product;
        });
    },
    openModal() {
      this.productModal.show();
    },
    closeModal() {
      this.productModal.hide();
    },
  },
  mounted() {
    this.productModal = new Modal(this.$refs.modal, {
      keyboard: false,
      backdrop: 'static',
    });
  },
};
</script>
