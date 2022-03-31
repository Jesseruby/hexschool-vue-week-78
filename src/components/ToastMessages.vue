<template>
  <div class="toast-container position-fixed pe-3 top-0 end-0"
    style="z-index: 1500">
    <div class="toast show" role="alert"
      v-for="(msg, key) in messages"
      :key="key"
      :class="`toast${key}`">
      <div class="toast-header">
        <span class="p-2 rounded me-2 d-inline-block"
          :class="`bg-${msg.style}`">
        </span>
        <strong class="me-auto">
          {{ msg.title }}
        </strong>
        <button type="button"
          class="btn-close"
          @click="clearToast(key)"
          aria-label="Close">
        </button>
      </div><!-- .toast-header -->
      <div class="toast-body" v-if="msg.content">
        {{ msg.content }}
      </div><!-- .toast-body -->
    </div><!-- .toast -->
  </div><!-- .toast-container -->
</template>

<script>
export default {
  data() {
    return {
      messages: [],
    };
  },
  inject: ['emitter'],
  methods: {
    toastShow() {
      setTimeout(() => {
        this.messages.shift();
      }, 6000);
    },
    clearToast(index) {
      this.messages.splice(index, 1);
    },
  },
  mounted() {
    this.emitter.on('push-message', (message) => {
      const { style = 'success', title, content } = message;
      this.messages.push({ style, title, content });
      this.toastShow();
    });
  },
};
</script>
