import React from 'react';

import { greetings, socialLinks } from '../portfolio';
import {
  UncontrolledCollapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  Button,
} from 'reactstrap';

import isMobile from 'hooks/isMobile';
import { useTranslations } from 'contexts/translation.context';

import './Navigation.css';

const Navigation = () => {
  const { t, lang, setLanguage } = useTranslations();

  const changeLangHandler = () => {
    lang === 'ru' ? setLanguage('en') : setLanguage('ru');
  };

  return (
    <>
      <header className='header-global'>
        <Navbar
          className='navbar-main navbar-transparent navbar-dark'
          expand='lg'
          id='navbar-main'
        >
          <Container>
            <NavbarBrand className='mr-lg-5'>
              <h2 id='nav-title' style={{ color: '#FFAA00' }}>
                {greetings.name}
              </h2>
            </NavbarBrand>
            <UncontrolledCollapse toggler='#navbar_global' navbar>
              <div className='navbar-collapse-header'>
                <Row>
                  <Col className='collapse-brand' xs='6'>
                    <a to='/'>
                      <h3 className='text-black' id='nav-title'>
                        {greetings.name}
                      </h3>
                    </a>
                  </Col>
                  <Col className='collapse-close' xs='6'>
                    <button className='navbar-toggler' id='navbar_global'>
                      <span />
                      <span />
                    </button>
                  </Col>
                </Row>
              </div>
              <Nav className='align-items-lg-center ml-lg-auto' navbar>
                <NavItem>
                  <NavLink
                    className='nav-link-icon'
                    href={socialLinks.facebook}
                    target='_blank'
                  >
                    <i className='fa fa-facebook-square' />
                    <span className='nav-link-inner--text d-lg-none ml-2'>
                      Facebook
                    </span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className='nav-link-icon'
                    href={socialLinks.instagram}
                    target='_blank'
                  >
                    <i className='fa fa-instagram' />
                    <span className='nav-link-inner--text d-lg-none ml-2'>
                      Instagram
                    </span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className='nav-link-icon'
                    href='mailto:zadayan.vazgen@gmail.com'
                    target='_blank'
                  >
                    <i className='fa fa-envelope' />
                    <span className='nav-link-inner--text d-lg-none ml-2'>
                      Gmail
                    </span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className='nav-link-icon'
                    href={socialLinks.github}
                    target='_blank'
                  >
                    <i className='fa fa-github' />
                    <span className='nav-link-inner--text d-lg-none ml-2'>
                      Github
                    </span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className='nav-link-icon'
                    href={socialLinks.linkedin}
                    target='_blank'
                  >
                    <i className='fa fa-linkedin' />
                    <span className='nav-link-inner--text d-lg-none ml-2'>
                      Linkedin
                    </span>
                  </NavLink>
                </NavItem>
                <NavItem style={{ marginLeft: '30px' }}>
                  <Button
                    style={{ background: '#FFAA00', border: 'none' }}
                    size='sm'
                    onClick={changeLangHandler}
                  >
                    {lang === 'ru' ? 'EN' : 'RU'}
                  </Button>
                </NavItem>
              </Nav>
            </UncontrolledCollapse>
            {isMobile() && (
              <Button
                style={{ background: '#FFAA00', border: 'none' }}
                size='sm'
                onClick={changeLangHandler}
              >
                {lang === 'ru' ? 'EN' : 'RU'}
              </Button>
            )}
          </Container>
        </Navbar>
      </header>
    </>
  );
};

export default Navigation;
