import React from "react"
import TextoCentral from "../Componentes/TextoCentral"
import PassoStack from "../Componentes/PassoStack"

export default props => {    
    return (
        <PassoStack avancar="TelaB">
            <TextoCentral corFundo='#e53935'>
                Tela A
            </TextoCentral>
        </PassoStack>

    )
}