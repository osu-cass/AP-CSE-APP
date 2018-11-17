import React from 'react';
import { RouteComponentProps } from 'react-router';
import { IClaim } from '../../models/claim';
import { ITargetClient } from '../../clients/target';
import { genericLayout } from '../../components/GenericPage/GenericLayout';
import { TargetTitleBar } from './title';
import { Message, ErrorMessage } from '../../components/Filter/Messages';
import { TargetDetail } from '../../components/TargetComponents/TargetDetail';

export interface TargetMatchParams {
  target?: string;
}

export interface TargetPageProps extends RouteComponentProps<TargetMatchParams> {
  client: ITargetClient;
}

export interface TargetPageState {
  target?: string;
  result?: IClaim;
  loaded: boolean;
}

export class TargetPage extends React.Component<TargetPageProps, TargetPageState> {
  constructor(props: TargetPageProps) {
    super(props);
    this.state = {
      target: props.match.params.target,
      loaded: false
    };
  }

  async componentDidMount() {
    if (!this.state.target) {
      this.setState({ loaded: true });

      return;
    }

    try {
      const result = await this.props.client.getTarget({ targetShortCode: this.state.target });
      this.setState({ result, loaded: true });
    } catch (err) {
      this.setState({ loaded: true });
    }
  }

  render() {
    if (!this.state.loaded) {
      return <Message>Loading...</Message>;
    }
    if (!this.state.result) {
      return <ErrorMessage>Error loading target {this.state.target}.</ErrorMessage>;
    }

    const Page = genericLayout(<TargetTitleBar claim={this.state.result} />, TargetDetail);

    return <Page target={this.state.result.target[0]} />;
  }
}
