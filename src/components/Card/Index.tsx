import IFuncionaro from "../../interfaces/IFuncionario"
import './Card.css'

interface CardProps {
    funcionario: IFuncionaro
}

export default function Card({ funcionario }: CardProps) {
    return (
        <div className="card">
            <h4>{funcionario.nome}</h4>
            <p>{funcionario.cargo}</p>
        </div>
    )
}