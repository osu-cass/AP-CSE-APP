// tslint:disable:no-any no-unsafe-any
declare module '@react-pdf/renderer' {
  import React from 'react';

  interface StyleSheet {
    create: (Object: any) => any;
  }

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
  }
  export const Document: React.SFC<DocumentProps>;

  interface PageProps {
    size?: string | Object | any[];
    orientation?: string;
    wrap?: boolean;
    style?: Object | any[];
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
    style?: Object | any[];
    render?: Function;
    debug?: boolean;
    fixed?: boolean;
    minPresenceAhead?: number;
  }
  export const View: React.SFC<ViewProps>;

  interface TextProps {
    wrap?: boolean;
    style?: Object | any[];
    render?: Function;
    debug?: boolean;
    fixed?: boolean;
    minPresenceAhead?: number;
    widows?: number;
    orphans?: number;
  }
  export const Text: React.SFC<TextProps>;

  interface LinkProps {
    wrap?: boolean;
    style?: Object | any[];
    render?: Function;
    debug?: boolean;
    fixed?: boolean;
  }
  export const Link: React.SFC<LinkProps>;

  interface ImageProps {
    src: string;
    style: Object | any[];
    debug?: boolean;
    fixed?: boolean;
  }
  export const Image: React.SFC<ImageProps>;

  interface NoteProps {
    style?: Object | any[];
    children: string;
    fixed?: boolean;
  }
  export const Note: React.SFC<NoteProps>;

  interface PDFViewerProps {
    style?: Object | Object[] | any | any[];
    className?: string;
  }
  export const PDFViewer: React.SFC<PDFViewerProps>;

  interface PDFDownloadLinkProps {
    document: Document;
    filename: string;
    style?: Object | any[];
    classname?: string;
    children: Function | Node;
  }
  export const PDFDownloadLink: React.SFC<PDFDownloadLinkProps>;
  export const StyleSheet: StyleSheet;
}
