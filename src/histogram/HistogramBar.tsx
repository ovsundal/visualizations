import * as React from "react";
import { useMemo } from "react";
import * as d3 from "d3";

interface IHistogramBarProps {
  bins: number;
  data: { value: number; name: string }[];
  bar: any;
  yScale: any;
  x: number;
}

export const HistogramBar: React.FC<IHistogramBarProps> = ({
  bins,
  data,
  bar,
  yScale,
  x
}) => {
  // const bars = useGetBarProps(bins, data);

  console.log(yScale(bar.x0));
  console.log(bar);

  const translate = `translate(${250 + x}, 600)`;

  return (
    <g transform={translate}>
      <rect transform={`rotate(180)`} width={75} height={yScale(bar)} />
    </g>
  );
};

// function useGetBarProps(bins: number, data: any) {
//   return useMemo(
//     () =>
//       d3
//         .histogram()
//         .thresholds(bins)
//
//         // @ts-ignore
//         .value([1, 2, 3])(data),
//     [bins]
//   );
// }
// function makeBar(name: string, value: number) {
//   return (
//     <rect
//       width={60}
//       height={value * 10}
//
//     />
//   );
// }
