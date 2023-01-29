import React, { Fragment } from 'react';

import { Fade } from 'react-reveal';
import { Container, Row, Col, UncontrolledTooltip } from 'reactstrap';

import { skillsSection } from '../portfolio';

import Divider from 'components/Divider';
import computer from '../assets/lottie/computer.json';
import DisplayLottie from '../components/DisplayLottie';

import { useTranslations } from 'contexts/translation.context';

const Skills = () => {
  const { t } = useTranslations();
  return (
    <section className="section pb-10" style={{ background: '#17181c' }}>
      <Fade left duration={1000} distance="40px">
        <Container className="text-center my-3 pb-150 section section-lg">
          <h1 className="h1 text-white">{t('what_i_do')}</h1>
          <p className="lead text-light">{t('subtitle')}</p>
          <Row>
            <Col lg="5">
              <DisplayLottie animationData={computer} />
            </Col>
            <Col lg="7">
              <div className="d-flex justify-content-center mb-3">
                {skillsSection.softwareSkills.map((skill) => {
                  return (
                    <Fragment key={skill.skillName}>
                      <div
                        className="icon icon-lg icon-shape rounded-circle mb-3"
                        id={skill.skillName}
                      >
                        <span
                          className="iconify"
                          data-icon={skill.fontAwesomeClassname}
                          data-inline="false"
                        />
                      </div>
                      <UncontrolledTooltip
                        delay={0}
                        placement="bottom"
                        target={skill.skillName}
                      >
                        {skill.skillName}
                      </UncontrolledTooltip>
                    </Fragment>
                  );
                })}
              </div>
              <div>
                <p className="text-light">⚡{t('develop_highly')}</p>
                <p className="text-light">⚡{t('concept_to_life')}</p>
                <p className="text-light">⚡{t('develop_ui')}</p>
              </div>
            </Col>
          </Row>
        </Container>
      </Fade>
      <Divider left />
    </section>
  );
};

export default Skills;
