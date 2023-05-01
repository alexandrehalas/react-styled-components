import React from 'react'
import { extratoLista } from '../../info'
import { Box, Button } from '../UI'

export default function Extrato() {
    return (
        <Box>
            {extratoLista.updates.map(({ id, type, value, date, from }) => {
                return (
                    <div key={id}>
                        <div>{type}</div>
                        <div>{from}</div>
                    </div>
                )
            })}
            <Button>Ver mais</Button>
        </Box>
    )
}
