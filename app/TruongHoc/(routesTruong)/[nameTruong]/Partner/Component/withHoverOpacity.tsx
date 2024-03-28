'use client'
import React, { Component, ReactNode } from 'react';

interface HoverableComponentProps {
  src: string;
  width?: number;
  height?: number;
}

interface State {
  isHovered: boolean;
}

const withHover = <P extends HoverableComponentProps>(
  WrappedComponent: React.ComponentType<P>
): React.ComponentType<P> => {
  class WithHover extends Component<P, State> {
    constructor(props: P) {
      super(props);
      this.state = {
        isHovered: false,
      };
    }

    onMouseEnter = (): void => {
      this.setState({
        isHovered: true,
      });
    };

    onMouseLeave = (): void => {
      this.setState({
        isHovered: false,
      });
    };

    render(): ReactNode {
        return (
          <div
            style={{
              opacity: this.state.isHovered ? 0.5 : 1,
            }}
            onMouseEnter={this.onMouseEnter}
            onMouseLeave={this.onMouseLeave}
          >
            <WrappedComponent {...this.props} />
          </div>
        );
      }
  }

  return WithHover;
};

export default withHover;