import React from "react"

interface BuscadorProps {
    busca: string,
    setBusca: React.Dispatch<React.SetStateAction<string>>
}


export default function Buscador({ busca, setBusca }: BuscadorProps) {
    return (
        <div>
            <input type="text" placeholder="Buscar" value={busca} onChange={e => setBusca(e.target.value)} />
        </div>
    )
}