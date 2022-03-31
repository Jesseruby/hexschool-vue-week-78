<template>
  <div class="modal fade"
    id="DelProductModal"
    ref="modal"
    tabindex="-1"
    aria-labelledby="delProductModalLabel"
    aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content border-0">
        <div class="modal-header bg-danger text-white">
          <h5 id="delProductModalLabel" class="modal-title">
            <span>刪除產品</span>
          </h5>
          <button type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close">
          </button>
        </div><!-- .modal-header -->
        <div class="modal-body">
          是否刪除
          <strong class="text-danger">{{ tempProduct.title }}</strong>
          商品(刪除後將無法恢復)。
        </div><!-- .modal-body -->
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-outline-secondary"
            data-bs-dismiss="modal">
            取消
          </button>
          <button type="button" class="btn btn-danger" @click="delProduct">
            確認刪除
          </button>
        </div><!-- .modal-footer -->
      </div><!-- .modal-content -->
    </div><!-- .modal-dialog -->
  </div><!-- .modal -->
</template>

<script>
import Modal from 'bootstrap/js/dist/modal';

export default {
  props: ['tempProduct'],
  methods: {
    delProduct() {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/product/${this.tempProduct.id}`;
      this.$http
        .delete(url)
        .then((res) => {
          this.$emit('get-products');
          this.delProductModal.hide();
          this.$httpMessageState(res, '刪除產品');
        })
        .catch((err) => {
          this.$httpMessageState(err.response, '錯誤訊息');// 失敗結果
        });
    },
    openModal() {
      this.delProductModal.show();
    },
    closeModal() {
      this.delProductModal.hide();
    },
  },
  mounted() {
    this.delProductModal = new Modal(this.$refs.modal, {
      keyboard: false,
      backdrop: 'static',
    });
  },
};
</script>
