<template>
  <nav aria-label="Page navigation example"
    class="mt-3 d-flex justify-content-center">
    <ul class="pagination">
      <li class="page-item"
        :class="{ disabled: !pages.has_pre }">
        <a class="page-link" aria-label="Previous" href="#"
          @click.prevent="$emit('get-product', pages.current_page - 1)">
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <li class="page-item"
        :class="{ active: page === pages.current_page }"
        v-for="page in pages.total_pages"
        :key="page + '123'">
        <a class="page-link" href="#"
          @click.prevent="$emit('get-product', page)">
          {{ page }}</a>
      </li>
      <li class="page-item" :class="{ disabled: !pages.has_next }">
        <a class="page-link" href="#" aria-label="Next"
          @click.prevent="$emit('get-product', pages.current_page + 1)">
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: ['pages'],
};
</script>

<style lang="scss" scoped>
@import "bootstrap/scss/bootstrap";
/*自訂樣式*/
.text-pink{ color: #ffabc2;}
.text-pinkdeep{ color: #ff789c;}
.bg-pink { background-color: #ffabc2;}
.btn-pink {
  color: #212529;
  background-color: #ffdee7;
  border-color: #ffdee7;
}
.page-item.active .page-link {
  color: #fff;
  background-color: #ffabc2;
  border-color: #ffabc2;
}
.page-link {
  color: #ffabc2;
}
</style>
