import React from 'react'

const Form = () => {
  return (
    <>
    <section name="contact" className='bg-white w-full h-full my-10 '>
    <div className="grid place-items-start mx-auto max-w-4xl px-10">
        <h1 className="text-left w-fit p-2 text-xl lg:text-2xl  border-4 border-t-0 rounded-xl border-sky-400 font-medium">CONTACT ME</h1>
        <p className='mt-8 text-lg lg:text-xl'>If you could kindly send an email to <a className="text-sky-500 hover:text-sky-600" href="mailto:ft.rajender@gmail.com">ft.rajender@gmail.com</a>, that would be much appreciated</p>
      </div>
    <form  action="https://getform.io/f/cb9739f5-e237-40fa-95b6-c0f0a9c3d99a" method="POST" className='max-w-4xl p-10 grid place-items-center h-full mx-auto'>
            <input className='w-full border-2 p-2.5 my-2 rounded-md shadow-inner shadow-gray-800 outline-none  ' type="Name" name="name" placeholder='Name'/>
            <input className='w-full border-2 p-2.5 my-2 rounded-md shadow-inner shadow-gray-800 outline-none  ' type="Email" name="email" placeholder='Email' />
            <textarea className='w-full border-2 p-2.5 my-2 rounded-md shadow-inner shadow-gray-800 outline-none ' name="message" id="" cols="30" rows="4" placeholder='Message'></textarea>
            <button className='w-36 h-12 bg-sky-500 mx-auto my-4 lg:my-6 rounded-md lg:animate-bounce duration-300 lg:hover:animate-none hover:bg-sky-400'>Lets Collaborate</button>
        </form>
    </section>
    </>
  )
}

export default Form
