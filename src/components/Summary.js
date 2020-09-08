import React, { Fragment } from 'react';

const Summary = ({data}) => {
  //Extracting from data
  const { brand, year, plan } = data;
  
  if(brand === '' || year === '' || plan === '') return null;

  return (
    <Fragment>
      <h2>Resumen de cotización</h2>
      <ul>
        <li>Marca:</li>
        <li>Plan:</li>
        <li>Año:</li>
      </ul>
    </Fragment>
  );
}
 
export default Summary;