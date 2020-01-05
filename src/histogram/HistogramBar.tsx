import * as React from "react";
import { useMemo } from "react";
import * as d3 from "d3";

interface IHistogramBarProps {
  bar: d3.Bin<number, number>;
  yScale: d3.ScaleLinear<number, number>;
  x: number;
}

export const HistogramBar: React.FC<IHistogramBarProps> = ({
  bar,
  yScale,
  x,
}) => {
  const translate = `translate(${220 + x}, 585)`;

  return (
    <g transform={translate}>
      {
        // @ts-ignore
        <rect height={yScale(bar)} transform={`rotate(180)`} width={45} />
      }
    </g>
  );
};
