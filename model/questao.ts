import { embaralhar } from "../functions/arrays"
import RespostaModel from "./resposta"

export default class QuestaoModel{
    #id:number
    #enunciado:string
    #respostas: RespostaModel[]
    #acertou: boolean

    constructor(id:number, ununciado:string, respostas:RespostaModel[], acertou = false){
        this.#id = id;
        this.#enunciado = ununciado;
        this.#respostas = respostas;
        this.#acertou = acertou;
    }

    get id(){
        return this.#id;
    }

    get enunciado(){
        return this.#enunciado;
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

    get naoRespondida(){
        return !this.respondida
    }



    embalaralharRespostas():QuestaoModel{
        let respostasEmbaralhadas = embaralhar(this.#respostas)
        return new QuestaoModel(this.#id, this.#enunciado, respostasEmbaralhadas, this.#acertou)
    }

    responderCom(indice: number): QuestaoModel{
        const acertou = this.#respostas[indice]?.certa
        const respostas = this.#respostas.map((resp,i) => {
            const respostaSelecionada = indice === i;
            const deveRevelar = respostaSelecionada || resp.certa
            return deveRevelar ? resp.revelar() : resp
        })
        return new QuestaoModel(this.#id,this.#enunciado,respostas, acertou)
    }


    static criarUsandoObjeto(obj : QuestaoModel ): QuestaoModel{

        const respostas = obj.respostas.map(resp => RespostaModel.criarUsandoObjeto(resp))

        return new QuestaoModel(obj.id ,obj.enunciado , respostas , obj.acertou)
    }

    toObject(){
        return{
            id:this.#id,
            enunciado:this.#enunciado,
            respostas: this.#respostas.map(resp =>resp.toObject()) ,
            acertou: this.#acertou,
            respondida: this.respondida
        }
    }
}