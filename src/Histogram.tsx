import * as React from 'react'

interface IHistogramProps {

}

export const Histogram: React.FC = (props: IHistogramProps) => {



    return(
        <g>
          <rect
            width={200}
            height={100}
          />
        </g>
    )
}
