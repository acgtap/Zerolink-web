<script setup lang="ts">
import { inject, Ref } from 'vue'

const DEV = inject('DEV') as Ref<boolean>
</script>

<template>
  <img
    class="visitor"
    src="https://counter.katomegumi.net/get/@yyjsq"
    onerror="this.style.display='none'"
  />
</template>

<style scoped>
.visitor {
  margin-left: 8px;
}
@media (min-width: 768px) and (max-width: 920px) {
  .visitor {
    display: none;
  }
}
</style>
