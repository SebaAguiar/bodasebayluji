'use client'
/****************************************************************************************************************************************************
 * * IMPORTS
 ****************************************************************************************************************************************************/

import PageLayout from '@/layouts/PageLayout';
import { trpc } from '@/utils/trpc';
import React, { useState } from 'react'
import styles from '@/styles/landingStyles.module.css'

/****************************************************************************************************************************************************
 * * TYPES - INTERFACES - CLASES
 ****************************************************************************************************************************************************/


/****************************************************************************************************************************************************
 * * DECLARATIONS
 ****************************************************************************************************************************************************/


/****************************************************************************************************************************************************
 * * FUNCTIONS
 ****************************************************************************************************************************************************/

const ContactPage = () => {

  const [fullname, setFullname] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  const handleInputChange = (e: any) => {
    if (e.target.name === "email") {
      setEmail(e.target.value);
    }
    if (e.target.name === "fullname") {
      setFullname(e.target.value);
    }
    if (e.target.name === "subject") {
      setSubject(e.target.value);
    }
    if (e.target.name === "message") {
      setMessage(e.target.value);
    }
  };

  const handleSubmit = async () => {
    const messageTosend = {
      email,
      subject,
      fullname,
      message,
    };
    if (!messageTosend.email) {
    }
    await trpc.contact.saveClientMessage.mutate(messageTosend);
  };

  return (
    <PageLayout>
      <div className="w-1/3 h-32 mt-10 md:mb-2 lg:mb-8 md:ml-8 lg:ml-18 xl:ml-24">
        <div id={styles.websiteDecoration} className="w-full h-full"></div>
        </div>
      <h1>Tienes alguna pregunta?</h1>
      <form
          className="w-full text-dark-white font-light flex flex-col justify-center items-center"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col-reverse w-2/3">
            <input
              className="bg-dark-black border-2 border-dark-white rounded-md focus:border-dark-white mt-2 mb-2"
              name="email"
              type="email"
              onChange={handleInputChange}
              value={email}
              required
            />
            <label htmlFor="email">Email:</label>
          </div>
          <div className="flex flex-col-reverse w-2/3">
            <input
              className="bg-dark-black border-2 border-dark-white rounded-md focus:border-dark-white mt-2 mb-2"
              name="fullname"
              type="text"
              onChange={handleInputChange}
              value={fullname}
              required
            />
            <label htmlFor="fullname">Full Name:</label>
          </div>
          <div className="flex flex-col-reverse w-2/3">
            <input
              className="bg-dark-black border-2 border-dark-white rounded-md focus:border-dark-white mt-2 mb-2"
              name="subject"
              type="text"
              onChange={handleInputChange}
              value={subject}
              required
            />
            <label htmlFor="subject">Subject:</label>
          </div>
          <div className="flex flex-col-reverse w-2/3">
            <textarea
              className="bg-dark-black border-2 border-dark-white rounded-md focus:border-dark-white mt-2 mb-2"
              style={{ resize: "vertical", maxHeight: "150px" }}
              name="message"
              onChange={handleInputChange}
              value={message}
              required
            />
            <label htmlFor="message">Message:</label>
          </div>
          <button
            className="h-10 w-32 rounded-full bg-dark-black border-2 border-dark-white font-semibold text-dark-white mt-4 duration-300"
            type="submit"
          >
            Send
          </button>
        </form>
        <div className="w-1/3 h-32 mt-10 md:mb-2 lg:mb-8 md:mr-8 lg:mr-18 xl:mr-24">
        <div id={styles.websiteDecoration} className="w-full h-full transform scale-y-[-1] scale-x-[-1]"></div>
        </div>
    </PageLayout>
  )
}

/****************************************************************************************************************************************************
 * * EXPORTS
 ****************************************************************************************************************************************************/

export default ContactPage
