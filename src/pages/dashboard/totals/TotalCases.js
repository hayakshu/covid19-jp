import React from 'react';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import { Card } from '../../../components';

const TotalCases = ({ t, total, change }) => {
  const previous = `${t('total.previous')} +${change}`;
  return (
    <Card>
      <h6>{t('total.cases')}</h6>
      <div className="d-flex flex-wrap align-items-end">
        <p className="h4 m-0 pr-3" style={{ color: '#BB86FC' }}>
          {total}
        </p>
        <p className="small my-1">{previous}</p>
      </div>
    </Card>
  );
};

const mapStateToProps = ({ covid19 }) => {
  const { cases } = covid19.daily;
  return {
    total: cases ? cases.total : '',
    change: cases ? cases.change : '',
  };
};

export default connect(mapStateToProps)(withTranslation()(TotalCases));
