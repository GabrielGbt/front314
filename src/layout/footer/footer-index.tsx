import { NavLink } from "react-router-dom";
import { FooterContainer } from "./footer-styles";
import Divider from '@mui/material/Divider';
import { Instagram } from "@mui/icons-material";

export function Footer() {


    return (
        <FooterContainer>
            <div className="content">


                <div className="title">
                    <img src="./logo.png" />

                    <button>
                        Voltar para o topo
                    </button>
                </div>


                <div className="mid">
                    <div className="columns">
                        <h3>
                            O QUE ESTÁ ROLANDO NA 314?
                        </h3>

                        <NavLink to={"/evento"}>
                            Festival 314
                        </NavLink>

                        <NavLink to={"/evento"}>
                            Love com você
                        </NavLink>

                        <NavLink to={"/evento"}>
                            Circus
                        </NavLink>

                        <NavLink to={"/evento"}>
                            Jorge e Matheus
                        </NavLink>
                    </div>

                    <div className="columns">
                        <h3>
                            SOBRE NÓS
                        </h3>

                        <NavLink to={"/sobre"}>
                            Quem somos?
                        </NavLink>

                        <NavLink to={"/sobre"}>
                            Trabalhe conosco
                        </NavLink>

                        <NavLink to={"/sobre"}>
                            Políticas de privacidade
                        </NavLink>
                    </div>

                    <div className="columns">
                        <h3>
                            NOSSOS PRINCIPAIS
                        </h3>

                        <NavLink to={"/evento"}>
                            Love com você
                        </NavLink>

                        <NavLink to={"/evento"}>
                            Recepção 314
                        </NavLink>

                        <NavLink to={"/evento"}>
                            Circus
                        </NavLink>
                    </div>

                    <div className="columns">
                        <h3>
                            SUPORTE
                        </h3>

                        <NavLink to={"/sobre"}>
                            Entrar em contato
                        </NavLink>

                        <NavLink to={"/sobre"}>
                            FAQ
                        </NavLink>
                    </div>

                </div>
                
                <Divider color="#bcbdbd" />


                <div className="footer">
                    <p>Todos os direitos reservados &copy; 314graus <br/> 2010 - {new Date().getFullYear()}</p>

                    <p>
                        Instagram

                        <NavLink to="https://instagram.com/314graus" target="_blank" rel="noopener noreferrer">
                            <Instagram fontSize="large" />
                        </NavLink>
                    </p>
                </div>

            </div>
        </FooterContainer>
    )
}