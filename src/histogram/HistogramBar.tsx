import * as React from "react";
import { useMemo } from "react";
import * as d3 from "d3";
import styled from "styled-components";

interface IHistogramBarProps {
  bar: d3.Bin<number, number>;
  yScale: d3.ScaleLinear<number, number>;
  x: number;
  y: number
}

export const HistogramBar: React.FC<IHistogramBarProps> = ({
  bar,
  yScale,
  x,
    y
}) => {
  const translate = `translate(${220 + x}, ${y})`; // here

  return (
    <g transform={translate}>
      {
        // @ts-ignore
        <rect fill={'rgb(61,61,255)'} height={yScale(bar)} transform={`rotate(180)`} width={45} />
      }
    </g>
  );
};
