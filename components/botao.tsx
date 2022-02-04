import styles from "../styles/Botao.module.css";
import Link from "next/link"

interface BotaoProps{
    texto: string;
    href?:string;
    onClick?:(e:any) => void;
}


export default function botao(props:BotaoProps){

    function renderizarBotao(){
        return(
            <button className={styles.botao} onClick={props.onClick}>
                {props.texto}
            </button>
        )
    }


    return props.href ?(
        <link href={props.href}>
            {renderizarBotao()}
        </link>
    ) : renderizarBotao()
    
}