import React from 'react';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import { Card, BarChart } from '../../../components';

const AgeRangeChart = ({ t, data }) => {
  const header = t('ageRange.header');
  const charts = {
    barSize: 10,
    height: 409.64,
    isVertical: true,
    items: [
      {
        id: 0,
        dataKey: 'cases',
        color: '#1FC3AA',
      },
      {
        id: 1,
        dataKey: 'deceased',
        color: '#8624F5',
      },
    ],
  };
  return (
    <Card header={header}>
      <BarChart data={data} charts={charts} />
    </Card>
  );
};

const mapToData = ageRange => {
  return Object.keys(ageRange).map(key => {
    return { name: key, ...ageRange[key] };
  });
};

const mapStateToProps = ({ covid19 }) => {
  return { data: mapToData(covid19.ageRange) };
};

export default connect(mapStateToProps)(withTranslation()(AgeRangeChart));
