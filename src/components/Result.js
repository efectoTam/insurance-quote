import React from 'react';
import styled from '@emotion/styled';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';

const Message = styled.p `
  background-color: rgb(127, 224, 237);
  margin-top: 2rem;
  padding: 1rem;
  text-align: center;
`;

const EstimateResult = styled.div `
  text-align: center;
  padding: .5rem;
  border: 1px solid #26C6DA;
  background-color: rgb(127, 224, 237);
  margin-top: 1rem;
  position: relative;
`;

const EstimateText = styled.p `
  color: #00838F;
  padding: 1rem;
  text-transform: uppercase;
  font-weight: bold;
  margin: 0;
`;

const Result = ({ estimate }) => {
  return (
    (estimate === 0)
    ? <Message>Elige marca, año y tipo de seguro</Message>
    : (
      <EstimateResult>
        <TransitionGroup
          component="span"
          className="resultado"
        >
          <CSSTransition
            classNames="resultado"
            key={ estimate }
            timeout={{ enter: 500, exit: 500}}
          >
            <EstimateText>El total es $ <span>{ estimate }</span></EstimateText>
          </CSSTransition>
        </TransitionGroup>
      </EstimateResult>
    )
  )
}

Result.propTypes = {
  estimate: PropTypes.number.isRequired
}
 
export default Result;