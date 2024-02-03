// import { Document, Page, View, Text } from "react-pdf";

import { Document, Image, Page, StyleSheet, Text, View } from "@react-pdf/renderer";
import brasao from '../brasao_ceara.png'
import { Html } from "react-pdf-html";

const PDFDocument = () => {

    const tabela = `
        <table border='1'>
            <tr>
                <td>Visitantes total</td>
                <td>1000</td>
            </tr>
            <tr>
                <td>Visitantes masculinos</td>
                <td>200</td>
            </tr>
            <tr>
                <td>Visitantes femininos</td>
                <td>700</td>
            </tr>
            <tr>
                <td>Visitantes outros</td>
                <td>100</td>
            </tr>
        </table>
    `;

    const styles = StyleSheet.create({
        container: {
            position: 'relative'
        },
        bg_imagem: {
            width: '50%',
            position:'absolute',
            left: '25%',
            top: '25%',
            opacity: .1,
            zIndex: 1
        },
        main: {
            width:'100%',
            height: '100%',
            padding: '10px',
            position:'absolute',
            zIndex: 2
        }
    });

    return (
        <>
            <Document style={styles.container}>
                <Page size={'A4'}>
                    <Image src={brasao} style={styles.bg_imagem}/>
                    <View style={styles.main}>
                        <Text >{'Hello Word'}</Text>
                        <Html>{tabela}</Html>
                    </View>
                </Page>
            </Document>
        </>
    );
}

export default PDFDocument;