import React from 'react';

const AxisTick = ({ x, y, value, dx, dy }) => (
  <g transform={`translate(${x},${y})`}>
    <text
      x={0}
      y={0}
      dx={dx}
      dy={dy}
      textAnchor="middle"
      fill="#fff"
      fontSize="0.75em"
    >
      {value}
    </text>
  </g>
);

export default AxisTick;
