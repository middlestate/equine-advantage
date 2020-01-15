import React, { Fragment } from 'react'
// import { Link } from 'gatsby'
import Content from '../Content'
// import NavBar from '../NavBar'
import Quote from '../Quote'
// import Footer from '../Footer'
import Carousel from '../Carousel'

const AboutPageTemplate = ({
  content,
  contentComponent,
  title,
  heading,
  subheading,
  font_color,
  heading_image,
  hero_image,
  product_image,
  advantages,
  partners,
  quote,
  md_stuff,
  meta_title,
  meta_description,
}) => {
  const PostContent = contentComponent || Content
  return (
    <Fragment>
      <div className='section hero is-large is-ea-black is-marginless is-paddingless' style={{
        background: `#000000 url(${hero_image.image})  center/cover no-repeat `,
      }}>
        <div
          className='hero-body '
          style={{
            backgroundColor: 'rgba(0,0,0,.5)',
          }}>
          <div className='columns'>
            <div className='column is-4 is-offset-3'>
              <div className={`title is-size-2 is-size-3-mobile is-Gilroy-bold ${font_color}`}>{heading}</div>
              <div className='subtitle is-Gilroy-light has-text-light-grey is-size-5'>{subheading}</div>
            </div>
          </div>
        </div>
      </div>
      {/* Product Section */}
      <div className='section' style={{ marginBottom: 20 }}>
        <div className='container content'>
          <div className='columns is-centered-mobile'>
            <div className='column is-full '>
              <div className='tile is-ancestor is-paddingless is-marginless'>
                <div className='tile is-5 is-parent is-paddingless'>
                  <div className='tile is-child'>
                    {/* Product Image */}
                    <figure className='image has-shadow'>
                      <img style={{ paddingRight: 5, width: '80%' }} src={product_image} alt={subheading} />
                    </figure>
                  </div>
                </div>
                {/* Ingredients */}
                <div className='tile is-7-mobile is-10 is-parent is-marginless is-paddingless'>
                  <div className='tile is-child'>
                    <div className='is-size-6 is-size-7-mobile md-content' style={{ }}>
                      <PostContent content={content} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Advantages */}
      <div className='section' style={{ paddingTop: 20 }}>
        <div className='columns is-multiline is-centered is-mobile'>
          {advantages.icon.map((images, keys) => (
            <div key={keys} className='column is-3-mobile is-offset-1-mobile is-1-desktop is-block'>
              <figure className='image is-64x64' >
                <img src={images.image} alt='an advantage icon' />
              </figure>
            </div>
          ))}
        </div>
      </div>
      {/* Partners */}
      <div className='section'>
        <div className='columns is-multiline is-centered is-mobile'>
          {!partners ||
            partners.logo.map((images, keys) => (
              <div key={keys} className='column is-4-mobile is-1-desktop is-block'>
                <figure className='image is-96x96' >
                  <img src={images.image} alt='an advantage icon' />
                </figure>
              </div>
            ))}
        </div>
      </div>
      {/* Quote */}
      <div className='section is-marginless is-paddingless'>
        {!quote || <Quote text={quote.text} name={quote.name} title={quote.title} image={quote.image} />}
      </div>
      {/* Carousel */}
      <div className='section is-light-grey'>
        <Carousel />
      </div>
      {/* Footer */}
      <div className='section is-paddingless is-marginless' style={{ marginTop: 50, paddingTop: 50 }}>
        {/* <Footer logo={footer.logo} email={footer.email} newsletter={footer.newsletter} /> */}
      </div>
    </Fragment>
  )
}

export default AboutPageTemplate
