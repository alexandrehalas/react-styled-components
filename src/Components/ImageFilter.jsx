import React from "react"
import alimentacao from '../assets/images/alimentacao.svg'
import outros from '../assets/images/outros.svg'
import saude from '../assets/images/saude.svg'
import transporte from '../assets/images/transporte.svg'
import utilidades from '../assets/images/utilidades.svg'
import { Icone } from "./UI"

export default (type) => {
    const Images = {
        Restaurante: <Icone src={alimentacao} alt="Restaurante"></Icone>,
        Outros: <Icone src={outros} alt="Outros"></Icone>,
        Saude: <Icone src={saude} alt="Saúde"></Icone>,
        Transporte: <Icone src={transporte} alt="Transporte"></Icone>,
        default: <Icone src={utilidades} alt="utilidades"></Icone>
    }
    return Images[type] || Images.default;
}