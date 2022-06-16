import React from 'react';
import { Link, Nav, NavOptions } from './Navbar.style';

// import { Container } from './styles';

const Navbar: React.FC = () => {
    return (
        <Nav>
            <NavOptions>
                <Link href='#qualifications'>Qualificações</Link>
                <Link href='#servicos'>Serviços</Link>
                <Link href='#projetos'>Projetos</Link>
                <Link href='#contato'>Contatos</Link>
            </NavOptions>

        </Nav>
    );
}

export default Navbar;