// import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
// import PDFDocument from './assets/components/PDFDocument';
import { useState } from 'react';
import { AuthContext } from './contexts/AuthContext';
import Ways from './routes';

const App = () => {

  const [estaLogado, setEstaLogado] = useState(true);

  return (
    <>
      <AuthContext.Provider value={{ estaLogado, setEstaLogado }}>
        <Ways />
      </AuthContext.Provider>
    </>
  );

};

export default App;