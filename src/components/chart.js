import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
import _ from 'lodash';

const Chart = (props) => {

  function average(data) {
    return _.round(_.sum(data)/data.length);
  }

  return (
    <div>
      <Sparklines svgHeight={150} svgWidth={200} data={props.data}>
        <SparklinesLine color={props.color} />
        <SparklinesReferenceLine type="mean" />
        <div>{average(props.data)}</div>
      </Sparklines>
    </div>
  )
}

export default Chart;
