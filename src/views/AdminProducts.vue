<template>
  <div class="container">
    <component-loading :active="isLoading"></component-loading>
    <h2>後台產品管理列表</h2>
    <div class="text-end mt-4">
      <button type="button"
        class="btn btn-primary"
        @click="openModal('isNew', 'item')">
        建立新的產品
      </button>
    </div>
    <table class="table mt-4">
      <thead>
        <tr>
          <th width="120">圖片</th>
          <th width="120">分類</th>
          <th>產品名稱</th>
          <th width="120">原價</th>
          <th width="120">售價</th>
          <th width="100">是否啟用</th>
          <th width="120">編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in products" :key="item.id">
          <td style="width: 200px">
            <div
              style="
                height: 100px;
                background-size: cover;
                background-position: center;
              "
              :style="{ backgroundImage: `url(${item.imageUrl})` }"
            ></div>
          </td>
          <td>{{ item.category }}</td>
          <td>{{ item.title }}</td>
          <td class="text-end">
            {{ item.origin_price }}
          </td>
          <td class="text-end">
            {{ item.price }}
          </td>
          <td>
            <button
              type="button"
              class="btn btn-sm"
              :class="{
                'btn-success': item.is_enabled,
                'btn-light': !item.is_enabled,
              }"
              @click="item.is_enabled = !item.is_enabled"
            >
              {{ item.is_enabled ? "啟用" : "未啟用" }}
            </button>
          </td>
          <td>
            <div class="btn-group">
              <button
                type="button"
                class="btn btn-outline-primary btn-sm"
                @click="openModal('edit', item)"
              >
                編輯
              </button>
              <button
                type="button"
                class="btn btn-outline-danger btn-sm"
                @click="openModal('delete', item)"
              >
                刪除
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <!-- 分頁元件 -->
    <page-pagination :pages="pagination" @get-product="getProducts">
    </page-pagination>
    <!-- 產品 編輯 model -->
    <admin-productModal
      :product="tempProduct"
      :is-new="isNew"
      ref="adminProductModal"
      @get-products="getProducts">
    </admin-productModal>
    <!-- 產品 刪除 model -->
    <del-productModal
      :temp-product="tempProduct"
      ref="delProductModal"
      @get-products="getProducts">
    </del-productModal>
  </div>
</template>

<script>
import PagePagination from '@/components/PagePagination.vue';
import AdminProductModal from '@/components/AdminProductModal.vue';
import DelProductModal from '@/components/DelProductModal.vue';

export default {
  data() {
    return {
      products: [],
      isLoadingItem: '',
      isLoading: false,
      isNew: false,
      tempProduct: {
        imagesUrl: [],
      },
      status: {
        fileUploading: false,
      },
      modal: {
        AdminProductModal: '',
        DelProductModal: '',
      },
      pagination: {},
    };
  },
  // 區域註冊
  components: {
    PagePagination,
    AdminProductModal,
    DelProductModal,
  },
  methods: {
    //取得產品列表
    getProducts(page = 1) {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/products?page=${page}`;
      this.$http
        .get(url)
        .then((res) => {
          console.log(res);
          this.products = res.data.products;
          this.isLoading = false;
          this.pagination = res.data.pagination;
        })
        .catch((err) => {
          this.$httpMessageState(err.response, '錯誤訊息');
        });
    },
    openModal(status, product) {
      console.log(status, product);
      if (status === 'isNew') {
        this.tempProduct = {
          imagesUrl: [],
        };
        this.isNew = true;
        this.$refs.adminProductModal.openModal();
      } else if (status === 'edit') {
        this.tempProduct = JSON.parse(JSON.stringify(product));
        this.isNew = false;
        this.$refs.adminProductModal.openModal();
        if (!this.tempProduct.imagesUrl) {
          this.tempProduct.imagesUrl = [];
        }
      } else if (status === 'delete') {
        this.tempProduct = JSON.parse(JSON.stringify(product));
        this.$refs.delProductModal.openModal();
      }
    },
  },
  mounted() {
    this.getProducts();
  },
};
</script>
