declare module '@react-pdf/renderer' {
  import React from 'react';

  interface DocumentProps {
    title?: string;
    author?: string;
    subject?: string;
    keywords?: string;
    creator?: string;
    producer?: string;
    onRender?: Function;
    shallow?: boolean;
    width?: string | number;
    height?: string | number;
    style?: Object;
    className?: string;
    children?: JSX.Element;
  }
  export const Document: React.SFC<DocumentProps>;

  interface PageProps {
    size?: string | object | Array<any>;
    orientation?: string;
    wrap?: boolean;
    style?: object | Array<any>;
    debug?: boolean;
    ruler?: boolean;
    rulerSteps?: number | string;
    verticalRuler?: boolean;
    verticalRulerSteps?: number | string;
    horizontalRuler?: boolean;
    horizontalRulerSteps?: number | string;
  }
  export const Page: React.SFC<PageProps>;

  interface ViewProps {
    wrap?: boolean;
    style?: object | Array<any>;
    render?: Function;
    debug?: boolean;
    fixed?: boolean;
  }
  export const View: React.SFC<ViewProps>;

  interface TextProps {
    wrap?: boolean;
    style?: object | Array<any>;
    render?: Function;
    debug?: boolean;
    fixed?: boolean;
  }
  export const Text: React.SFC<TextProps>;

  interface LinkProps {
    wrap?: boolean;
    style?: object | Array<any>;
    render?: Function;
    debug?: boolean;
    fixed?: boolean;
  }
  export const Link: React.SFC<LinkProps>;

  interface ImageProps {
    src: string;
    style: object | Array<any>;
    debug?: boolean;
    fixed?: boolean;
  }
  export const Image: React.SFC<ImageProps>;

  interface NoteProps {
    style?: object | Array<any>;
    children: string;
    fixed?: boolean;
  }
  export const Note: React.SFC<NoteProps>;

  interface PDFViewerProps {
    style?: Object;
    className?: string;
    children?: JSX.Element;
  }
  export const PDFViewer: React.SFC<PDFViewerProps>;

  interface PDFDownloadLinkProps {
    document: Document;
    filename: string;
    style?: object | Array<any>;
    classname?: string;
    children: Function | Node;
  }
  export const PDFDownloadLink: React.SFC<PDFDownloadLinkProps>;
}
