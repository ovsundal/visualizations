import * as React from 'react'
import {useEffect, useMemo, useState} from "react";
import * as d3 from 'd3';
import * as https from "https";

interface IEarthQuakeMapProps {

}

export const EarthQuakeMap: React.FC = (props: IEarthQuakeMapProps) => {

    const [mapData, setMapData] = useState({} as d3.Map<any>);
    
    useGetData(setMapData);
    
    console.log(mapData);
    

    return(
        <text x={100} y={200}>EARTHQUAKE</text>
    )
};

function useGetData(setMapData: any) {
    useEffect(() => {

        const urlMapData = "https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson";

        d3.json(urlMapData).then((data) => {
            setMapData(data);
        });
    }, []);

}
