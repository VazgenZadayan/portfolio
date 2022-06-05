import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import { educationInfo } from '../portfolio';

import Divider from 'components/Divider';
import EducationCard from '../components/EducationCard';

import { useTranslations } from 'contexts/translation.context';

const Education = () => {
  const { t } = useTranslations();

  return (
    <section
      className='section pb-150 my-5'
      style={{ background: '#17181c', height: '100%' }}
    >
      <Container>
        <div className='d-flex px-3'>
          <div>
            <div className='icon icon-lg icon-shape bg-gradient-white rounded-circle text-info'>
              <i className='ni ni-books' style={{ color: '#FFAA00' }} />
            </div>
          </div>
          <div className='pl-4'>
            <h4 className='display-3 text-white'>{t('education')}</h4>
          </div>
        </div>
        <Row className='row-grid align-items-center'>
          {educationInfo.map(info => {
            return (
              <Col className='order-lg-1' lg='6' key={info.subHeader}>
                <EducationCard education={info} />
              </Col>
            );
          })}
        </Row>
      </Container>
      <Divider />
    </section>
  );
};

export default Education;
