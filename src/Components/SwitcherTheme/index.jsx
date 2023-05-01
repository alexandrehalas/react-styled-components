import React from 'react'
import ThemeOff from '../../assets/images/themeOff.svg'
import ThemeOn from '../../assets/images/themeOn.svg'
import { Icone } from '../UI'

const claro = <Icone src={ThemeOn} alt="Tema claro" />
const escuro = <Icone src={ThemeOff} alt="Tema escuro" />

export default ({ theme }) => theme ? escuro : claro
