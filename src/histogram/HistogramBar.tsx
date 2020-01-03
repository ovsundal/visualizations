import * as React from "react";
import { useMemo } from "react";
import * as d3 from "d3";

interface IHistogramBarProps {
  bins: number;
  data: { value: number; name: string }[];
}

export const HistogramBar: React.FC<IHistogramBarProps> = ({ bins, data }) => {
  const bars = useGetBarProps(bins, data);

  console.log(bars);
// TODO: fortsett å integrere bars inn - den skal ikke ha nøstet array
  return (
    <g>
      {data.map(({ value, name }, index) => (
        <React.Fragment key={name}>
          {bars.map(() => makeBar(name, value))}
        </React.Fragment>
      ))}
    </g>
  );
};

function useGetBarProps(bins: number, data: any) {
  return useMemo(
    () =>
      d3
        .histogram()
        .thresholds(bins)

        // @ts-ignore
        .value([1, 2, 3])(data),
    [bins]
  );
}
function makeBar(name: string, value: number) {
  return (
    <rect
      width={60}
      height={value * 10}

    />
  );
}
