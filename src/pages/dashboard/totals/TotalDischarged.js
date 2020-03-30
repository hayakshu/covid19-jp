import React from 'react';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import { Card } from '../../../components';

const TotalDischarged = ({ t, total, change }) => {
  const previous = `${t('total.previous')} +${change}`;
  return (
    <Card>
      <h6>{t('total.discharged')}</h6>
      <div className="d-flex flex-wrap align-items-end">
        <p className="h4 m-0 pr-3" style={{ color: '#00bcd4' }}>
          {total}
        </p>
        <p className="small my-1">{previous}</p>
      </div>
    </Card>
  );
};

const mapStateToProps = ({ covid19 }) => {
  const { discharged } = covid19.daily;
  return {
    total: discharged ? discharged.total : '',
    change: discharged ? discharged.change : '',
  };
};

export default connect(mapStateToProps)(withTranslation()(TotalDischarged));
