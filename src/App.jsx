import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import PDFDocument from './assets/components/PDFDocument';

const App = () => {

  return (
    <>
      <PDFViewer>
        <PDFDocument />
      </PDFViewer>
      <PDFDownloadLink document={<PDFDocument />} fileName={'registros.pdf'}>Baixar PDF</PDFDownloadLink>
    </>
  );

};

export default App;