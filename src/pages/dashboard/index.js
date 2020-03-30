import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import actions from '../../actions';
import {
  TotalCases,
  TotalDeceased,
  TotalDischarged,
  TotalExamined,
} from './totals';
import { ReportsChart, AgeGenderChart } from './charts';
import { PrefectureTable } from './table';
import { JapanMap } from './map';

class Dashboard extends React.Component {
  componentDidMount() {
    this.props.fetch();
  }

  render() {
    const { t } = this.props;
    return (
      <Container>
        <Row className="pt-3 px-2">
          <Col className="px-1">
            <h4 className="text-white">{t('home.header')}</h4>
          </Col>
        </Row>
        <Row className="p-2">
          <Col sm={6} lg={3} className="p-1">
            <TotalCases />
          </Col>
          <Col sm={6} lg={3} className="p-1">
            <TotalDeceased />
          </Col>
          <Col sm={6} lg={3} className="p-1">
            <TotalDischarged />
          </Col>
          <Col sm={6} lg={3} className="p-1">
            <TotalExamined />
          </Col>
        </Row>
        <Row className="p-2">
          <Col className="p-1">
            <ReportsChart />
          </Col>
        </Row>
        <Row className="p-2">
          <Col xl={6} className="p-1">
            <AgeGenderChart />
          </Col>
          <Col xl={6} className="p-1">
            <JapanMap />
          </Col>
        </Row>
        <Row className="p-2">
          <Col className="p-1">
            <PrefectureTable />
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = ({ covid19 }) => {
  const { isFetching, error } = covid19;
  return {
    isFetching,
    error,
  };
};

export default connect(mapStateToProps, { fetch: actions.fetchCovid19 })(
  withTranslation()(Dashboard)
);
