import { Link, useLocation } from 'react-router-dom'
import './Menu.css'

export default function Menu() {



    const rotas = [
        { label: 'Dashboard', to: '/', selecionado: false },
        { label: 'Check-in', to: '/checkin', selecionado: false },
        { label: 'Inclusão', to: '/inclusao', selecionado: false },
    ]

    const location = useLocation()
    rotas.map(rota => rota.to === location.pathname ? rota.selecionado = true : "")


    return (
        <nav className='menu'>
            <ul className='menu__list'>
                {rotas.map((rota, index) => (
                    <li key={index} className={`menu__link${rota.selecionado ? "--ativo" : ""}`} >
                        <Link to={rota.to}>
                            {rota.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
