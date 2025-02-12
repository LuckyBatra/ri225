import React from 'react'
import list from '../list.json'
import Cards from "../components/Cards"

function Course() {
  return (
    <>
    <div>
      <h1> All Courses</h1>
      </div>
<div className='mt-12 grid grid-cols-1 md:grid-col-3'>
{
  list.map((item)=>(
    <Cards key={item.id} item={item}/>
  ))
}

</div>
</>
  );
}


export default Course