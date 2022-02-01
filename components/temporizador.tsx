import styles from "../styles/Temporizador.module.css"
import {CountdownCircleTimer} from "react-countdown-circle-timer"


interface TemporizadorProps{
    duracao: number
    tempoEsgotado:() => void
}


export default function Temporizador(props:TemporizadorProps){
    return(
        <div className={styles.temporizador}>

            <CountdownCircleTimer 
                size={120}
                isPlaying
                duration={props.duracao}
                onComplete={props.tempoEsgotado}
                colors
                
                

            />
            

        </div>
    )
}