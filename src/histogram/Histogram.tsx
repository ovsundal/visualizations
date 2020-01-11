import * as React from "react";
import { RefObject, useEffect, useMemo, useRef } from "react";
import * as d3 from "d3";
import { HistogramBar } from "./HistogramBar";

interface IHistogramProps {
  bins: number;
  data: any[];
  axisMargin?: number; // horizontal spacing between bars
  height: number;
}

export const Histogram: React.FC<IHistogramProps> = ({
  bins,
  data,
  axisMargin = 75,
  height
}) => {
  // mutable refs to hook the axis on
  const xAxisRef = useRef(null);
  const yAxisRef = useRef(null);

  const bars = useGetHistogramBars(bins, data);
  const filteredBars = bars.filter((item) => item.length > 0);

  const counts = bars.map(d => d.length);

  const xAxis = useGetXAxisScale(counts, axisMargin);
  const yAxis = useGetYAxisScale(filteredBars, height);

  // attach axis to refs
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
  }, [xAxis, yAxis]);

  return (
    <g>
      <g ref={xAxisRef} transform={`translate(150, ${height + 100})`} />
      <g ref={yAxisRef} transform={`translate(150, 100)`} />
      {bars
        .filter(item => item[0] != null)
        .map((bar, index) => {

          return (
            <HistogramBar
          // @ts-ignore
              height={yAxis(0) - yAxis(bar[0].number)}
          // @ts-ignore
              label={bar[0].label}
              y={height + 100}
              x={axisMargin * index}
              key={index}
            />
          );
        })}
    </g>
  );
};

/**
 * Groups datapoints into bars with equal widths
 * @param bins
 * @param testData
 */
function useGetHistogramBars(bins: number, testData: any[]) {
  return useMemo(
    () =>
      d3
        .histogram()
        .thresholds(bins)
  // @ts-ignore
        .value(d => d.number)(testData.map(item => item)),
    [bins, testData]
  );
}

function useGetXAxisScale(counts: number[], axisMargin: number) {
  const axisWidth = counts.length * 80;


  return useMemo(() => {
    return d3
      .scaleLinear()
      .domain([d3.min(counts) || 0, d3.max(counts) || 100])
      .range([0, axisWidth - axisMargin]);
  }, [counts, axisMargin, axisWidth]);
}

function useGetYAxisScale(bars: d3.Bin<number, number>[], height: number) {

  return useMemo(() => {
    return d3
      .scaleLinear()
    // @ts-ignore
      .domain([d3.max(bars, d => d[0].number) || 0, 0])
      .range([0, height]);
  }, [bars]);
}
