import React from 'react';
import { CenteredFlexContainer } from '../../components';
import { withTranslation } from 'react-i18next';

const NotFound = ({ t }) => (
  <CenteredFlexContainer className="flex-column px-4 vh-100">
    <h1 className="display-4">{t('notFound.header')}</h1>
    <h6>{t('notFound.subtitle')}</h6>
    <p className="lead">{t('notFound.description')}</p>
  </CenteredFlexContainer>
);
export default withTranslation()(NotFound);
