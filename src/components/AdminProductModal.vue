<template>
  <div class="modal fade"
    id="AdminProductModal"
    ref="modal" tabindex="-1"
    aria-labelledby="productModalLabel"
    aria-hidden="true">
    <div class="modal-dialog modal-xl">
      <div class="modal-content border-0">
        <div class="modal-header bg-dark text-white">
          <h5 id="productModalLabel" class="modal-title">
            <span>{{ isNew ? "新增" : "修改" }}產品</span>
          </h5>
          <button type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"></button>
        </div><!-- .modal-header -->
        <div class="modal-body">
          <div class="row">
            <div class="col-sm-4">
              <div class="mb-3">
                <label for="imageUrl" class="form-label">主要圖片</label>
                <input type="text"
                  id="imageUrl"
                  class="form-control mb-2"
                  v-model="tempProduct.imageUrl"
                  placeholder="請輸入圖片連結"/>
                <!-- 上傳圖片 -->
                <div class="mb-3">
                  <label for="customFile" class="form-label">或 上傳圖片
                    <i class="fas fa-spinner fa-spin"
                      v-if="status.fileUploading"></i>
                  </label>
                  <input
                    type="file"
                    id="customFile"
                    class="form-control"
                    ref="fileInput"
                    @change="uploadFile"
                  />
                </div>
                <img class="img-fluid"
                  :src="tempProduct.imageUrl"
                  :alt="tempProduct.imageUrl"/>
              </div>
              <h3 class="mb-3">多圖新增</h3>
              <div v-if="Array.isArray(tempProduct.imagesUrl)">
                <template
                  v-for="(image, key) in tempProduct.imagesUrl"
                  :key="key + '123'">
                  <div class="mb-1">
                    <div class="mb-3">
                      <label for="imageUrl" class="form-label">圖片網址</label>
                      <input type="text"
                        class="form-control"
                        v-model="tempProduct.imagesUrl[key]"
                        placeholder="請輸入圖片連結"/>
                    </div>
                    <img class="img-fluid"
                      :alt="tempProduct.imagesUrl[key]"
                      :src="tempProduct.imagesUrl[key]"/>
                  </div>
                  <button type="button"
                    class="btn btn-outline-danger btn-sm d-block w-100"
                    @click="tempProduct.imagesUrl.splice(key, 1)">
                    刪除
                  </button>
                </template>
                <button type="button"
                  v-if="
                    !tempProduct.imagesUrl.length ||
                    tempProduct.imagesUrl[tempProduct.imagesUrl.length - 1]"
                  class="btn btn-outline-primary btn-sm d-block w-100"
                  @click="tempProduct.imagesUrl.push('')">
                  新增一張圖片
                </button>
              </div>
            </div><!-- .col -->
            <div class="col-sm-8">
              <div class="mb-3">
                <label for="title" class="form-label">標題</label>
                <input type="text"
                  id="title"
                  class="form-control"
                  v-model="tempProduct.title"
                  placeholder="請輸入標題"/>
              </div>
              <div class="row">
                <div class="mb-3 col-md-6">
                  <label for="category" class="form-label">分類</label>
                  <input type="text"
                    id="category"
                    class="form-control"
                    v-model="tempProduct.category"
                    placeholder="請輸入分類"/>
                </div>
                <div class="mb-3 col-md-6">
                  <label for="price" class="form-label">單位</label>
                  <input type="text"
                    id="unit"
                    class="form-control"
                    v-model="tempProduct.unit"
                    placeholder="請輸入單位"/>
                </div>
              </div>

              <div class="row">
                <div class="mb-3 col-md-6">
                  <label for="origin_price" class="form-label">原價</label>
                  <input type="number" min="0"
                    id="origin_price"
                    class="form-control"
                    v-model.number="tempProduct.origin_price"
                    placeholder="請輸入原價"/>
                </div>
                <div class="mb-3 col-md-6">
                  <label for="price" class="form-label">售價</label>
                  <input type="number" min="0"
                    id="price"
                    class="form-control"
                    v-model.number="tempProduct.price"
                    placeholder="請輸入售價"/>
                </div>
              </div>
              <hr/>
              <div class="mb-3">
                <label for="description" class="form-label">產品描述</label>
                <textarea type="text"
                  id="description"
                  class="form-control"
                  v-model="tempProduct.description"
                  placeholder="請輸入產品描述">
                </textarea>
              </div>
              <div class="mb-3">
                <label for="content" class="form-label">說明內容</label>
                <textarea type="text"
                  id="description"
                  class="form-control"
                  v-model="tempProduct.content"
                  placeholder="請輸入說明內容">
                </textarea>
              </div>
              <div class="mb-3">
                <div class="form-check">
                  <input type="checkbox"
                    id="is_enabled"
                    class="form-check-input"
                    v-model="tempProduct.is_enabled"
                    :true-value="1"
                    :false-value="0"/>
                  <label class="form-check-label" for="is_enabled">是否啟用</label>
                </div>
              </div>
            </div><!-- .col -->
          </div><!-- .row -->
        </div><!-- .modal-body -->
        <div class="modal-footer">
          <button type="button"
            class="btn btn-outline-secondary"
            data-bs-dismiss="modal">
            取消
          </button>
          <button type="button"
            class="btn btn-primary"
            @click="updateProduct()">
            確認
          </button>
        </div><!-- .modal-footer -->
      </div><!-- .modal-content -->
    </div><!-- .modal-dialog -->
  </div><!-- .modal -->
</template>

<script>
import Modal from 'bootstrap/js/dist/modal';

export default {
  props: {
    product: {
      type: Object,
      default() {
        return {};
      },
    },
    isNew: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      modal: {},
      id: '',
      isLoading: false,
      tempProduct: {
        imagesUrl: [],
      },
      status: {},
    };
  },
  inject: ['emitter'],
  methods: {
    uploadFile() {
      const uploadedFile = this.$refs.fileInput.files[0];
      const formData = new FormData();
      formData.append('file-to-upload', uploadedFile);
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/upload`;
      this.status.fileUploading = true;
      this.$http
        .post(url, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        .then((res) => {
          this.status.fileUploading = false;
          if (res.data.success) {
            this.tempProduct.imageUrl = res.data.imageUrl;
            this.$refs.fileInput.value = '';
            this.emitter.emit('push-message', {
              style: 'success',
              title: '圖片上傳結果',
              content: res.data.message,
            });
          } else {
            this.$refs.fileInput.value = '';
            this.emitter.emit('push-message', {
              style: 'danger',
              title: '圖片上傳結果',
              content: res.data.message,
            });
          }
        })
        .catch((err) => {
          this.status.fileUploading = false;
          this.$httpMessageState(err.response, '圖片失敗');
        });
    },
    updateProduct() {
      let url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/product`;
      let httpApi = 'post';
      let status = '新增產品';
      if (!this.isNew) {
        url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/product/${this.tempProduct.id}`;
        httpApi = 'put';
        status = '更新產品';
      }
      this.$http[httpApi](url, { data: this.tempProduct })
        .then((res) => {
          this.adminProductModal.hide();
          this.$httpMessageState(res, status);
          this.$emit('get-products');
        })
        .catch((err) => {
          this.$httpMessageState(err.response, status);
        });
    },
    openModal() {
      this.adminProductModal.show();
    },
    closeModal() {
      this.adminProductModal.hide();
    },
  },
  watch: {
    product() {
      this.tempProduct = JSON.parse(JSON.stringify(this.product));
    },
  },
  mounted() {
    this.adminProductModal = new Modal(this.$refs.modal, {
      keyboard: false,
      backdrop: 'static',
    });
  },
};
</script>
