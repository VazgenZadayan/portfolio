import React from 'react';
import { Link } from 'react-router-dom';
import { Fade } from 'react-reveal';
import { Card, CardBody, Badge } from 'reactstrap';

import { useTranslations } from 'contexts/translation.context';

const EducationCard = ({ education }) => {
  const { t } = useTranslations();

  return (
    <Fade right duration={1000} distance='40px'>
      <a href={education.link} target='_blank'>
        <Card
          className='card-lift--hover shadow mt-4'
          style={{ cursor: 'pointer', background: 'rgb(30 32 38)' }}
        >
          <CardBody>
            <div className='d-flex px-3'>
              <div className='pl-4'>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'start',
                  }}
                >
                  <img
                    src={education.logo}
                    alt={education.schoolName}
                    style={{
                      width: '30px',
                      height: '30px',
                      margin: '0 5px 8px 0',
                    }}
                  />
                  <h5 className='text-white'>{t(`${education.schoolName}`)}</h5>
                </div>
                <h6 className='text-light'>{t(`${education.subHeader}`)}</h6>
                <Badge style={{ background: '#FFAA00' }} className='mr-1'>
                  {education.duration}
                </Badge>
                <ul>
                  {education.descBullets
                    ? education.descBullets.map(desc => {
                        return (
                          <li key={desc} className='text-light'>
                            {t(`${desc}`)}
                          </li>
                        );
                      })
                    : null}
                </ul>
              </div>
            </div>
          </CardBody>
        </Card>
      </a>
    </Fade>
  );
};

export default EducationCard;
