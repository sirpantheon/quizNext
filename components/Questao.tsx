import QuestaoModel from "../model/questao"
import styles from "../styles/Questao.module.css"
import Enunciado from "./Enunciado"
import Resposta from "./Resposta"
import Temporizador from "./Temporizador"

const letras = [
    {valor:'A', cor:'#F2C866'},
    {valor:'B', cor:'#F266BA'},
    {valor:'B', cor:'#bce596'},
    {valor:'D', cor:'#b596e5'},
]

interface QuestaoProps{
    valor: QuestaoModel
    tempoPraResposta?:number
    onResponse: (indice: number) => void
    tempoEsgotado:() => void
}

export default function questao(props: QuestaoProps){
    const questao = props.valor

    function renderizarResposta(){
        return questao.respostas.map((resposta,i) =>{
            return (
                <Resposta 
                    valor={resposta}
                    indice={i}
                    letra={letras[i].valor}
                    corFundoLetra={letras[i].cor}
                    key={i}
                    onResponse={ props.onResponse}
                />
            )
        })
    }

    return (
        <div className={styles.questao}>
            
            <Enunciado texto={questao.enunciado}/>
            <Temporizador duracao={props.tempoPraResposta ?? 10} tempoEsgotado={props.tempoEsgotado} />
            {renderizarResposta()}

        </div>
    )
}