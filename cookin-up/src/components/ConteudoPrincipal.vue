<script setup lang="ts">
import { ref } from "vue";
import SelecionarIngredientes from "./SelecionarIngredientes.vue";
import SeusIngredientes from "./SeusIngredientes.vue";

const lIngredientes = ref<string[]>([]);

function adicionarIngrediente(pIngrediente: string): void {
  lIngredientes.value.push(pIngrediente);
}

function removerIngrediente(pIngrediente: string): void {
  lIngredientes.value = lIngredientes.value.filter(
    (lIngrediente) => lIngrediente !== pIngrediente
  );
}
</script>

<template>
  <main class="conteudo-principal">
    <SeusIngredientes :ingredientes="lIngredientes" />
    <SelecionarIngredientes
      @adicionar-ingrediente="adicionarIngrediente"
      @remover-ingrediente="removerIngrediente"
    />
  </main>
</template>

<style lang="css" scoped>
.conteudo-principal {
  padding: 6.5rem 7.5rem;
  border-radius: 3.75rem 3.75rem 0rem 0rem;
  background: var(--creme, #fffaf3);
  color: var(--cinza, #444);

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem;
}

@media only screen and (max-width: 1300px) {
  .conteudo-principal {
    padding: 5rem 3.75rem;
    gap: 3.5rem;
  }
}

@media only screen and (max-width: 767px) {
  .conteudo-principal {
    padding: 4rem 1.5rem;
    gap: 4rem;
  }
}
</style>
