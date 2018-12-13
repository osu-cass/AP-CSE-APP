import React from 'react';
import { RouteComponentProps } from 'react-router';
import { IClaim } from '../../models/claim';
import { ITargetClient, TargetClient } from '../../clients/target';
import { genericLayout } from '../../components/GenericPage/GenericLayout';
import { TargetTitleBar } from '../../components/TargetComponents/title';
import { Message, ErrorMessage } from '../../components/Message';
import { TargetDetail } from '../../components/TargetComponents/TargetDetail';
import { FilterClient } from '../../clients/filter';
import { CSEFilterParams, CSEFilterOptions } from '../../models/filter';
import { SearchBaseModel } from '@osu-cass/sb-components';

export interface TargetMatchParams {
  targetShortCode?: string;
}

export interface TargetPageProps extends RouteComponentProps<TargetMatchParams> {}

export interface TargetPageState {
  target?: string;
  result?: IClaim;
  loaded: boolean;
  targetList?: SearchBaseModel[];
}

/**
 * Class that handles placing the target page components in the generic page layout
 * @class{TargetPage}
 */
export class TargetPage extends React.Component<TargetPageProps, TargetPageState> {
  constructor(props: TargetPageProps) {
    super(props);
    this.state = {
      target: props.match.params.targetShortCode,
      loaded: false
    };
  }

  unWrapError<T>(data?: T | Error): T | undefined {
    if (!data) {
      return undefined;
    }

    return data instanceof Error ? undefined : data;
  }

  async componentDidMount() {
    if (!this.state.target) {
      this.setState({ loaded: true });

      return;
    }

    const targetClient = new TargetClient();
    const filterClient = new FilterClient();
    try {
      const claim = await targetClient.getTarget({ targetShortCode: this.state.target });
      const filterParams: CSEFilterParams = {
        subject: claim.subject,
        grades: claim.grades,
        claim: claim.claimNumber
      };
      const targetListResult = await filterClient.getFilterOptions(filterParams);
      const targetListError: CSEFilterOptions | undefined = this.unWrapError(targetListResult);
      const targetList: SearchBaseModel[] | undefined = targetListError
        ? targetListError.targets
        : undefined;

      this.setState({ targetList, result: claim, loaded: true });
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

    const Page = genericLayout(
      <TargetTitleBar claim={this.state.result} targetList={this.state.targetList} />,
      TargetDetail
    );

    return <Page target={this.state.result.target[0]} />;
  }
}
