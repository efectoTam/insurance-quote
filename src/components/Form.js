import React, { useState } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { getYearDifference, calculateBrand, getPlan } from '../helper';

const Field = styled.div`
  display: flex;
  margin-bottom: 1rem;
  align-items: center;
`;

const Label = styled.label`
  flex: 0 0 100px;
`;

const Select = styled.select`
  display: block;
  width: 100%;
  padding: 1rem;
  border: 1px solid #e1e1e1;
  --webkit-appearance: none;
`;

const InputRadio = styled.input`
  margin: 0 1rem;
`;

const Button = styled.button`
  background-color: #00838F;
  font-size: 16px;
  width: 100%;
  padding: 1rem;
  color: #FFFFFF;
  text-transform: uppercase;
  font-weight: bold;
  border: none;
  transition: background-color .3s ease;
  margin-top: 2rem;

  &:hover {
    background-color: #26C6DA;
    cursor: pointer;
  }
`;

const Error = styled.div`
  background-color: red;
  color: white;
  padding: 1rem;
  text-align: center;
  margin-bottom: 2rem;
`;

const Form = ({ saveSummary, loadingSave }) => {

  const [ data, saveData ] = useState({
    brand: '',
    year: '',
    plan: ''
  });

  const [error, saveError] = useState(false);

  // extract state values
  const { brand, year, plan } = data;

  // read form info and put on the state
  const getInformation = e => {
    saveData({
      ...data,
      [e.target.name]: e.target.value
    })
  }

  // when the user press submit
  const quoteInsurance = e => {
    e.preventDefault();
    if(brand.trim() === '' || year.trim() === '' || plan.trim() === '') {
      saveError(true);
      return;
    }

    saveError(false);

    // 2000 as a base
    let result = 2000;

    // Years difference
    const difference = getYearDifference(year);

    // For every year we should subtract 3%
    result -= (( difference * 3) * result) /100;

    // American 15%
    // Asian 5%
    // European 30%
    result = calculateBrand(brand) * result;
    
    // Basic rise 20%
    // Complete rise 50%
    const planIncrease = getPlan(plan);
    result = parseFloat(planIncrease * result).toFixed(2);

    loadingSave(true);

    setTimeout(() => {
      // Removing spinner
      loadingSave(false);
      // Total
      saveSummary({
        estimate: Number(result),
        data
      })
    }, 3000);
  }

  return (
    <form
      onSubmit={quoteInsurance}
    >
      {error
        ? <Error>Todos los campos son obligatorios</Error>
        : null
      }
      <Field>
        <Label>Marca</Label>
        <Select
          name="brand"
          value={brand}
          onChange={getInformation}
        >
          <option value="">-- Seleccione --</option>
          <option value="americano">Americano</option>
          <option value="europeo">Europeo</option>
          <option value="asiatico">Asiático</option>
        </Select>
      </Field>
      <Field>
        <Label>Año</Label>
        <Select
          name="year"
          value={year}
          onChange={getInformation}
        >
          <option value="">-- Seleccione --</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
          <option value="2017">2017</option>
          <option value="2016">2016</option>
          <option value="2015">2015</option>
          <option value="2014">2014</option>
          <option value="2013">2013</option>
          <option value="2012">2012</option>
        </Select>
      </Field>
      <Field>
        <Label>Plan</Label>
        <InputRadio
          type="radio"
          name="plan"
          value="basico"
          checked={plan === "basico"}
          onChange={getInformation}
        /> Básico
        <InputRadio
          type="radio"
          name="plan"
          value="completo"
          checked={plan === "completo"}
          onChange={getInformation}
        /> Completo
      </Field>
      <Button type="submit">Cotizar</Button>
    </form>
  );
}

Form.propTypes = {
  saveSummary: PropTypes.func.isRequired,
  loadingSave: PropTypes.func.isRequired
}

export default Form;