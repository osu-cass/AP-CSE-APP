import { StyleSheet } from '@react-pdf/renderer';

export interface DocumentStyles {
  page: object;
  flexContainer: object;
  pageNumber: object;
  numberContainer: object;
  flexImage: object;
  header: object;
  headerText: object;
  headerElement: object;
  logo: object;
  border: object;
  flexRow: object;
  flexColumnLeft: object;
  flexColumnRight: object;
  flexSingleRow: object;
  item: object;
  desc: object;
  code: object;
  description: object;
  flexContent: object;
  bold: object;
  contentBox: object;
  bulletHeader: object;
  bulletpoint: object;
  rightcolumn: object;
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
    textAlign: 'right',
    fontFamily: 'PTSansCaptionBold'
  },
  flexColumnRight: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    width: '75%',
    padding: 10,
    paddingLeft: 8,
    paddingTop: 10,
    borderTop: '1pt solid black',
    borderBottom: '1pt solid black',
    borderRight: '2pt solid black',
    fontSize: 12,
    marginRight: 4
  },
  flexSingleRow: {
    borderTop: '1pt solid black',
    borderRight: '2pt solid black',
    borderLeft: '2pt solid black',
    borderBottom: '1pt solid black',
    fontSize: 12,
    padding: '5pt',
    width: '100%',
    marginBottom: '-1pt'
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
    maxWidth: '100%',
    paddingBottom: 3,
    margin: 5
  },
  description: {
    display: 'flex',
    maxHeight: '100%',
    padding: 5,
    margin: 5,
    fontFamily: 'PTSansCaption'
  },
  bold: {
    fontFamily: 'PTSansCaptionBold'
  },
  contentBox: {
    justifyContent: 'space-around'
  },
  headerElement: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    width: '100%',
    fontSize: 12,
    textAlign: 'left'
  },
  headerText: {
    left: 0,
    position: 'absolute',
    alignSelf: 'flex-start',
    textAlign: 'left',
    minWidth: '80%',
    marginBottom: '10pt'
  },
  logo: {
    width: '20%',
    marginBottom: '10pt'
  },
  bulletHeader: {
    padding: '2pt',
    display: 'flex',
    border: '1pt solid pink'
  },
  rightcolumn: {
    border: '2pt solid blue'
  },
  bulletpoint: {
    width: '100%',
    display: 'flex'
  }
}) as DocumentStyles;
