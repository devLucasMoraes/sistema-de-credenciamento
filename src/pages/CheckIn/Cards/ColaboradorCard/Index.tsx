import IColaborador from "../../../../interfaces/IColaborador"
import './ColaboradorCard.css'

interface ColaboradorCardProps {
    colaborador: IColaborador
}

export default function ColaboradorCard({ colaborador }: ColaboradorCardProps) {
    return (
        <div className="card">
            <h4>{colaborador.nome}</h4>
            <p>{colaborador.cargo}</p>
        </div>
    )
}