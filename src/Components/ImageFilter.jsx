import React from "react"
import alimentacao from '../assets/images/alimentacao.svg'
import outros from '../assets/images/outros.svg'
import saude from '../assets/images/saude.svg'
import transporte from '../assets/images/transporte.svg'
import utilidades from '../assets/images/utilidades.svg'
import { IconeTema } from "./UI"

export default (type) => {
    const Images = {
        Restaurante: <IconeTema src={alimentacao} alt="Restaurante"></IconeTema>,
        Outros: <IconeTema src={outros} alt="Outros"></IconeTema>,
        Saude: <IconeTema src={saude} alt="Saúde"></IconeTema>,
        Transporte: <IconeTema src={transporte} alt="Transporte"></IconeTema>,
        default: <IconeTema src={utilidades} alt="utilidades"></IconeTema>
    }
    return Images[type] || Images.default;
}