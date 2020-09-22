import React, { useState } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Summary from './components/Summary';
import Result from './components/Result';
import Spinner from './components/Spinner';
import styled from '@emotion/styled';

const Container = styled.div `
  max-width: 600px;
  margin: 0 auto;
`;

const FormContainer = styled.div`
  background-color: #FFF;
  padding: 3rem;
`;

function App() {
  const [summary, saveSummary] = useState({
    estimate: 0,
    data: {
      brand: '',
      year: '',
      plan: ''
    }
  });

  const [ loading, loadingSave] = useState(false);

  // Extract data
  const { estimate, data } = summary;

  return (
    <Container>
      <Header
        title="Cotizador de seguros"
      />
      <FormContainer>
        <Form
          saveSummary={saveSummary}
          loadingSave={loadingSave}
        />
        {loading 
          ? <Spinner />
          : null
        }
        <Summary
          data={data}
        />
        {!loading
          ? <Result estimate={estimate} />
          : null
        }
      </FormContainer>
    </Container>
  );
}

export default App;
