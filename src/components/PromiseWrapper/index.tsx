import React from 'react';

export interface PromiseWrapperProps {
  children: Promise<React.ReactNode>;
}

export interface PromiseWrapperState {
  promiseState: 'fulfilled' | 'error' | 'loading';
  children?: React.ReactNode;
}


/**
 * Component for wrapping promises.
 *
 * @export
 * @class PromiseWrapper
 * @extends {React.Component<PromiseWrapper, PromiseWrapperState>}
 */
export class PromiseWrapper extends React.Component<PromiseWrapperProps, PromiseWrapperState> {
  constructor(props: PromiseWrapperProps) {
    super(props);

    this.state = {
      promiseState: 'loading'
    };
  }

  async componentDidMount() {
    try {
      const children = await this.props.children;
      this.setState({ children, promiseState: 'fulfilled' });
    } catch (err) {
      this.setState({ promiseState: 'error' });
    }
  }

  render() {
    const { promiseState, children } = this.state;

    if (promiseState !== 'fulfilled') {
      return promiseState;
    }

    return children;
  }
}
