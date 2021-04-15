import React from 'react';
import { Button } from '@material-ui/core';

// fazendo a importação do components
import Layout from '../components/Layout';

export default function Home() {
  return (
    // substituir div por Layout
    <Layout title="Tubers">
      Tubers, aprendendo next.js + material-ui
       <Button color="primary">Hello World</Button>
    </Layout>
  );
}
