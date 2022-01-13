export function embaralhar(elemento: any[]):any {
    return elemento
        .map(valor => ({valor, aleatorio: Math.random() }))
        .sort((obj1,obj2)=>obj1.aleatorio - obj2.aleatorio)
        .map(obj1 => obj1.valor)
}