<script lang="ts">
import Tag from "./Tag.vue";
export default {
  components: { Tag },
  props: {
    ingrediente: { type: String, required: true },
  },
  data() {
    return {
      lSelecionado: false as boolean,
    };
  },
};
</script>

<template>
  <button
    class="ingrediente"
    @click="lSelecionado = !lSelecionado"
    :aria-pressed="lSelecionado"
  >
    <Tag :texto="ingrediente" :ativa="lSelecionado" />
  </button>
</template>

<style lang="css" scoped>
.ingrediente {
  cursor: pointer;
}
</style>
