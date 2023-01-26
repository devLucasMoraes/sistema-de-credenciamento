import Buscador from './Buscador'
import { useState } from 'react'
import './CheckIn.css'
import Cards from './Cards'



export default function CheckIn() {
    const [busca, setBusca] = useState('')

    return (
        <>
            <section className='checkin' >
                <Buscador busca={busca} setBusca={setBusca} />
                <Cards />
            </section>
        </>
    )
}