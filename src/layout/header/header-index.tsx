import { NavLink, useNavigate } from "react-router-dom";
import { HeaderContainer, HeaderContent } from "./header-styles";

export function HeaderApp() {
    const navigate = useNavigate()

    const handleLogoToHome = () => {
        navigate('/')
    }

    return (
        <HeaderContainer>
            <HeaderContent>
                <img src="/logo.png" onClick={handleLogoToHome} />

                <div className="tabs">
                    <NavLink to='/eventos' >
                        Eventos
                    </NavLink>

                    <NavLink to='/fotos' >
                        Fotos
                    </NavLink >

                    <NavLink to='/sobre'>
                        Sobre nós
                    </NavLink>
                </div>

                <div className="buttons">
                    <NavLink to='/sign-up'>
                        Entrar
                    </NavLink>

                    <button>
                        Cadastrar
                    </button>
                </div>
            </HeaderContent>
        </HeaderContainer>
    )
}