<script lang="ts">
import type IReceita from "@/interfaces/IReceita";
import BotaoPrincipal from "./BotaoPrincipal.vue";
import { obterReceitas } from "@/http";
import CardReceita from "./CardReceita.vue";
import type { PropType } from "vue";

export default {
  props: {
    seusIngredientes: { type: Array as PropType<string[]>, required: true },
  },
  data() {
    return {
      lReceitasEncontradas: [] as IReceita[],
    };
  },
  async created() {
    const lReceitas = await obterReceitas();
    this.lReceitasEncontradas = lReceitas.filter((lReceita) =>
      lReceita.ingredientes.every((lIngrediente) =>
        this.seusIngredientes.includes(lIngrediente)
      )
    );
  },
  components: { BotaoPrincipal, CardReceita },
  emits: ["editarLista"],
};
</script>

<template>
  <section class="mostrar-receitas">
    <h1 class="cabecalho titulo-receitas">Receitas</h1>
    <p class="paragrafo-lg resultados">
      Resultados encontrados: {{ lReceitasEncontradas.length }}
    </p>
    <p class="paragrafo-lg instrucoes" v-if="lReceitasEncontradas.length">
      Veja as opções de receitas que encontramos com os ingredientes que você
      tem por aí!
    </p>
    <ul class="receitas" v-if="lReceitasEncontradas.length">
      <li v-for="lReceita in lReceitasEncontradas" :key="lReceita.nome">
        <CardReceita :receita="lReceita" />
      </li>
    </ul>
    <p class="paragrafo-lg instrucoes" v-if="!lReceitasEncontradas.length">
      Ops, não encontramos resultados para sua combinação. Vamos tentar de novo?
    </p>
    <img
      class="sem-receitas"
      src="../assets/imagens/sem-receitas.png"
      alt="Sem receitas"
      v-if="!lReceitasEncontradas.length"
    />
    <BotaoPrincipal texto="Editar lista" @click="$emit('editarLista')" />
  </section>
</template>

<style lang="css" scoped>
.mostrar-receitas {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.titulo-receitas {
  color: var(--verde-medio, #3d6d4a);
  display: block;
  margin-bottom: 1.5rem;
}

.resultados {
  color: var(--verde-medio, #3d6d4a);
}

.instrucoes {
  margin-bottom: 2rem;
}

.receitas {
  margin-bottom: 3rem;
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.sem-receitas {
  margin-bottom: 3rem;
}
</style>
