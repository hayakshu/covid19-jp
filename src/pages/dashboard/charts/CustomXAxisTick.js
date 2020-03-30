import React from 'react';

const CustomXAxisTick = ({ x, y, value }) => (
  <g transform={`translate(${x},${y})`}>
    <text x={0} y={0} dy={16} textAnchor="middle" fill="#fff" fontSize="0.75em">
      {value}
    </text>
  </g>
);

export default CustomXAxisTick;
