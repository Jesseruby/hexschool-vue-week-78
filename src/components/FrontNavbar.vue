<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-pink">
    <div class="container-fluid">
      <router-link class="navbar-brand text-pinkdeep fw-bold" to="/">波波小舖</router-link>
      <button type="button"
        class="navbar-toggler"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div id="navbarSupportedContent" class="collapse navbar-collapse">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link"
              to="/products">
              產品列表
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link"
              to="/cart">
              購物車
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link"
              to="/login">
              登入後台
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link"
              v-if="status === true"
              to="/admin/products">
              後台產品列表
            </router-link>
          </li>
        </ul>
      </div><!-- .navbarSupportedContent -->
      <router-link type="button"
        class="btn btn-dark"
        style="background-color: #ff789c;border-color: #ff789c;"
        to="/cart">
        購物車
        <span class="badge rounded-pill bg-warning">
          {{ cartData?.carts?.length }}
        </span>
      </router-link>
    </div><!-- .container-fluid -->
  </nav>
</template>

<script>
import emitter from '@/libs/emitter';

export default {
  data() {
    return {
      cartData: {
        carts: [],
      },
    };
  },
  methods: {
    getCart() {
      this.$http
        .get(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`)
        .then((res) => {
          // console.log('cart:', res);
          this.cartData = res.data.data;
        });
    },
  },
  created() {
    const token = document.cookie.replace(
      /(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,
      '$1'
    );
    this.$http.defaults.headers.common.Authorization = `${token}`;
    const api = `${process.env.VUE_APP_API}/api/user/check`;
    this.$http
      .post(api)
      .then(() => {
        this.status = true;
        this.$router.push('/admin/products');
      })
      .catch(() => {
        this.status = false;
        this.$router.push('/products');
      });
  },
  mounted() {
    this.getCart();
    emitter.on('get-cart', () => {
      this.getCart();
    });
  },
};
</script>

<style lang="scss" scoped>
@import "bootstrap/scss/bootstrap";
/*自訂樣式*/
.text-pink{ color: #ffabc2!important;}
.text-pinkdeep{ color: #ff789c!important;}
.bg-pink { background-color: #ffdee7!important;}
</style>
