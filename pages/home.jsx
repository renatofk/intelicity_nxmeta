import React, { useEffect } from 'react'
import Cookies from 'js-cookie'
import Router from 'next/router'
import Script from 'next/script';


export default function Home() {
  const token = Cookies.get('token')

  // useEffect(() => {
  //   if (!token) {
  //     Router.push('/')
  //   }
  // }, [])

  const logout = () => {
    Cookies.remove('token')
    Router.push('/')
  }
  const reload = () => {
    window.location.reload();
  }

  return (
    <>
    <Script src="https://cdnjs.cloudflare.com/ajax/libs/blueimp-md5/2.10.0/js/md5.js" />
    <Script src="https://cdn.jsdelivr.net/npm/hls.js@latest/dist/hls.min.js" />
    <Script src="https://code.jquery.com/jquery-3.6.0.min.js" 
            integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" 
            crossorigin="anonymous" />
    <Script
        src="NxMeta.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated 1`)
        }
    />
    <div className='w-full h-screen flex items-center justify-center text-white bg-indigo-700 flex-col tracking-widest'>
      <p className='text-4xl font-extrabold mb-4'>Welcome to Intelicity</p>
      <video  id="video" controls></video>
      <div> 
        <button onClick={reload} className='bg-white border-2 border-white hover:bg-transparent transition-all text-indigo-700 hover:text-white font-semibold text-lg  px-4 py-2 mt-5 rounded duration-700 mr-5'>Reload</button>
        <button onClick={logout} className='bg-white border-2 border-white hover:bg-transparent transition-all text-indigo-700 hover:text-white font-semibold text-lg  px-4 py-2 mt-5 rounded duration-700 '>Logout</button>
      </div>
    </div>
    </>
  )
}
