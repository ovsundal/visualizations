import * as React from "react";
import { useEffect, useMemo, useRef } from "react";
import * as d3 from "d3";
import { HistogramBar } from "./HistogramBar";

interface IHistogramProps {
  bins: number;
}

const testData = [
  {
    name: "A",
    value: 1
  },
  {
    name: "B",
    value: 5
  },
  {
    name: "C",
    value: 2
  },
  {
    name: "D",
    value: 4
  },
  {
    name: "E",
    value: 7
  }
];

export const Histogram: React.FC<IHistogramProps> = ({ bins }) => {
  const xAxisRef = useRef(null);
  const yAxisRef = useRef(null);

  const bars = d3
    .histogram()
    .thresholds(bins)
    .value(d => d)(testData.map(item => item.value));

  const xAxis = useGetXAxisScale(bars);
  const yAxis = useGetYAxisScale(bars);

  useEffect(() => {
    const yAxisConfig = d3.axisLeft(yAxis).ticks(8);
    const xAxisConfig = d3
      .axisBottom(xAxis)
      .ticks(0)
      .tickSize(0);

    // @ts-ignore
    d3.select(xAxisRef.current).call(xAxisConfig);
    // @ts-ignore
    d3.select(yAxisRef.current).call(yAxisConfig);
  }, []);

  const val = testData.map(item => item.value);
  const axisMargin = 83;
  console.log(bars);

  return (
    <g>
      {/*<g ref={xAxisRef} transform={`translate(150, 400)`} />*/}
      <g ref={yAxisRef} transform={`translate(150, 100)`} />
      {bars.map((bar, index) => (
        <HistogramBar
          x={axisMargin * index}
          key={index}
          bar={bar}
          bins={bins}
          data={testData}
          yScale={yAxis}
        />
      ))}
    </g>
  );
};

function useGetXAxisScale(bars: d3.Bin<number, number>[]) {
  const width = 600;
  const axisMargin = 83;

  const counts = bars.map(d => d.length);

  const xAxis = useMemo(() => {
    const xAxisScale = d3
      .scaleLinear()

      // @ts-ignore
      .domain([d3.min(counts), d3.max(counts)])
      .range([0, width - axisMargin]);

    return xAxisScale;
  }, []);

  return xAxis;
}
function useGetYAxisScale(bars: d3.Bin<number, number>[]) {
  const y = 10;
  const height = 500;
  const bottomMargin = 5;

  const yAxis = useMemo(() => {
    const yAxisScale = d3
      .scaleLinear()
      // .domain([8, 0])
      // @ts-ignore
      .domain([0, d3.max(bars, d => d.x1)])
      // .range([0, 300]);
      .range([height - y - bottomMargin, 0]);

    return yAxisScale;

    // const yAxisConfig = d3.axisLeft(yAxisScale).ticks(8);
    //
    // return yAxisConfig;
  }, []);

  return yAxis;
}
