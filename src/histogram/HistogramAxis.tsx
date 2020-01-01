import * as React from "react";
import * as d3 from "d3";
import { useMemo, useRef } from "react";
import { useEffect } from "react";

interface IHistogramAxisProps {}

export const HistogramAxis: React.FC = (props: IHistogramAxisProps) => {
  const xAxisRef = useRef(null);
  const yAxisRef = useRef(null);
  const yAxis = useGetYAxisScale();
  const xAxis = useGetXAxisScale();

  useEffect(() => {
    // @ts-ignore
    d3.select(xAxisRef.current).call(xAxis);
    // @ts-ignore
    d3.select(yAxisRef.current).call(yAxis);
  }, []);

  return (
    <>
      <g ref={xAxisRef} transform={`translate(150, 400)`} />
      <g ref={yAxisRef} transform={`translate(150, 100)`} />
    </>
  );
};

function useGetXAxisScale() {
  const xAxis = useMemo(() => {
    const xAxisScale = d3
      .scaleLinear()
      .domain([0, 8])
      .range([0, 600]);

    const xAxisConfig = d3
      .axisBottom(xAxisScale)
      .ticks(0)
      .tickSize(0);

    return xAxisConfig;
  }, []);

  return xAxis;
}
function useGetYAxisScale() {
  const yAxis = useMemo(() => {
    const yAxisScale = d3
      .scaleLinear()
      .domain([8, 0])
      .range([0, 300]);

    const yAxisConfig = d3.axisLeft(yAxisScale).ticks(8);

    return yAxisConfig;
  }, []);

  return yAxis;
}
