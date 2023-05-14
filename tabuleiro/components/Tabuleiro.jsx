import Linha from "./Linha";

export default function Tabuleiro(){
    return(
        <div style={{display:"flex"}}>
            <Linha/>
            <Linha preta/>
            <Linha/>
            <Linha preta/>
            <Linha/>
            <Linha preta/>
            <Linha/>
            <Linha preta/>
        </div>
    )
}