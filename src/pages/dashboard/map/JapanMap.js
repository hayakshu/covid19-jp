import React from 'react';
import ReactTooltip from 'react-tooltip';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import { feature } from 'topojson-client';
import { Card, Map } from '../../../components';
import mapColorFormatter from './mapColorFormatter';
import topojson from './japan-m.json';

const geographies = feature(topojson, topojson.objects.japan).features;

class JapanMap extends React.Component {
  state = {
    tooltip: null,
  };
  onMouseEnter = key => {
    const { items } = this.props;
    if (items.hasOwnProperty(key)) {
      const { cases, deceased } = items[key];
      this.setState({
        tooltip: {
          name: key,
          cases,
          deceased,
        },
      });
      return;
    }
    this.setState({
      tooltip: {
        name: key,
        cases: 0,
        deceased: 0,
      },
    });
  };

  onMouseLeave = () => {
    this.setState({ tooltip: null });
  };

  render() {
    const { t, items } = this.props;
    const { tooltip } = this.state;
    const tooltipMarkup = tooltip ? (
      <>
        <small>{t(tooltip.name)}</small>
        <br />
        <small>
          {t('cases')}: {tooltip.cases}
        </small>
        <br />
        <small>
          {t('deceased')}：{tooltip.deceased}
        </small>
      </>
    ) : null;

    const fills = geographies.reduce((acc, curr) => {
      const { name } = curr.properties;
      const color = items.hasOwnProperty(name)
        ? mapColorFormatter(items[name].cases)
        : mapColorFormatter(2);
      return {
        ...acc,
        [name]: color,
      };
    }, {});

    const header = t('map.header');
    const center = [145.883565, 37.565725];
    const scale = 1000;
    return (
      <Card header={header}>
        <>
          <Map
            height={500}
            width={600}
            center={center}
            scale={scale}
            fills={fills}
            geographies={geographies}
            onMouseEnter={this.onMouseEnter}
            onMouseLeave={this.onMouseLeave}
          />
          <ReactTooltip place="right">{tooltipMarkup}</ReactTooltip>
        </>
      </Card>
    );
  }
}

const mapStateToProps = ({ covid19 }) => ({
  items: covid19.prefectures,
});

export default connect(mapStateToProps, null)(withTranslation()(JapanMap));
