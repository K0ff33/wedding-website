import React from 'react'
import { withScriptjs, withGoogleMap, GoogleMap, DirectionsRenderer } from 'react-google-maps'
import { compose, withProps, lifecycle } from 'recompose'

const MapWithDirections = compose(
  withProps({
    googleMapURL:
      'https://maps.googleapis.com/maps/api/js?key=AIzaSyCo_OUabIoPA5HUrV-uOoe2fj6RwMRe6Ck&v=3.exp&libraries=geometry,drawing,places',
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ minHeight: `300px`, height: '15vw' }} />,
    mapElement: <div style={{ height: `100%`, width: '100%' }} />
  }),
  withScriptjs,
  withGoogleMap,
  lifecycle({
    componentDidMount() {
      const DirectionsService = new google.maps.DirectionsService()

      DirectionsService.route(
        {
          origin: new google.maps.LatLng(51.737941, 19.4632585),
          destination: new google.maps.LatLng(51.7483251, 19.4620527),
          travelMode: google.maps.TravelMode.WALKING
        },
        (result, status) => {
          if (status === google.maps.DirectionsStatus.OK) {
            this.setState({
              directions: result
            })
          } else {
            console.error(`error fetching directions ${result}`)
          }
        }
      )
    }
  })
)(props => (
  <GoogleMap defaultZoom={8}>
    {props.directions && <DirectionsRenderer directions={props.directions} />}
  </GoogleMap>
))

export default MapWithDirections
