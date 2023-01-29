import React from 'react';
import { Fade } from 'react-reveal';
import { Badge, Card, CardBody, CardHeader, CardTitle, Col } from 'reactstrap';

import { useTranslations } from 'contexts/translation.context';

function ExperienceCard(props) {
  let { data } = props;
  const { t } = useTranslations();

  return (
    <Col lg="6">
      <a href={data.link} target={'_blank'}>
        <Fade left duration={1000} distance="40px">
          <Card
            style={{ flex: 1 }}
            className="shadow-lg--hover border-0 text-center rounded"
          >
            <CardHeader style={{ background: 'rgb(21, 21, 22)' }}>
              <h5 className="text-white">{data.company}</h5>
            </CardHeader>
            <CardBody className="py-5" style={{ background: 'rgb(30 32 38)' }}>
              <img
                className=" bg-white mb-3 img-center img-fluid shadow-lg "
                src={data.companylogo}
                style={{
                  width: '100px',
                  height: '100px',
                  borderRadius: '10px',
                }}
                alt=""
              />
              <CardTitle tag="h5" className="text-white">
                {t(`${data.role}`)}
              </CardTitle>
              <Badge style={{ background: '#FFAA00' }} className="mr-1">
                {data.date}
              </Badge>
              <div className="description my-3 text-left">
                <ul>
                  {data.descBullets
                    ? data.descBullets.map((desc) => {
                        return (
                          <li key={desc} className="text-light">
                            {t(`${desc}`)}
                          </li>
                        );
                      })
                    : null}
                </ul>
              </div>
            </CardBody>
          </Card>
        </Fade>
      </a>
    </Col>
  );
}

export default ExperienceCard;
