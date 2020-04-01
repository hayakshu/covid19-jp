import React from 'react';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import {
  Card,
  DualToggleLayout,
  BarChart,
  LineChart,
} from '../../../components';

const ReportsChart = ({ t, values, changes }) => {
  const header = t('series.headers.reports');
  const left = t('series.dual.cumulative');
  const right = t('series.dual.change');
  const charts = {
    height: 250,
    items: [
      {
        id: 0,
        dataKey: 'cases',
        color: '#bb86fc',
        stackId: 'reports',
      },
      {
        id: 1,
        dataKey: 'deceased',
        color: '#e91e63',
        stackId: 'reports',
      },
      {
        id: 2,
        dataKey: 'discharged',
        color: '#00bcd4',
        stackId: 'reports',
      },
    ],
  };

  return (
    <Card header={header}>
      <DualToggleLayout
        leftSide={<LineChart data={values} charts={charts} />}
        rightSide={<BarChart data={changes} charts={charts} />}
        leftToggleText={left}
        rightToggleText={right}
      />
    </Card>
  );
};

const mapToValues = ({ cases, deceased, discharged }) => {
  if (cases) {
    return cases.map((_, i) => {
      return {
        name: cases[i].date,
        cases: cases[i].value,
        deceased: deceased[i].value,
        discharged: discharged[i].value,
      };
    });
  }
  return [];
};

const mapToChanges = ({ cases, deceased, discharged }) => {
  if (cases) {
    return cases.map((_, i) => {
      return {
        name: cases[i].date,
        cases: cases[i].change,
        deceased: deceased[i].change,
        discharged: discharged[i].change,
      };
    });
  }
  return [];
};
const mapStateToProps = ({ covid19 }) => ({
  values: mapToValues(covid19.series),
  changes: mapToChanges(covid19.series),
});

export default connect(mapStateToProps)(withTranslation()(ReportsChart));
