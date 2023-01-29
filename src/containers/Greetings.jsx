import React from 'react';
import { Fade } from 'react-reveal';
import { Button, Container, Row, Col } from 'reactstrap';

import { greetings } from '../portfolio';
import code from '../assets/lottie/coding.json';

import Divider from 'components/Divider';
import SocialLinks from 'components/SocialLinks';
import GreetingLottie from '../components/DisplayLottie';

import { useTranslations } from 'contexts/translation.context';

const Greetings = () => {
  const { t } = useTranslations();
  return (
    <Fade top duration={1000} distance="40px">
      <main ref="main">
        <div className="position-relative">
          <section className="section section-lg section-shaped pb-200">
            <div
              className="shape shape-style-1"
              style={{ background: '#17181c' }}
            >
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
            <Container className="py-lg-md d-flex top-6">
              <div className="col px-0">
                <Row>
                  <Col lg="6">
                    <h1 className="display-3 text-white">{t('greeting')}</h1>
                    <p className="lead text-light">
                      {t('greeting_descr')}{' '}
                      <a href="https://www.instagram.com/vazgen.zadayan/">
                        <span className="btn-inner--icon ml-2">
                          <i class="fa fa-link" style={{ color: '#ffffff'}}/>
                        </span>
                      </a>
                    </p>
                    <SocialLinks />
                    <div className="btn-wrapper my-4">
                      <Button
                        className="btn-white btn-icon mb-3 mb-sm-0 ml-1"
                        href={greetings.resumeLink}
                        download="Vazgen_Zadayan_CV"
                      >
                        <span className="btn-inner--icon mr-1">
                          <i className="fa fa-file" />
                        </span>
                        <span className="btn-inner--text">
                          {t('see_resume')}
                        </span>
                      </Button>
                    </div>
                  </Col>
                  <Col lg="6" style={{ opacity: '80%' }}>
                    <GreetingLottie animationData={code} />
                  </Col>
                </Row>
              </div>
            </Container>
            <Divider />
          </section>
        </div>
      </main>
    </Fade>
  );
};

export default Greetings;
