import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('../views/FrontView.vue'),
    children: [
      {
        path: '',
        component: () => import('../views/HomeView.vue'),
      },
      {
        path: 'products', // 產品列表
        component: () => import('../views/ProductsView.vue'),
      },
      {
        path: 'product/:id', // 單一產品
        component: () => import('../views/ProductView.vue'),
      },
      {
        path: 'cart', // 購物車
        component: () => import('../views/CartView.vue'),
      },
    ],
  },
  {
    path: '/login',
    component: () => import('../views/LoginView.vue'),
  },
  // 後台
  {
    path: '/admin', // 後台首頁
    component: () => import('../views/DashboardView.vue'),
    children: [
      {
        path: 'products', // admin/products 後台產品列表
        component: () => import('../views/AdminProducts.vue'),
      },
      {
        path: 'orders', // admin/products 後台訂單管理
        component: () => import('../views/AdminOrders.vue'),
      },
      {
        path: 'coupon', // admin/coupon 後台優惠劵
        component: () => import('../views/AdminCoupon.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkActiveClass: 'active', // bootstrap 樣式
});

export default router;
