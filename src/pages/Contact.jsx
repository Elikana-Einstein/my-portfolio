import { faVoicemail } from '@fortawesome/free-solid-svg-icons/faVoicemail'
import React from 'react'
import FontAwesome from 'react-fontawesome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope'
import { faLocation, faPhone } from '@fortawesome/free-solid-svg-icons'
const Contact = () => {
  return (
    <div className='mb-10'>
        <h1 className='text-3xl text-center'>Get in touch</h1>
        <div className='flex flex-row justify-between mx-80 mt-10'>
            <div className='max-w-sm'>
                <h1>I'm always interested in hearing about new projects
                    and opportunities. Whether you have a question or
                    just want to say hi, feel free to reach out!</h1>
                <div className='mt-10 space-x-3'>
                    <div className='flex flex-row align-items-top space-x-1'>
                    <FontAwesomeIcon icon={faEnvelope} width={40} className="text-blue-500 mr-2 "  />
                    <div className='flex flex-col '>
                        <p>Email</p>
                        <a href="#">elikanamwangi41@gmail.com</a>
                    </div>
                    </div>
                 <div className='flex flex-row align-items-top space-x-1'>
                    <FontAwesomeIcon icon={faPhone} width={40} className="text-blue-500 mr-2 "  />
                    <div className='flex flex-col '>
                        <p>Phone</p>
                        <a href="#">+254712345678</a>
                    </div>
                </div>
                 <div className='flex flex-row align-items-top space-x-1'>
                    <FontAwesomeIcon icon={faLocation} width={40} className="text-blue-500 mr-2 "  />
                    <div className='flex flex-col '>
                        <p>Location</p>
                        <a href="#">Nairobi, Kenya</a>
                    </div>
                </div>
                </div>
           
            </div>
            <div>
                <h2>Name</h2>
                <input type="text" className='border border-gray-300 rounded-md p-2 w-full' placeholder='Your Name' />
                <h2 className='mt-4'>Email</h2>
                <input type="email" className='border border-gray-300 rounded-md p-2 w-full' placeholder='Your Email' />
                <h2 className='mt-4'>Message</h2>
                <textarea className='border border-gray-300 rounded-md p-2 w-full' placeholder='Your Message' rows={5} />
                <button className='bg-indigo-500 text-white px-4 py-2 rounded-md mt-4 hover:bg-indigo-600'>Send Message</button>
                

            </div>
        </div>
    </div>
    
  )
}

export default Contact