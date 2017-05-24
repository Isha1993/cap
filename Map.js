import React, {Component} from 'react';
import {
    View, 
    StyleSheet, 
    MapView
} from react-native; 

export default class Map extends Component {
    render() {
        return(
            <MapView style={styles.map}>
            </MapView>
        );
    }
}

const styles = StyleSheet.create ({
    map: {
        flex: 1
    }
});