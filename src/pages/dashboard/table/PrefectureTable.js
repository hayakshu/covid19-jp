import React from 'react';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import BootstrapTable from 'react-bootstrap-table-next';
import { Card, LineChart } from '../../../components';

const PrefectureTable = ({ t, prefectures }) => {
  const header = t('prefectures.table.header');
  const columns = [
    {
      dataField: 'id',
      text: t('prefecture'),
    },
    {
      dataField: 'cases',
      text: t('cases'),
      sort: true,
    },
    {
      dataField: 'deceased',
      text: t('deceased'),
      sort: true,
    },
  ];
  const data = Object.keys(prefectures).map(key => {
    return {
      id: t(key),
      ...prefectures[key],
    };
  });

  const defaultSorted = [
    {
      dataField: 'cases',
      order: 'desc',
    },
  ];
  const charts = {
    height: 250,
    name: 'date',
    items: [
      {
        id: 0,
        dataKey: 'cases',
        color: '#bb86fc',
      },
      {
        id: 1,
        dataKey: 'deceased',
        color: '#e91e63',
      },
    ],
  };
  const expandRow = {
    renderer: row => {
      return <LineChart data={row.items} charts={charts} />;
    },
    showExpandColumn: true,
    expandColumnRenderer: ({ expanded, rowKey, expandable }) => {
      if (expanded) {
        return <small>-</small>;
      }
      return <small>+</small>;
    },
    expandHeaderColumnRenderer: ({ isAnyExpands }) => null,
  };

  return (
    <Card header={header}>
      <BootstrapTable
        bootstrap4
        keyField="id"
        classes="table-sm"
        data={data}
        columns={columns}
        defaultSorted={defaultSorted}
        bordered={false}
        expandRow={expandRow}
        hover
      />
    </Card>
  );
};

const mapStateToProps = ({ covid19 }) => {
  const { prefectures } = covid19;
  return { prefectures };
};

export default connect(mapStateToProps)(withTranslation()(PrefectureTable));
