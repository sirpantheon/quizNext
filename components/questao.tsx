import questaoModel from "../model/questao"
import styles from "../styles/Questao.module.css"

interface questaoProps{
    valor: questaoModel
}

export default function questao(props: questaoProps){
    const questao = props.valor


    return (
        <div className={styles.questao}>
            <h1>
                questoes
            </h1>
        </div>
    )
}