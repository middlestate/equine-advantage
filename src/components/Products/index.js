import React, { Fragment } from 'react'
// import { Link } from 'gatsby'
import PropTypes from 'prop-types'

const Products = ({ gridItems, logo }) => (
  <Fragment>
    <div className='columns is-centered '>
      <div className='column is-four-fifths'>
        <div className='columns is-multiline is-centered '>
          {gridItems.map((item, keys) => (
            <div key={keys} className='column is-one-third'>
              <section className='section '>
                <div className='columns is-centered is-multiline is-mobile'>
                  <div className='column is-half is-horizontal-center'>
                    <a href={`/about/${item.slug}`}>
                      <figure className='image is-128x128 has-shadow'>
                        <img src={item.image} />
                      </figure>
                    </a>
                  </div>
                  <div className='column is-12'>
                    <h3
                      className='is-size-5 has-text-ea-black is-Gilroy-black'
                      style={{ marginTop: "4rem", paddingTop: 40 }}>
                      {item.name}
                    </h3>
                    <p
                      className='has-text-ea-black is-Gilroy-light'
                      style={{ paddingTop: 0 }}>
                      {item.text}
                    </p>
                  </div>
                </div>
              </section>
            </div>
          ))}
        </div>
      </div>
    </div>
    <div className='columns is-centered'>
      <div className='column is-half'>
        <div className='columns is-mobile is-centered level'>
          {logo.map((logo, keys) => (
            <div key={keys} className='column is-one-forth has-text-centered'>
              <figure className='image is-128x128-desktop is-96x96-mobile level-item'>
                <img alt='partner logo' src={logo.image} />
              </figure>
            </div>
          ))}
        </div>
      </div>
    </div>
  </Fragment>
)

Products.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string,
      slug: PropTypes.string,
      name: PropTypes.string,
      text: PropTypes.string,
    })
  ),
  logo: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string,
    })
  ),
}

export default Products
