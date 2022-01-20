import { embaralhar } from "../functions/arrays"
import respostaModel from "./resposta"

export default class questaoModel{
    #id:number
    #ununciado:string
    #respostas: respostaModel[]
    #acertou: boolean

    constructor(id:number, ununciado:string, respostas:respostaModel[], acertou = false){
        this.#id = id;
        this.#ununciado = ununciado;
        this.#respostas = respostas;
        this.#acertou = acertou;
    }

    get id(){
        return this.#id;
    }

    get enunciado(){
        return this.#ununciado;
    }

    get respostas(){
        return this.#respostas;
    }
    get acertou(){
        return this.#acertou;
    }

    get respondida(){
        for(let respostas of this.#respostas){
            if(respostas.revelada) return true;
        }
        return false;
    }



    embalaralharRespostas():questaoModel{
        let respostasEmbaralhadas = embaralhar(this.#respostas)
        return new questaoModel(this.#id, this.#ununciado, respostasEmbaralhadas, this.#acertou)
    }

    responderCom(indice: number): questaoModel{
        const acertou = this.#respostas[indice]?.certa
        const respostas = this.#respostas.map((resp,i) => {
            const respostaSelecionada = indice === i;
            const deveRevelar = respostaSelecionada || resp.certa
            return deveRevelar ? resp.revelar() : resp
        })
        return new questaoModel(this.#id,this.#ununciado,respostas,acertou)
    }


    toObject(){
        return{
            id:this.#id,
            ununciado:this.#ununciado,
            respostas: this.#respostas.map(resp =>resp.toObject()) ,
            acertou: this.#acertou,
            respondida: this.respondida
        }
    }
}