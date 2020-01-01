import * as React from "react";
import styled from "styled-components";
import {useEffect, useMemo, useRef} from "react";
import * as d3 from "d3";
import {HistogramAxis} from "./HistogramAxis";

interface IHistogramProps {}

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

export const Histogram: React.FC = (props: IHistogramProps) => {




  return (

    <g>
      <HistogramAxis />
      {/*{testData.map(bar => (*/}
      {/*  <HistogramBar width={200} height={100} />*/}
      {/*))}*/}
      {/*<rect width={200} height={100} />*/}
    </g>
  );
};

function useSetScales() {
  const xScale = useMemo(
    () =>
      d3
        .scaleLinear()
        .domain([0, 1000])
        .range([0, 500]),
    []
  );

  const yScale = useMemo(
    () =>
      d3
        .scaleLinear()
        .domain([0, 700])
        .range([600]),
    []
  );

  return [xScale, yScale];
}

function makeBar({ xScale, yScale }: any) {
  const props = {
    width: xScale,
    height: yScale
  };

  return <HistogramBar {...props} />;
}

const HistogramBar = styled.rect``;
