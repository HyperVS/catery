import React from 'react'
import { useParams } from 'react-router-dom'

const ContractorDashCardOpen = ({price}) => {
   const {id} = useParams()
  return (

    <div>{id}</div>
  )
}

export default ContractorDashCardOpen