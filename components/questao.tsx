import questaoModel from "../model/questao"
import styles from "../styles/Questao.module.css"
import Enunciado from "./enunciado"
import Resposta from "./resposta"

interface questaoProps{
    valor: questaoModel
}

export default function questao(props: questaoProps){
    const questao = props.valor

    function renderizarResposta(){
        return questao.respostas.map((resposta,i) =>{
            return <Resposta 
            valor={resposta}
            indice={i}
            letra="A"
            corLetra="#F2C866"
            key={i}
            />
        })
    }

    return (
        <div className={styles.questao}>
            
            <Enunciado texto={questao.enunciado}/>
            {renderizarResposta()}

        </div>
    )
}