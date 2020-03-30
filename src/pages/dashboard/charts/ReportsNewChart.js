import React from 'react';
import { connect } from 'react-redux';
import {
  BarChart,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  Bar,
  ResponsiveContainer,
} from 'recharts';
import { withTranslation } from 'react-i18next';
import CustomXAxisTick from './CustomXAxisTick';
import CustomYAxisTick from './CustomYAxisTick';
import legendFormatter from './legendFormatter';
import tooltipFormatter from './tooltipFormatter';
import tooltipStyle from './tooltipStyle';

const ReportsNewChart = ({ data, t }) => {
  return (
    <ResponsiveContainer height={250}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="date"
          tick={({ x, y, payload }) => (
            <CustomXAxisTick x={x} y={y} value={t(payload.value)} />
          )}
        />
        <YAxis
          tick={({ x, y, payload }) => (
            <CustomYAxisTick x={x} y={y} value={t(payload.value)} />
          )}
        />
        <Tooltip
          contentStyle={tooltipStyle}
          formatter={(value, name) => tooltipFormatter(value, t(name))}
        />
        <Legend
          formatter={(value, entry) => legendFormatter(t(value), entry)}
        />
        <Bar stackId="reports" dataKey="cases" fill="#bb86fc" />
        <Bar stackId="reports" dataKey="deceased" fill="#e91e63" />
        <Bar stackId="reports" dataKey="discharged" fill="#00bcd4" />
      </BarChart>
    </ResponsiveContainer>
  );
};

const aggregate = (cases, deceased, discharged) => {
  return cases.map((_, i) => {
    return {
      date: cases[i].date,
      cases: cases[i].change,
      deceased: deceased[i].change,
      discharged: discharged[i].change,
    };
  });
};

const mapStateToProps = ({ covid19 }) => {
  const { cases, deceased, discharged } = covid19.series;
  return { data: cases ? aggregate(cases, deceased, discharged) : [] };
};

export default connect(mapStateToProps)(withTranslation()(ReportsNewChart));
