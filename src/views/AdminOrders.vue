<template>
  <component-loading :active="isLoading"></component-loading>
  <table class="table mt-4">
    <thead>
      <tr>
        <th>購買時間</th>
        <th>Email</th>
        <th>購買款項</th>
        <th>應付金額</th>
        <th>是否付款</th>
        <th>編輯</th>
      </tr>
    </thead>
    <tbody>
      <template v-for="(item, key) in orders" :key="key">
        <tr v-if="orders.length" :class="{ 'text-secondary': !item.is_paid }">
          <td>{{ date(item.create_at) }}</td>
          <td><span v-text="item.user.email" v-if="item.user"></span></td>
          <td>
            <ul class="list-unstyled">
              <li v-for="(product, index) in item.products" :key="index">
                {{ product.product.title }} 數量：{{ product.qty }}
                {{ product.product.unit }}
              </li>
            </ul>
          </td>
          <td class="text-right">{{ item.total }}</td>
          <td>
            <div class="form-check form-switch">
              <input type="checkbox"
                class="form-check-input"
                :id="`${item.id}`"
                v-model="item.is_paid"/>
              <label class="form-check-label" :for="`${item.id}`">
                <span v-if="item.is_paid">已付款</span>
                <span v-else>未付款</span>
              </label>
            </div><!-- .form-check -->
          </td>
          <td>
            <div class="btn-group">
              <button type="button"
                class="btn btn-outline-primary btn-sm"
                @click="openOrdersModal(item)">
                檢視
              </button>
              <button type="button"
                class="btn btn-outline-danger btn-sm"
                @click="openDelOrderModal(item)">
                刪除
              </button>
            </div><!-- .btn-group -->
          </td>
        </tr>
      </template>
    </tbody>
  </table>
  <!-- 分頁元件 -->
  <page-pagination
    :pages="pagination"
    @get-product="getOrders">
  </page-pagination>
  <!-- 訂單 新增 model -->
  <order-modal
    :order="tempOrder"
    ref="orderModal"
    @update-paid="getOrders"
  ></order-modal>
  <!-- 訂單 刪除 model -->
  <del-orderModal
    :item="tempOrder"
    ref="delOrderModal"
    @del-order-item="delOrder"
  ></del-orderModal>
</template>

<script>
import PagePagination from '@/components/PagePagination.vue';
import OrderModal from '@/components/OrderModal.vue';
import DelOrderModal from '@/components/DelOrderModal.vue';

export default {
  data() {
    return {
      orders: [],
      isNew: false,
      pagination: {},
      tempOrder: {},
      isLoading: false,
    };
  },
  // 區域註冊
  components: {
    PagePagination,
    OrderModal,
    DelOrderModal,
  },
  inject: ['emitter'],
  methods: {
    // 時間戳
    date(time) {
      const date = new Date(time * 1000);
      return date.toLocaleDateString();
    },
    getOrders(page = 1) {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/orders?page=${page}`;
      this.isLoading = true;
      this.$http
        .get(url)
        .then((res) => {
          console.log(res);
          this.orders = res.data.orders;
          this.isLoading = false;
          this.pagination = res.data.pagination;
        })
        .catch((err) => {
          this.$httpMessageState(err.response, '錯誤訊息');
        });
    },

    delOrder() {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/order/${this.tempOrder.id}`;
      this.$http
        .delete(url)
        .then((res) => {
          console.log(res);
          this.$emit('get-orders');
          this.$refs.delOrderModal.hideModal();
          this.getOrders();
        })
        .catch((err) => {
          this.$httpMessageState(err.response, '錯誤訊息');
        });
    },

    openOrdersModal(item) {
      this.tempOrder = { ...item };
      this.isNew = false;
      this.$refs.orderModal.openModal();
    },
    openDelOrderModal(item) {
      this.tempOrder = { ...item };
      this.$refs.delOrderModal.openModal();
    },
  },
  mounted() {
    this.getOrders();
  },
};
</script>
