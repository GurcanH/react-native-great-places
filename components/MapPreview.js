import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

import ENV from '../env';

const MapPreview = props => {
  let imagePreviewUrl;

  if (props.location) {
    imagePreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?${props.location.lat},${props.location.lng}&zoom=13&size=400x200&maptype=roadmap&markers=color:blue%7Clabel:A%7C${props.location.lat},${props.location.lng}&key=${ENV.googleApiKey}`;
    console.log(imagePreviewUrl);
  }

  return (
    <View style={{ ...styles.mapPreview, ...props.style }}>
      {props.location ? (
        <Image style={styles.mapImage} source={{ uri: imagePreviewUrl }} />
      ) : (
        props.children
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  mapPreview: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  mapImage: {
    height: '100%',
    width: '100%'
  }
});

export default MapPreview;
