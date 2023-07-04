import { NextResponse } from "next/server";
import courses from '../../data.json'
console.log(courses);
const index = () => {
    
  return (
    <>
    </>
  )
}

export default index

export async function GET( ) {
    return NextResponse.json(courses);
}