import React from 'react';

import { Card, Col, Row, Container } from 'reactstrap';

import SocialLinks from '../components/SocialLinks';

import { useTranslations } from 'contexts/translation.context';

const GithubProfileCard = ({ prof }) => {
  const { t } = useTranslations();
  return (
    <Card
      className="section-lg shadow-lg border-0"
      style={{ background: '#17181c' }}
    >
      <Container className="">
        <div className="p-2">
          <Row className="">
            <Col lg="8">
              <h2 className="text-white">{t('reach_out_with_me')}</h2>
              <h3 className="lead text-light mt-3">{t('discuss')}</h3>
              <h3 className="lead text-light mt-3">{t('my_inbox')}</h3>
              <h2 className="text-white mt-3">{prof.bio}</h2>
              <div className="my-3 icon-shape bg-gradient-white shadow rounded text-dark">
                <i className="ni ni-pin-3 mr-2" style={{ color: '#FFAA00' }} />
                {prof.location}
              </div>
              <SocialLinks />
            </Col>
            <Col lg="4">
              <img
                src={prof.avatar_url}
                style={{ width: '200px', height: '200px' }}
                alt=""
                className="rounded-circle img-center img-fluid shadow shadow-lg--hover mb-4"
              />
            </Col>
          </Row>
        </div>
      </Container>
    </Card>
  );
};

export default GithubProfileCard;
