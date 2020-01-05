import * as React from "react";
import { useMemo } from "react";
import * as d3 from "d3";
import styled from "styled-components";

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
        <BarWrapper fill={'rgb(61,61,255)'} height={yScale(bar)} transform={`rotate(180)`} width={45} />
      }
    </g>
  );
};

const BarWrapper = styled.rect`
  transform: 'translate(${220 }, 585)'
`
