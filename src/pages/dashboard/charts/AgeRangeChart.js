import React from 'react';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Legend,
  Tooltip,
} from 'recharts';
import { Card } from '../../../components';
import CustomXAxisTick from './CustomXAxisTick';
import CustomYAxisTick from './CustomYAxisTick';
import legendFormatter from './legendFormatter';
import tooltipStyle from './tooltipStyle';

const AgeRangeChart = ({ t, data }) => {
  const header = t('ageRange.header');
  return (
    <Card header={header}>
      <ResponsiveContainer height={425}>
        <BarChart data={data} barSize={10} layout="vertical">
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            tick={({ x, y, payload }) => (
              <CustomXAxisTick x={x} y={y} value={t(payload.value)} />
            )}
            type="number"
          />
          <YAxis
            tick={({ x, y, payload }) => {
              return <CustomYAxisTick x={x} y={y} value={t(payload.value)} />;
            }}
            type="category"
            dataKey="name"
          />
          <Tooltip
            contentStyle={tooltipStyle}
            labelFormatter={name => t(name)}
            formatter={(value, name) => [value, t(name)]}
          />
          <Legend
            formatter={(value, entry) => legendFormatter(t(value), entry)}
          />
          <Bar dataKey="cases" fill="#1FC3AA" />
          <Bar dataKey="deceased" fill="#8624F5" />
        </BarChart>
      </ResponsiveContainer>
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
