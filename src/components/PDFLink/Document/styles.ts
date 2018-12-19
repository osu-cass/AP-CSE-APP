import { StyleSheet } from '@react-pdf/renderer';
import { DocumentStyles } from './DocumentModels';

export const styles: DocumentStyles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
    padding: 10,
    paddingBottom: 60,
    paddingTop: 30
  },
  flexContainer: {
    display: 'flex'
  },
  pageNumber: {
    position: 'absolute',
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: 'center',
    color: 'black'
  },
  numberContainer: {
    height: '25px',
    position: 'relative'
  },
  flexImage: {
    display: 'flex',
    alignItems: 'right',
    paddingRight: '20px'
  },
  header: {
    fontSize: 12
  },
  border: {
    border: '1px solid red'
  }
}) as DocumentStyles;
