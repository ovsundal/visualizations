import * as React from "react";
import styled from "styled-components";
import { useEffect, useMemo, useRef } from "react";
import * as d3 from "d3";
import { HistogramAxis } from "./HistogramAxis";
import { HistogramBar } from "./HistogramBar";

interface IHistogramProps {
  bins: number
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

export const Histogram: React.FC<IHistogramProps> = ({bins} ) => {
  return (
    <g>
      <HistogramAxis />
      <HistogramBar
        bins={bins}
        data={testData}
      />
    </g>
  );
};
