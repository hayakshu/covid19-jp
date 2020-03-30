import React from 'react';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import { Card, Table } from '../../../components';
const PrefectureTable = ({ t, prefectures }) => {
  const header = t('prefectures.table.header');

  const cols = [t('prefecture'), t('cases'), t('deceased')];
  const rows = Object.keys(prefectures).map(key => {
    return {
      id: t(key),
      ...prefectures[key],
    };
  });

  return (
    <Card header={header}>
      <Table cols={cols} rows={rows} />
    </Card>
  );
};

const mapStateToProps = ({ covid19 }) => {
  const { prefectures } = covid19;
  return { prefectures };
};

export default connect(mapStateToProps)(withTranslation()(PrefectureTable));
