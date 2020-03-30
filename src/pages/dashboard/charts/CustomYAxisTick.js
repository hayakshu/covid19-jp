import React from 'react';

const CustomYAxisTick = ({ x, y, value }) => (
  <g transform={`translate(${x},${y})`}>
    <text
      x={0}
      y={0}
      dx={-20}
      textAnchor="middle"
      fill="#fff"
      fontSize="0.75em"
    >
      {value}
    </text>
  </g>
);

export default CustomYAxisTick;
