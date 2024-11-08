import type ICategoria from "@/interfaces/ICategoria";
import type IReceita from "@/interfaces/IReceita";

export async function obterCategorias(): Promise<ICategoria[]> {
  const lRespostaCategorias = await fetch(
    "https://gist.githubusercontent.com/antonio-evaldo/002ad55e1cf01ef3fc6ee4feb9152964/raw/bf463b47860043da3b3604ca60cffc3ad1ba9865/categorias.json"
  );
  const lCategorias: ICategoria[] = await lRespostaCategorias.json();
  return lCategorias;
}

export async function obterReceitas(): Promise<IReceita[]> {
  const lRespostaReceitas = await fetch(
    "https://gist.githubusercontent.com/antonio-evaldo/002ad55e1cf01ef3fc6ee4feb9152964/raw/bf463b47860043da3b3604ca60cffc3ad1ba9865/receitas.json"
  );
  const lReceitas: IReceita[] = await lRespostaReceitas.json();
  return lReceitas;
}
