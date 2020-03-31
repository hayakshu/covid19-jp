import React from 'react';
import { CenteredFlexContainer } from '../layout';
import { withTranslation } from 'react-i18next';

const Error = ({ t }) => {
  return (
    <CenteredFlexContainer className="flex-column vh-100">
      <h1 className="display-4">{t('pages.error.header')}</h1>
      <p className="lead">{t('pages.error.paragraph')}</p>
    </CenteredFlexContainer>
  );
};

export default withTranslation()(Error);
