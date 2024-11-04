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
  methods: {
    selecionarIngrediente() {
      this.lSelecionado = !this.lSelecionado;
      if (this.lSelecionado) {
        this.$emit("adicionarIngrediente", this.ingrediente);
      } else {
        this.$emit("removerIngrediente", this.ingrediente);
      }
    },
  },
  emits: ["adicionarIngrediente", "removerIngrediente"],
};
</script>

<template>
  <button
    class="ingrediente"
    @click="selecionarIngrediente()"
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
