import QuestaoModel from "../model/questao"
import styles from "../styles/Questao.module.css"
import Enunciado from "./enunciado"
import Resposta from "./resposta"

interface QuestaoProps{
    valor: QuestaoModel
}

export default function questao(props: QuestaoProps){
    const questao = props.valor

    function renderizarResposta(){
        return questao.respostas.map((resposta,i) =>{
            return (
                <Resposta 
                    valor={resposta}
                    indice={i}
                    letra="A"
                    corFundoLetra="#F2C866"
                    key={i}
                />
            )
        })
    }

    return (
        <div className={styles.questao}>
            
            <Enunciado texto={questao.enunciado}/>
            {renderizarResposta()}

        </div>
    )
}