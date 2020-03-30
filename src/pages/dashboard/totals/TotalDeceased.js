import React from 'react';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import { Card } from '../../../components';

const TotalDeceased = ({ t, total, change }) => {
  const previous = `${t('total.previous')} +${change}`;
  return (
    <Card>
      <h6>{t('total.deceased')}</h6>
      <div className="d-flex flex-wrap align-items-end">
        <p className="h4 m-0 pr-3" style={{ color: '#e91e63' }}>
          {total}
        </p>
        <p className="small my-1">{previous}</p>
      </div>
    </Card>
  );
};

const mapStateToProps = ({ covid19 }) => {
  const { deceased } = covid19.daily;
  return {
    total: deceased ? deceased.total : '',
    change: deceased ? deceased.total : '',
  };
};

export default connect(mapStateToProps)(withTranslation()(TotalDeceased));
