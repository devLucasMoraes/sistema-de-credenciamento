import Card from '../../components/Card/Index'
import './CheckIn.css'

const funcionarios = [
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

export default function CheckIn() {
    return (
        <section className='time' >
            <div className='funcionarios'>
                {funcionarios.map(funcionario => (
                    <Card key={funcionario.id} funcionario={funcionario} />
                ))}
            </div>
        </section>
    )
}