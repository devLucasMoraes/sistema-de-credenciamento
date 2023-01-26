import './Cards.css'
import ColaboradorCard from './ColaboradorCard/Index'


const colaboradores = [
    {
        id: '1',
        nome: 'Alex de Oliveira Santos',
        cargo: 'Coordenador de Enfermagem'
    },
    {
        id: '2',
        nome: 'Alex de Oliveira Santos',
        cargo: 'Coordenador de Enfermagem'
    },
    {
        id: '3',
        nome: 'Alex de Oliveira Santos',
        cargo: 'Coordenador de Enfermagem'
    },
    {
        id: '4',
        nome: 'Alex de Oliveira Santos',
        cargo: 'Coordenador de Enfermagem'
    }
]

export default function Cards() {
    return (
        <div className='colaboradores'>
            {colaboradores.map(funcionario => (
                <ColaboradorCard key={funcionario.id} colaborador={funcionario} />
            ))}
        </div>
    )
}