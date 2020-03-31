import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import actions from '../../actions';
import { Loading } from '../../components';
import { Header } from './header';
import {
  TotalCases,
  TotalDeceased,
  TotalDischarged,
  TotalExamined,
} from './totals';
import { ReportsChart, AgeRangeChart } from './charts';
import { PrefectureTable } from './table';
import { JapanMap } from './map';

class Dashboard extends React.Component {
  componentDidMount() {
    this.props.fetch();
  }

  render() {
    const { isFetching, error } = this.props;

    if (isFetching) {
      return <Loading />;
    }
    if (error) {
      return null;
    }

    return (
      <Container>
        <Row className="pt-3 px-2">
          <Col sm={12} className="p-1">
            <Header />
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
          <Col sm={12} className="p-1">
            <ReportsChart />
          </Col>
          <Col xl={6} className="p-1">
            <AgeRangeChart />
          </Col>
          <Col xl={6} className="p-1">
            <JapanMap />
          </Col>
          <Col sm={12} className="p-1">
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
  Dashboard
);
