const nomes = ["Estéfany", "Ana", "Adrieli", "Aime", "Emilli"]
export function aleatorio (lista){
    const posicao = Math.floor(Math.random()* lista.length);
    return lista[posicao];
}
