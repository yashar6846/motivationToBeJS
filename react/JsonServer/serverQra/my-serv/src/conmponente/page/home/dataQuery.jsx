import { gql } from "@apollo/client";

export const GET_AllData= gql`
{
    allData{
      id
      name
      imageurl
      price
    }
  }
`

export const GET_DaById= gql`
query($id:ID!){
  Datum(id:$id){
    id
     name
    price
    imageurl
   }
 }
`