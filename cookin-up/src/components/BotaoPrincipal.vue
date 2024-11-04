<script lang="ts">
export default {
  props: {
    texto: { type: String, required: true },
  },
};
</script>

<template>
  <button class="paragrafo-lg botao-principal">{{ texto }}</button>
</template>

<style lang="css" scoped>
.botao-principal {
  color: var(--creme, #fffaf3);
  background: var(--coral, #f0633c);
  font-weight: 700;
  font-size: 1.125rem;
  padding: 1rem 5rem;
  border-radius: 2rem;
  cursor: pointer;
  box-shadow: 4px 4px 15px 0px rgba(255, 115, 76, 0.25);
  transition: 0.2s;
}

.botao-principal:hover {
  background: var(--ocre-hover, #d1451e);
}
</style>
