import React from 'react';
import { withTranslation } from 'react-i18next';
import {
  LineChart as RCLineChart,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  Line,
  ResponsiveContainer,
} from 'recharts';
import AxisTick from './AxisTick';
import legendFormatter from './legendFormatter';
import tooltipStyle from './tooltipStyle';

const LineChart = ({ t, data, charts }) => {
  const { height, items, isVertical, name } = charts;
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
    <XAxis tick={xTick} dataKey={name ?? 'name'} />
  );

  const yAxis = isVertical ? (
    <YAxis tick={yTick} type="category" dataKey={name ?? 'name'} />
  ) : (
    <YAxis tick={yTick} />
  );

  return (
    <ResponsiveContainer height={height}>
      <RCLineChart data={data} layout={layout}>
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
          <Line
            key={chart.id}
            type="monotone"
            dataKey={chart.dataKey}
            stroke={chart.color}
            isAnimationActive={false}
            dot={false}
          />
        ))}
      </RCLineChart>
    </ResponsiveContainer>
  );
};

export default withTranslation()(LineChart);
