import React, { Component, ComponentProps } from 'react';
import { IClaim } from '../../models/claim';
import { RouteComponentProps } from 'react-router';
import { TargetClient } from '../../clients/target';
import { Message, ErrorMessage } from '../../components/Message';
import { viewer } from '../../components/PDFLink';
import { PromiseWrapper } from '../../components/PromiseWrapper';

export interface PdfMatchParams {
  targetShortCode?: string;
}

export interface PdfDevProps extends RouteComponentProps<PdfMatchParams> {}

export interface PdfDevState {
  target?: string;
  claim?: IClaim;
  loaded: boolean;
}

/**
 * Search page react component. Handles text searching and filtering
 *
 * @export
 * @class Pdf-Dev Component
 * @extends {React.Component<PdfDevProps, PdfDevState>}
 */
export class PdfDevPage extends Component<PdfDevProps, PdfDevState> {
  constructor(props: PdfDevProps) {
    super(props);
    this.state = {
      target: props.match.params.targetShortCode,
      loaded: false
    };
  }

  async componentDidMount() {
    if (!this.state.target) {
      this.setState({ loaded: true });

      return;
    }

    const targetClient = new TargetClient();
    try {
      const claim = await targetClient.getTarget({ targetShortCode: this.state.target });
      this.setState({ claim, loaded: true });
    } catch (err) {
      this.setState({ loaded: true });
    }
  }

  render() {
    if (!this.state.loaded) {
      return <Message>Loading...</Message>;
    }

    if (!this.state.claim) {
      return <ErrorMessage>Error Loading Target</ErrorMessage>;
    }

    return <PromiseWrapper>{viewer({ claim: this.state.claim })}</PromiseWrapper>;
  }
}
