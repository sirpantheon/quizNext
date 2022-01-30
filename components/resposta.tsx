import RespostaModel from "../model/resposta"
import styles from "../styles/Resposta.module.css"

interface RespostaProps{
    valor: RespostaModel
    indice: number
    letra: string
    corFundoLetra: string
    onResponse: ( indice:number ) => void
}

export default function Resposta(props : RespostaProps){


    const resposta = props.valor
    return(
        <div className={styles.resposta} onClick={() => props.onResponse(props.indice)} >

            <div className={styles.conteudoResposta}>

                {!resposta.revelada ? (
                    <div className={styles.frente}>

                        <div className={styles.letra} style={ {backgroundColor:props.corFundoLetra} }>
                            {props.letra}
                        </div>

                        <div className={styles.valor}>
                            {resposta.valor}
                        </div>

                    </div>

                ):(
                    <div className={styles.verso}>
                        {resposta.certa?(
                            <div className={styles.certa}>
                                <div>A Resposta Certa E...</div>
                                <div className={styles.valor}>{resposta.valor}</div>
                            </div>
                        ):(
                            <div className={styles.errada}>
                                <div>A Resposta Esta Errada...</div>
                                <div className={styles.valor}>{resposta.valor}</div>
                            </div>
                        )}
                        
                    </div>

                )}

                
            </div>
        </div>
    )
}