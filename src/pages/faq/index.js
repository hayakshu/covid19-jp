import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { withTranslation } from 'react-i18next';
import { GoLinkExternal } from 'react-icons/go';

const Faq = ({ t }) => (
  <Container>
    <Row className="px-2 pb-2 pt-4">
      <Col sm={12} className="p-2">
        <h4 className="text-white border-bottom">{t('Faq.common.header')}</h4>
      </Col>
      <Col sm={12} className="p-2">
        <p className="text-white">{t('Faq.common.one.question')}</p>
        <p>{t('Faq.common.one.answer')}</p>
      </Col>
      <Col sm={12} className="p-2">
        <p className="text-white">{t('Faq.common.two.question')}</p>
        <p>{t('Faq.common.two.answer')}</p>
      </Col>
      <Col sm={12} className="p-2">
        <p className="text-white">{t('Faq.common.three.question')}</p>
        <p>{t('Faq.common.three.answer')}</p>
      </Col>
      <Col sm={12} className="p-2">
        <p className="text-white">{t('Faq.common.four.question')}</p>
        <p>{t('Faq.common.four.answer')}</p>
      </Col>
    </Row>
    <Row className="p-2">
      <Col sm={12} className="p-2">
        <h4 className="text-white border-bottom">{t('Faq.info.header')}</h4>
      </Col>
      <Col sm={12} className="p-2">
        <h6>
          <GoLinkExternal />
          <a
            className="text-white pl-3"
            href="https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/0000121431_00086.html"
            target="_blank"
            rel="noreferrer noopener"
          >
            {t('Faq.info.ministry')}
          </a>
        </h6>
      </Col>
      <Col sm={12} className="p-2">
        <h6>
          <GoLinkExternal />
          <a
            className="text-white pl-3"
            href="https://www3.nhk.or.jp/news/special/coronavirus/latest-news/"
            target="_blank"
            rel="noreferrer noopener"
          >
            {t('Faq.info.nhk')}
          </a>
        </h6>
      </Col>
      <Col sm={12} className="p-2">
        <h6>
          <GoLinkExternal />
          <a
            className="pl-3 text-white"
            href="https://www.worldometers.info/coronavirus/"
            target="_blank"
            rel="noreferrer noopener"
          >
            {t('Faq.info.worldometer')}
          </a>
        </h6>
      </Col>
    </Row>
  </Container>
);

export default withTranslation()(Faq);
