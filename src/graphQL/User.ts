import { gql } from "@apollo/client";

export const GET_ALL = gql`
    query{
        folders {
            id
            name
            author {
            id
            name
            }
        } 
    }
`