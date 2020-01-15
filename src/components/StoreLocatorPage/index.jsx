import React, { Fragment, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import NavBar from '../NavBar'
import Footer from '../Footer'
import { graphql, useStaticQuery } from 'gatsby'
import { userPositon, distance } from './userPosition'
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker,
  InfoWindow,
} from 'react-google-maps'

const testLoc = { lat: 36.233552, lng: -115.182249 }

const locationData = () => {
  const data = useStaticQuery(
    graphql`
      query storeLocations {
        allLocationsJson {
          nodes {
            wpsl_id
            name
            address
            city
            state
            zip
            lat
            lng
          }
        }
      }
    `
  )
  return data.allLocationsJson.nodes
}

const Map = () => {
  const [selectedLocation, setSelectedLocation] = useState(null)
  const { lat, lng } = testLoc // userPositon

  useEffect(() => {
    const listener = e => {
      if (e.key === 'Escape') {
        setSelectedLocation(null)
      }
    }
    window.addEventListener('keydown', listener)
    return () => {
      window.removeEventListener('keydown', listener)
    }
  }, [])

  return (
    <GoogleMap
      defaultZoom={5}
      defaultCenter={{ lat, lng }}
    >
      {locationData().map(store => (
        <Marker
          key={store.wpsl_id}
          position={{
            lat: store.lat, lng: store.lng,
          }}
          onClick={() => {
            setSelectedLocation(store)
          }}
          icon={{
            url: `/img/equineadvantage_logo.svg`,
            scaledSize: new window.google.maps.Size(25, 25),
          }}
        />
      ))}

      {selectedLocation && (
        <InfoWindow
          onCloseClick={() => {
            setSelectedLocation(null)
          }}
          position={{
            lat: selectedLocation.lat,
            lng: selectedLocation.lng,
          }}
        >
          <div>
            <h2>{selectedLocation.name}</h2>
            <p>{selectedLocation.address}</p>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  )
}

const MapWrapped = withScriptjs(withGoogleMap(Map))

const StoreLocatorPage = ({
  title,
  subtitle,
  heading,
  navbar,
  footer,
  meta_title,
  meta_description,
}) => {
  //   googleApiKey: process.env.GATSBY_APP_GOOGLE_KEY,
  // }
  return (
    <Fragment>
      <NavBar logo={navbar.logo} />
      <section className='section'>
        <div className='tile is-ancestor'>
          <div className='tile is-parent'>
            <article className='tile is-child '>
              <p className='title'>Side column</p>
              <p className='subtitle'>With some content</p>
              <div className='content'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
              </div>
            </article>
          </div>
          <div className='tile is-parent is-8'>
            <article className='tile is-child box'>
              {/* <p className='title'>Main column</p>
                <p className='subtitle'>With some content</p> */}
              <div className='content'>
                <MapWrapped
                  googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${
                    process.env.GATSBY_APP_GOOGLE_KEY
                  }`}
                  loadingElement={<div style={{ height: `100%` }} />}
                  containerElement={<div style={{ height: `100%` }} />}
                  mapElement={<div style={{ height: `100%` }} />}
                />
              </div>
            </article>
          </div>
        </div>

      </section>
      <section>
        <Footer
          logo={footer.logo}
          email={footer.email}
          newsletter={footer.newsletter}
        />
      </section>
    </Fragment>
  )
}
// }

StoreLocatorPage.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  heading: PropTypes.string,
  navbar: PropTypes.shape({
    logo: PropTypes.string,
  }),
  footer: PropTypes.shape({
    logo: PropTypes.string,
    email: PropTypes.string,
    newsletter: PropTypes.string,
  }),
  meta_title: PropTypes.string,
  meta_description: PropTypes.string,
}

export default StoreLocatorPage
