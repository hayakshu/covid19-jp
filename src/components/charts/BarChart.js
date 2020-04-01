import React from 'react';
import { withTranslation } from 'react-i18next';
import {
  BarChart as RCBarChart,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  Bar,
  ResponsiveContainer,
} from 'recharts';
import AxisTick from './AxisTick';
import legendFormatter from './legendFormatter';
import tooltipStyle from './tooltipStyle';

const BarChart = ({ t, data, charts }) => {
  const { height, barSize, isVertical, items } = charts;
  const layout = isVertical ? 'vertical' : 'horizontal';
  const xTick = ({ x, y, payload }) => (
    <AxisTick x={x} y={y} dy={16} value={t(payload.value)} />
  );
  const yTick = ({ x, y, payload }) => (
    <AxisTick x={x} y={y} dx={-20} value={t(payload.value)} />
  );
  const xAxis = isVertical ? (
    <XAxis tick={xTick} type="number" />
  ) : (
    <XAxis tick={xTick} dataKey="name" />
  );

  const yAxis = isVertical ? (
    <YAxis tick={yTick} type="category" dataKey="name" />
  ) : (
    <YAxis tick={yTick} />
  );

  return (
    <ResponsiveContainer height={height}>
      <RCBarChart data={data} barSize={barSize} layout={layout}>
        <CartesianGrid strokeDasharray="3 3" />
        {xAxis}
        {yAxis}
        <Tooltip
          contentStyle={tooltipStyle}
          formatter={(value, name) => [value, t(name)]}
          labelFormatter={name => t(name)}
        />
        <Legend
          formatter={(value, entry) => legendFormatter(t(value), entry)}
        />
        {items.map(chart => (
          <Bar
            key={chart.id}
            dataKey={chart.dataKey}
            fill={chart.color}
            stackId={chart.stackId}
          />
        ))}
      </RCBarChart>
    </ResponsiveContainer>
  );
};

export default withTranslation()(BarChart);
