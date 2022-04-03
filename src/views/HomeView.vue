<template>
  <div class="bg d-flex justify-content-center align-items-center align-self-center bg-dark">
    <main class="text-center text-white">
      <h1>波波小舖</h1>
      <p class="lead">
        美味又好吃
      </p>
      <p class="lead">
        <router-link class="btn btn-lg fw-bold bg-warning text-dark"
          to="/products">
          查看更多產品列
        </router-link>
      </p>
    </main>
  </div>
  <footer class="text-center mt-3">
    <p>Vue-he-Week-8 作業用 &copy; 2022 Jesse.</p>
  </footer>
</template>

<style lang="scss" scoped>
@import "bootstrap/scss/bootstrap";
.bg {
  min-height: 700px;
  height: 100%;
  background-image: url('../assets/dogcookie.jpg');
  background-repeat:no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
}
</style>
