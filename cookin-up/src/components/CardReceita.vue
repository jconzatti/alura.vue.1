<script lang="ts">
import type IReceita from "@/interfaces/IReceita";
import type { PropType } from "vue";

export default {
  props: {
    receita: { type: Object as PropType<IReceita>, required: true },
  },
};
</script>

<template>
  <article class="receita">
    <img
      :src="`/imagens/receitas/${receita.imagem}`"
      :alt="`${receita.nome}`"
      class="receita__imagem"
    />
    <h2 class="paragrafo-lg receita__nome">{{ receita.nome }}</h2>
  </article>
</template>

<style scoped lang="css">
.receita {
  width: 19.5rem;
  padding: 0;
  border-radius: 1rem;
  background: var(--branco, #fff);
  box-shadow: 4px 4px 10px 0px rgba(68, 68, 68, 0.05);
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}

.receita__imagem {
  border-radius: 1rem 1rem 0 0;
  width: 100%;
}

.receita__nome {
  text-align: center;
  color: var(--cinza, #3d6d4a);
  font-weight: 600;
  font-size: 1rem;
  margin-bottom: 2rem;
}
</style>
