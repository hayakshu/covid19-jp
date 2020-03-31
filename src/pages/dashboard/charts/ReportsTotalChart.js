import React from 'react';
import { connect } from 'react-redux';
import {
  LineChart,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  Line,
  ResponsiveContainer,
} from 'recharts';
import { withTranslation } from 'react-i18next';
import CustomXAxisTick from './CustomXAxisTick';
import CustomYAxisTick from './CustomYAxisTick';
import legendFormatter from './legendFormatter';
import tooltipStyle from './tooltipStyle';

const ReportsTotalChart = ({ data, t }) => {
  return (
    <ResponsiveContainer height={250}>
      <LineChart data={data}>
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
          formatter={(value, name) => [value, t(name)]}
        />
        <Legend
          formatter={(value, entry) => legendFormatter(t(value), entry)}
        />
        <Line type="monotone" dataKey="cases" stroke="#bb86fc" />
        <Line type="monotone" dataKey="deceased" stroke="#e91e63" />
        <Line type="monotone" dataKey="discharged" stroke="#00bcd4" />
      </LineChart>
    </ResponsiveContainer>
  );
};

const mapToData = ({ cases, deceased, discharged }) => {
  if (cases) {
    return cases.map((_, i) => {
      return {
        date: cases[i].date,
        cases: cases[i].cases,
        deceased: deceased[i].deceased,
        discharged: discharged[i].discharged,
      };
    });
  }
  return [];
};

const mapStateToProps = ({ covid19 }) => {
  return { data: mapToData(covid19.series) };
};

export default connect(mapStateToProps)(withTranslation()(ReportsTotalChart));
