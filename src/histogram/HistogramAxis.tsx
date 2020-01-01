import * as React from "react";
import * as d3 from "d3";
import { useMemo, useRef } from "react";
import { useEffect } from "react";

interface IHistogramAxisProps {}

export const HistogramAxis: React.FC = (props: IHistogramAxisProps) => {
  const anchorRef = useRef(null);
  const yAxis = useGetYAxisScale();

  useEffect(() => {
    // @ts-ignore
      d3.select(anchorRef.current).call(yAxis);
  }, []);

  return <g ref={anchorRef} transform={`translate(150, 100)`} />;
};

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
