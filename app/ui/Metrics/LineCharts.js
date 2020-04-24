import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
import * as d3 from 'd3-scale';
import { Svg, Rect, G, Line, Path, Defs, LinearGradient, Stop } from "react-native-svg";
import c3 from 'c3';

const GRAPH_MARGIN = 20
const colors = {
  axis: 'black'
}

const LineCharts = ({ data }) => {
  const SVGHeight = 300
  const SVGWidth = 300
  const graphHeight = SVGHeight - 2 * GRAPH_MARGIN
  const graphWidth = SVGWidth - 2 * GRAPH_MARGIN

  const xDomain = data.map(log => log.date)
    const xRange = [0, graphWidth]
    const x = d3.scalePoint()
      .domain(xDomain)
      .range(xRange)
      .padding(1)


  return (
    <View>
      <Svg width={SVGWidth} height={SVGHeight}>
        {/* translate for 'graphHeight' on y axis */}
        <G y={graphHeight}>
            {/* bottom axis */}
          <Line
            x1="0"
            y1="2"
            x2={graphWidth}
            y2="2"
            stroke={colors.axis}
            strokeWidth="0.5"
          />
        </G>
      </Svg>
    </View>
  )
}

export default LineCharts
