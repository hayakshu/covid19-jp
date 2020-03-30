import React from 'react';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import { Card } from '../../../components';

const TotalExamined = ({ t, total, change }) => {
  const previous = `${t('total.previous')} +${change}`;
  return (
    <Card>
      <h6>{t('total.examined')}</h6>
      <div className="d-flex flex-wrap align-items-end">
        <p className="h4 m-0 pr-3" style={{ color: '#2196f3' }}>
          {total}
        </p>
        <p className="small my-1">{previous}</p>
      </div>
    </Card>
  );
};

const mapStateToProps = ({ covid19 }) => {
  const { examined } = covid19.daily;
  return {
    total: examined ? examined.total : '',
    change: examined ? examined.change : '',
  };
};

export default connect(mapStateToProps)(withTranslation()(TotalExamined));
