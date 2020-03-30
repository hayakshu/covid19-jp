import { scaleLinear } from 'd3-scale';

const colorScale = scaleLinear()
  .domain([0, 6])
  .range(['#b2ebf2', '#00838f']);

const convertToDomain = val => {
  if (val > 100) {
    return 6;
  }
  if (val > 50) {
    return 5;
  }
  if (val > 25) {
    return 4;
  }
  if (val > 10) {
    return 3;
  }
  if (val > 5) {
    return 2;
  }
  if (val > 0) {
    return 1;
  }
  return 0;
};

const mapColorFormatter = value => colorScale(convertToDomain(value));

export default mapColorFormatter;
