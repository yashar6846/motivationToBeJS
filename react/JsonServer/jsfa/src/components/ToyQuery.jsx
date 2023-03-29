import { gql } from "@apollo/client";

export const GET_ALLToys = gql`
query{
    allData{
      title
      readingTime
      imageurl
    }
  }
  
`