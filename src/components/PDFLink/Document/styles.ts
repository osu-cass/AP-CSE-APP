import { StyleSheet } from '@react-pdf/renderer';

export interface DocumentStyles {
  page: object;
  flexContainer: object;
  pageNumber: object;
  numberContainer: object;
  flexImage: object;
  header: object;
  border: object;
  flexRow: object;
  flexColumnLeft: object;
  flexColumnRight: object;
  item: object;
  desc: object;
  code: object;
  description: object;
  flexContent: object;
  bold: object;
}

export const styles: DocumentStyles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
    padding: 10,
    paddingBottom: 60,
    paddingTop: 30,
    fontFamily: 'PTSansCaption'
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
    color: 'black',
    fontFamily: 'PTSansCaption'
  },
  numberContainer: {
    height: '25pt',
    position: 'relative'
  },
  flexImage: {
    display: 'flex',
    alignItems: 'right',
    paddingRight: '20pt'
  },
  header: {
    fontSize: 12
  },
  border: {
    border: '1pt solid red'
  },
  flexRow: {
    flexDirection: 'row',
    maxHeight: '100%'
  },
  flexColumnLeft: {
    display: 'flex',
    width: '25%',
    padding: 5,
    paddingRight: 8,
    paddingTop: 10,
    borderTop: '1pt solid black',
    borderRight: '2pt solid black',
    borderBottom: '1pt solid black',
    borderLeft: '2pt solid black',
    fontSize: 12,
    textAlign: 'right'
  },
  flexColumnRight: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    width: '70%',
    padding: 10,
    paddingLeft: 8,
    paddingTop: 10,
    borderTop: '1pt solid black',
    borderBottom: '1pt solid black',
    borderRight: '2pt solid black',
    fontSize: 12,
    marginRight: 4
  },
  item: {
    display: 'flex',
    padding: '3pt',
    margin: 3
  },
  desc: {
    margin: 5
  },
  code: {
    textDecoration: 'bold'
  },
  flexContent: {
    display: 'flex',
    maxHeight: '100%',
    paddingBottom: 3,
    margin: 5
  },
  description: {
    display: 'flex',
    maxHeight: '100%',
    paddingBottom: 3,
    margin: 5
  },
  bold: {
    fontFamily: 'PTSansCaptionBold'
  }
}) as DocumentStyles;
