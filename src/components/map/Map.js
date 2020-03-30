import React from 'react';
import * as d3 from 'd3v4';

class Map extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      transform: null,
    };

    this.zoom = d3
      .zoom()
      .scaleExtent([1, 5])
      .on('zoom', this.zoomed);
  }

  componentDidMount() {
    d3.select(this.refs.map).call(this.zoom);
  }

  componentDidUpdate() {
    d3.select(this.refs.map).call(this.zoom);
  }

  zoomed = () => {
    this.setState({ transform: d3.event.transform });
  };

  render() {
    const {
      minX,
      minY,
      height,
      width,
      fills,
      stroke,
      strokeWidth,
      geographies,
      onMouseEnter,
      onMouseLeave,
      center,
      scale,
    } = this.props;
    const { transform } = this.state;
    const viewBox = `${minX} ${minY} ${width} ${height}`;
    const projection = d3
      .geoMercator()
      .scale(scale)
      .center(center);
    const path = d3.geoPath().projection(projection);

    return (
      <div className="svg-container">
        <svg
          className="svg-responsive"
          id="map-svg"
          ref="map"
          viewBox={viewBox}
          data-tip=""
        >
          <g className="countries">
            {geographies.map((d, i) => {
              const { name } = d.properties;
              const fill = fills[name] ?? 'black';
              const id = `path_${i}`;
              return (
                <path
                  id={id}
                  key={id}
                  d={path(d)}
                  transform={transform}
                  className="country"
                  fill={fill}
                  stroke={stroke}
                  strokeWidth={strokeWidth}
                  onMouseEnter={() => onMouseEnter(name)}
                  onMouseLeave={() => onMouseLeave()}
                />
              );
            })}
          </g>
        </svg>
      </div>
    );
  }
}

Map.defaultProps = {
  scale: 100,
  center: [0, 0],
  minX: 0,
  minY: 0,
  height: 500,
  width: 800,
  fills: {},
  stroke: '#fff',
  strokeWidth: 0.5,
};

export default Map;
