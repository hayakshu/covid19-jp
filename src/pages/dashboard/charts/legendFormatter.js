import React from 'react';

const legendFormatter = (value, entry) => {
  const { color } = entry;
  return <small style={{ color }}>{value}</small>;
};

export default legendFormatter;
