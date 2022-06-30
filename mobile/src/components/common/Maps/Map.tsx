import React, {useState, useEffect} from 'react';
import MapView, {Marker} from 'react-native-maps';
import {StyleSheet, Modal, ScrollView} from 'react-native';
import Geocode from 'react-geocode';
import Config from 'react-native-config';

Geocode.setApiKey(Config.REACT_APP_GOOGLE_MAPS_API_KEY || '');

interface IMapProps {
  address: string;
  mapVisible: boolean;
  setMapVisible: Function;
}

const Map = ({address, mapVisible, setMapVisible}: IMapProps) => {
  const [center, setCenter] = useState({latitude: 0, longitude: 0});
  const [zoom, setZoom] = useState({latitude: 0, longitude: 0});

  useEffect(() => {
    const getCoordinates = async () => {
      try {
        const {lat, lng} = (await Geocode.fromAddress(address)).results[0]
          .geometry.location;
        setCenter({latitude: lat, longitude: lng});
        setZoom({latitude: 0, longitude: 0});
      } catch {
        setCenter({latitude: 0, longitude: 0});
        setZoom({latitude: 50, longitude: 50});
      }
    };

    getCoordinates();
  }, [address]);

  const styles = StyleSheet.create({
    map: {
      ...StyleSheet.absoluteFillObject,
    },
  });

  return (
    <ScrollView>
      <Modal
        animationType='slide'
        transparent={true}
        visible={mapVisible}
        onRequestClose={() => {
          setMapVisible(!setMapVisible);
        }}>
        <MapView
          style={styles.map}
          zoomEnabled
          zoomControlEnabled
          region={{
            latitude: center.latitude,
            longitude: center.longitude,
            latitudeDelta: zoom.latitude,
            longitudeDelta: zoom.longitude,
          }}>
          <Marker
            coordinate={{
              latitude: center.latitude,
              longitude: center.longitude,
            }}
            title={'Location'}
            description={address}
          />
        </MapView>
      </Modal>
    </ScrollView>
  );
};

export default Map;
