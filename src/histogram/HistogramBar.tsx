import * as React from "react";
import { useMemo } from "react";
import * as d3 from "d3";
import styled from "styled-components";

interface IHistogramBarProps {
  bar: d3.Bin<number, number>;
  height: number;
  x: number;
  y: number;
  label: string;
}

export const HistogramBar: React.FC<IHistogramBarProps> = ({
  bar,
  x,
  y,
  label,
  height
}) => {
  const translate = `translate(${220 + x}, ${y})`; // here

  return (
    <g transform={translate}>
      <rect
        fill={"rgb(61,61,255)"}
        height={height}
        transform={`rotate(180)`}
        width={45}
      />
      <text transform={`translate(-25, 20)`}>{label}</text>
    </g>
  );
};
