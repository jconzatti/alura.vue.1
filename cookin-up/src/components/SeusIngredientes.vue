<script lang="ts">
import type { PropType } from "vue";
import Tag from "./Tag.vue";

export default {
  components: { Tag },
  props: {
    ingredientes: { type: Array as PropType<string[]>, required: true },
  },
};
</script>

<template>
  <section>
    <span class="subtitulo-lg sua-lista-texto"> Sua lista: </span>

    <ul v-if="ingredientes.length > 0" class="ingredientes-sua-lista">
      <li v-for="lIngrediente in ingredientes" :key="lIngrediente">
        <Tag :texto="lIngrediente" :ativa="true" />
      </li>
    </ul>

    <p v-else class="paragafo lista-vazia">
      <img
        src="../assets/imagens/icones/lista-vazia.svg"
        alt="Icone de pesquisa"
      />
      Sua lista está vazia, selecione ingredientes para iniciar.
    </p>
  </section>
</template>

<style lang="css" scoped>
.sua-lista-texto {
  color: var(--coral, #f0633c);
  display: block;
  text-align: center;
  margin-bottom: 1.5rem;
}

.ingredientes-sua-lista {
  display: flex;
  justify-content: center;
  gap: 1rem 1.5rem;
  flex-wrap: wrap;
}

.lista-vazia {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.25rem;

  color: var(--coral, #f0633c);
  text-align: center;
}
</style>
