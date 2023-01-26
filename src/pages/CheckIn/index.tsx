import Buscador from './Buscador'
import { useState } from 'react'
import './CheckIn.css'
import Cards from './Cards'



export default function CheckIn() {
    const [busca, setBusca] = useState('')

    return (
        <>
            <Buscador busca={busca} setBusca={setBusca} />
            <section className='checkin' >
                <Cards />
            </section>
        </>
    )
}