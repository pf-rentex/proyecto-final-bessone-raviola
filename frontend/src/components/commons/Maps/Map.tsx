import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import Geocode from 'react-geocode';
import { useEffect, useState } from 'react';
import React from 'react';

Geocode.setApiKey(process.env.REACT_APP_GOOGLE_MAPS_API_KEY || '');

interface IMapProps {
    address: string;
}

const Map = ({ address }: IMapProps) => {
    const { isLoaded } = useLoadScript({ googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY || '' });
    const [center, setCenter] = useState({ lat: 0, lng: 0 });
    const [zoom, setZoom] = useState(0);
    const [map, setMap] = React.useState(null);

    const onLoad = React.useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds(center);
        map.fitBounds(bounds);
        setMap(map);
    }, []);

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null);
    }, []);

    useEffect(() => {
        const getCoordinates = async () => {
            try {
                const { lat, lng } = (await Geocode.fromAddress(address)).results[0].geometry.location;
                setCenter({ lat, lng });
                setZoom(18);
            } catch {
                setCenter({ lat: 0, lng: 0 });
                setZoom(0);
            }
        };

        getCoordinates();
    }, [address]);

    if (!isLoaded) return <div>Loading...</div>;

    return (
        <GoogleMap
            zoom={zoom}
            center={center}
            mapContainerClassName="h-80 w-full"
            onLoad={onLoad}
            onUnmount={onUnmount}
        >
            <Marker position={center} />
        </GoogleMap>
    );
};

export default Map;
