import React from 'react'
import {GetStaticProps, NextPage} from 'next'
import * as Icon from 'react-feather'
import SectionTitle from 'src/components/SectionTitle'
import db from 'src/data/database'

type ContactPage = {
  phoneNumbers: any[]
  emailAddress: any[]
  address: any[]
}

const ContactPage: NextPage<ContactPage> = ({phoneNumbers, emailAddress, address}) => {
  return (
    <>
      <div className="mi-contact-area mi-section mi-padding-top mi-padding-bottom">
        <div className="container">
          <SectionTitle title="Contact Me"/>
          <div className="row">
            <div className="col-lg-6">
              <div className="mi-contact-info">
                {!phoneNumbers ? null : (
                  <div className="mi-contact-infoblock">
                    <span className="mi-contact-infoblock-icon">
                      <Icon.Phone/>
                    </span>
                    <div className="mi-contact-infoblock-content">
                      <h6>Phone</h6>
                      {phoneNumbers.map(phoneNumber => (
                        <p key={phoneNumber}><a href={phoneNumber}>{phoneNumber}</a>
                        </p>
                      ))}
                    </div>
                  </div>
                )}
                {!emailAddress ? null : (
                  <div className="mi-contact-infoblock">
                    <span className="mi-contact-infoblock-icon">
                      <Icon.Mail/>
                    </span>
                    <div className="mi-contact-infoblock-content">
                      <h6>Email</h6>
                      {emailAddress.map(email => (
                        <p key={email}><a href={`mailto:${email}`}>{email}</a>
                        </p>
                      ))}
                    </div>
                  </div>
                )}
                {!phoneNumbers ? null : (
                  <div className="mi-contact-infoblock">
                    <span className="mi-contact-infoblock-icon">
                      <Icon.MapPin/>
                    </span>
                    <div className="mi-contact-infoblock-content">
                      <h6>Address</h6>
                      <p>{address}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      phoneNumbers: db.contactInfo.phoneNumbers,
      emailAddress: db.contactInfo.emailAddress,
      address: db.contactInfo.address
    }
  }
}

export default ContactPage
