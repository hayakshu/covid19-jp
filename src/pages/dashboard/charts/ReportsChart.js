import React from 'react';
import { withTranslation } from 'react-i18next';
import { Card, DualToggleLayout } from '../../../components';
import ReportsTotalChart from './ReportsTotalChart';
import ReportsNewChart from './ReportsNewChart';

const ReportsChart = ({ t }) => {
  const header = t('series.headers.reports');
  const left = t('series.dual.cumulative');
  const right = t('series.dual.change');

  return (
    <Card header={header}>
      <DualToggleLayout
        leftSide={<ReportsTotalChart />}
        rightSide={<ReportsNewChart />}
        leftToggleText={left}
        rightToggleText={right}
      />
    </Card>
  );
};

export default withTranslation()(ReportsChart);
