import { gql } from "@apollo/client";

export const CREAT_NowAll = gql`
mutation($imageurl: String!, $name: String!, $price: Int!) {
    createDatum(imageurl:$imageurl, name:$name, price:$price) {
      id
      name
      imageurl
      price
    }
  }
`

export const UPDATE_NowAll = gql`
mutation($id:ID!, $name: String!, $price: Int!,$imageurl: String!){
    updateDatum(id:$id, name:$name,price:$price,imageurl:$imageurl){
      id
      name
      price
      imageurl
    }
  }
`

export const DELETE_NowAll = gql`
mutation($id:ID!){
    removeDatum(id:$id){
      id
    }
  }
`