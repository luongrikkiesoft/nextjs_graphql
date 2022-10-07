import React from 'react'
import { company } from './api/queries'
import { useQuery, gql } from "@apollo/client";

function Spacex() {
    const { data, loading, error } = useQuery(company);
    console.log('data', data)
    
  return (
    <div>
      <h1>{data?.company?.name}</h1>
      <div>
        <span>CEO: {data?.company?.ceo}</span>
        <p>Employees count: {data?.company?.employees}</p>
        <p>Summary: {data?.company?.summary}</p>
      </div>
    </div>
  )
}

export default Spacex