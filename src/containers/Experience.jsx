import React from 'react';
import { Fade } from 'react-reveal';
import { Container, Row } from 'reactstrap';

import { experience } from '../portfolio';

import Divider from 'components/Divider';
import ExperienceCard from '../components/ExperienceCard';

import { useTranslations } from 'contexts/translation.context';

const Experience = () => {
  const { t } = useTranslations();
  return (
    <section className='section section-lg'>
      <Container>
        <Fade left duration={1000} distance='40px'>
          <div className='d-flex p-4'>
            <div>
              <div className='icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-info'>
                <i
                  className='ni ni-briefcase-24'
                  style={{ color: '#FFAA00' }}
                />
              </div>
            </div>
            <div className='pl-4'>
              <h4 className='display-3 text-white'>{t('experience')}</h4>
            </div>
          </div>
          <Row className='row-grid align-items-center'>
            {experience.map((data, i) => {
              return <ExperienceCard key={i} data={data} />;
            })}
          </Row>
        </Fade>
      </Container>
      <Divider left />
    </section>
  );
};

export default Experience;
