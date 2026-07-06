import React from 'react'

export default async function page({searchParams}:any) {
    const searchparam=await searchParams;
    const name=  searchparam.username;
    console.log(name);
  return (
    <div>page</div>
  )
}
