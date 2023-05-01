import React from 'react'
import { extratoLista } from '../../info'
import Itens from '../Itens'
import { Box, Button } from '../UI'

export default function Extrato() {
    return (
        <Box>
            {extratoLista.updates.map(({ id, type, value, date, from }) => {
                return (
                    <Itens key={id} type={type} value={value} date={date} from={from} />
                )
            })}
            <Button>Ver mais</Button>
        </Box>
    )
}
