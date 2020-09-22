import React from 'react';
import styled from '@emotion/styled';
import { uppercaseFirst } from '../helper'
import PropTypes from 'prop-types';

const SummaryContainer = styled.div `
  padding: 1rem;
  text-align: center;
  background-color: #00838F;
  color: #FFF;
  margin-top: 1rem;
`;

const Summary = ({ data }) => {
  //Extracting from data
  const { brand, year, plan } = data;
  
  if(brand === '' || year === '' || plan === '') return null;

  return (
    <SummaryContainer>
      <h2>Resumen de cotización</h2>
      <ul>
        <li>Marca: { uppercaseFirst(brand) }</li>
        <li>Plan: { uppercaseFirst(plan) }</li>
        <li>Año: {year}</li>
      </ul>
    </SummaryContainer>
  );
}

Summary.propTypes = {
  data: PropTypes.object.isRequired
}
 
export default Summary;