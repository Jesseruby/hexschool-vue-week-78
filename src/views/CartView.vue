<template>
  <div class="container">
    <component-loading :active="isLoading"></component-loading>
    <h2>購物車</h2>
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="text-end">
          <button type="button"
            class="btn btn-danger"
            @click="delAllCarts"
            :disabled="cartData.carts.length === 0">
            清空購物車
          </button>
        </div><!-- .text-end -->
        <table class="table align-middle">
          <thead>
            <tr>
              <th></th>
              <th>品名</th>
              <th style="width: 130px">數量/單位</th>
              <th></th>
              <th>單價</th>
            </tr>
          </thead>
          <tbody>
            <template v-if="cartData.carts">
              <tr v-for="item in cartData.carts" :key="item.id">
                <td>
                  <button type="button"
                    class="btn btn-outline-danger btn-sm"
                    @click="removeCartItem(item.id)"
                    :disabled="isLoadingItem === item.id">
                    <font-awesome-icon
                      icon="spinner" pulse
                      v-if="isLoadingItem === item.id"/>
                    x
                  </button>
                </td>
                <td>{{ item.product.title }}</td>
                <td>
                  <div class="input-group input-group-sm">
                    <div class="input-group mb-3">
                      <select class="form-select"
                        v-model="item.qty"
                        @change="updateCartItem(item)"
                        :disabled="isLoadingItem === item.id">
                        <option
                          v-for="num in 10"
                          :key="`${num}-${item.id}`"
                          :value="num">
                          {{ num }}
                        </option>
                      </select>
                      <span class="input-group-text"
                        id="basic-addon2">
                        {{ item.product.unit }}
                      </span>
                    </div>
                  </div>
                </td>
                <td></td>
                <td class="text-end">{{ item.total }}</td>
              </tr>
            </template>
          </tbody>
          <tfoot>
            <tr>
              <td colspan="4" class="text-end">總計</td>
              <td class="text-end">{{ cartData.total }}</td>
            </tr>
          </tfoot>
        </table>
      </div><!-- .col -->
    </div><!-- .row -->
    <div class="my-5 row justify-content-center">
      <component-form
        ref="form"
        class="col-md-6"
        v-slot="{ errors }"
        @submit="createOrder">
        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <component-field
            id="email"
            name="email"
            type="email"
            class="form-control"
            :class="{ 'is-invalid': errors['email'] }"
            placeholder="請輸入 Email"
            rules="email|required"
            v-model="form.user.email"></component-field>
          <error-message name="email" class="invalid-feedback"></error-message>
        </div><!-- .label -->
        <div class="mb-3">
          <label for="name" class="form-label">收件人姓名</label>
          <component-field
            id="name"
            name="姓名"
            type="text"
            class="form-control"
            :class="{ 'is-invalid': errors['姓名'] }"
            placeholder="請輸入姓名"
            rules="required"
            v-model="form.user.name"></component-field>
          <error-message name="姓名" class="invalid-feedback"></error-message>
        </div><!-- .label -->
        <div class="mb-3">
          <label for="tel" class="form-label">收件人電話</label>
          <component-field
            id="tel"
            name="電話"
            type="text"
            class="form-control"
            :class="{ 'is-invalid': errors['電話'] }"
            placeholder="請輸入電話"
            :rules="isPhone"
            v-model="form.user.tel"></component-field>
          <error-message name="電話" class="invalid-feedback"></error-message>
        </div><!-- .label -->
        <div class="mb-3">
          <label for="address" class="form-label">收件人地址</label>
          <component-field
            id="address"
            name="地址"
            type="text"
            class="form-control"
            :class="{ 'is-invalid': errors['地址'] }"
            placeholder="請輸入地址"
            rules="required"
            v-model="form.user.address"></component-field>
          <error-message name="地址" class="invalid-feedback"></error-message>
        </div><!-- .label -->
        <div class="mb-3">
          <label for="message" class="form-label">留言</label>
          <textarea
            name=""
            id="message"
            class="form-control"
            cols="30"
            rows="10"
            v-model="form.message"></textarea>
        </div><!-- .label -->
        <div class="text-end">
          <button type="submit"
            class="btn btn-danger"
            :disabled="Object.keys(errors).length > 0 || cartData.carts.length === 0">
            送出訂單
          </button>
        </div><!-- .submit -->
      </component-form>
    </div><!-- .row -->
  </div>
</template>

<script>
import emitter from '@/libs/emitter';

export default {
  data() {
    return {
      cartData: {
        carts: [],
      },
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: '',
        },
        message: '',
      },
      products: [],
      isLoadingItem: '',
      isLoading: false,
    };
  },
  methods: {
    isPhone(value) {
      const phoneNum = /(^09|\+?8869)\d{2}(-?\d{3}-?\d{3})$/;
      return phoneNum.test(value) ? true : '請輸入正確的手機號碼，格式：0912-345-678';
    },
    getProducts() {
      this.$http
        .get(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products`)
        .then((res) => {
          console.log(res);
          this.products = res.data.products;
        });
    },
    getCart() {
      this.isLoading = true;
      this.$http
        .get(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`)
        .then((res) => {
          this.cartData = res.data.data;
          this.isLoading = false;
          emitter.emit('get-cart');
        });
    },
    removeCartItem(id) {
      this.isLoadingItem = id;
      this.$http
        .delete(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart/${id}`)
        .then((res) => {
          console.log(res);
          this.getCart();
          this.isLoadingItem = '';
          emitter.emit('get-cart');
        });
    },
    updateCartItem(item) {
      const data = {
        product_id: item.product_id,
        qty: item.qty,
      };
      this.isLoadingItem = item.id;
      this.$http
        .put(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart/${item.id}`, { data })
        .then((res) => {
          console.log(res);
          this.getCart();
          this.isLoadingItem = '';
        });
    },
    delAllCarts() {
      this.isLoading = true;
      this.$http
        .delete(
          `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/carts`
        )
        .then((res) => {
          console.log(res);
          this.isLoading = false;
          this.getCart();
          emitter.emit('get-cart');
        });
    },
    createOrder() {
      this.isLoading = true;
      const order = this.form;
      this.$http
        .post(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/order`, { data: order })
        .then((res) => {
          this.isLoading = false;
          console.log(res);
          this.$refs.form.resetForm();
          this.getCart();
        });
    },
  },
  mounted() {
    this.getCart();
  },
};
</script>
