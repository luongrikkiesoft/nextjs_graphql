import { gql } from "@apollo/client";

export const company = gql`
  query Spacex {
    company {
        ceo
        cto
        name
        summary
        founder
        employees
      }
      roadster {
        apoapsis_au
      }
  }
`