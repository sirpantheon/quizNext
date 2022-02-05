
import styles from "../styles/Questionario.module.css";
import QuestaoModel from "../model/questao"
import Questao from "./Questao";
import Botao from "./Botao";

interface QuestionarioProps{
    questao: QuestaoModel
    ultima: boolean
    onResponse: (questao: QuestaoModel) => void
    irPraProximoPasso: () => void
}


export default function Questionario(props: QuestionarioProps){

    function onResponse(indice: number){
        if(props.questao.naoRespondida){
            props.onResponse(props.questao.responderCom(indice))
        }
    }

    return(
        <div className={styles.questionario}>
            {props.questao ? 
                <Questao 
                valor={props.questao}
                onResponse={onResponse}
                tempoPraResposta={15}
                tempoEsgotado={props.irPraProximoPasso}
                />
                : false
            }
            <Botao 
                onClick={props.irPraProximoPasso}
                texto={props.ultima ? 'Finalizar': 'Próximo'}
            />
        </div>
    )
}