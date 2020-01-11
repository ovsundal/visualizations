import * as React from "react";
import styled from "styled-components";

interface IHistogramBarProps {
  height: number;
  x: number;
  y: number;
  label: string;
}

export const HistogramBar: React.FC<IHistogramBarProps> = ({
  x,
  y,
  label,
  height
}) => {
  const translate = `translate(${220 + x}, ${y})`; // here

  return (
    <g transform={translate}>
      <BarElement height={height} transform={`rotate(180)`} width={45} />
      <text transform={`translate(-25, 20)`}>{label}</text>
    </g>
  );
};

const BarElement = styled.rect`
  fill: steelblue;

  &:hover {
    opacity: 0.5;
  }
`;
