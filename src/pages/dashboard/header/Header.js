import React from 'react';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
const Header = ({ t, lastUpdated }) => (
  <>
    <h4 className="text-white">{t('home.header')}</h4>
    <small>
      {t('lastUpdated')}: {lastUpdated}
    </small>
  </>
);

const mapStateToProps = ({ covid19 }) => ({
  lastUpdated: covid19.lastUpdated,
});
export default connect(mapStateToProps)(withTranslation()(Header));
