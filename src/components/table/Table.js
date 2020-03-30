import React from 'react';
import { Table as BootstrapTable } from 'react-bootstrap';

const Table = ({ cols, rows }) => {
  const renderCols = col => (
    <th key={col} scope="col">
      {col}
    </th>
  );

  const renderRows = row => {
    const { id } = row;
    const cells = Object.keys(row).map(key => {
      const val = row[key];
      const tdKey = `${id}-${key}-${val}`;
      return <td key={tdKey}>{val}</td>;
    });

    return <tr key={row.id}>{cells}</tr>;
  };

  const theadMarkup = cols.map(renderCols);
  const tbodyMarkup = rows.map(renderRows);

  return (
    <BootstrapTable responsive size="sm">
      <thead>
        <tr>{theadMarkup}</tr>
      </thead>
      <tbody>{tbodyMarkup}</tbody>
    </BootstrapTable>
  );
};

export default Table;
