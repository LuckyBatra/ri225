import React from 'react'

function Banner() {
  return (
    <div className="max-w-screen-2x1 container mx-auto md:px-20 px-4 flex flex-col md:flex-row">
<div className="w-full md:w=1/2">
<div className='space-y-6'>
<h1 className="text-4x1 font-bold">
WELCOME TO OUR DAILY LEARNING ADVENTURE!

Discover something new every day!
</h1>
<li>- Expand your knowledge and spark new ideas </li>
<li> Explore new subjects and interests with expert guidance </li>
<li> Connect with like-minded learners and grow together </li>
<li> Unlock your potential and achieve your goals </li>
<li> Stay curious, stay informed, and stay ahead! </li>
</div>
</div>

<div className="w-full md:w=1/2">
<img src='back5.jpg' className='w-80 h80'/>
</div>

    </div>
  )
}

export default Banner 