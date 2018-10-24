import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ImageStepContainer from './ImageStepContainer';

const ImageBubble = styled.img`
  width: 100%
  height: 100%
`;

class ImageStep extends Component {
  /* istanbul ignore next */
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
    };

    this.renderComponent = this.renderComponent.bind(this);
  }

  componentDidMount() {
    const { step } = this.props;
    const { delay, waitAction } = step;

    setTimeout(() => {
      this.setState({ loading: false }, () => {
        if (!waitAction && !step.rendered) {
          this.props.triggerNextStep();
        }
      });
    }, delay);
  }

  renderComponent() {
    const { step, steps, previousStep, triggerNextStep } = this.props;
    const { image } = step;
    const renderImage = imageSrc => <ImageBubble alt="gif_render" src={imageSrc} />;
    return React.cloneElement(renderImage(image), {
      step,
      steps,
      previousStep,
      triggerNextStep,
    });
  }

  render() {
    const { isLast } = this.props;

    return (
      <ImageStepContainer
        className="rsc-ts-bubble"
        isLast={isLast}
      >
        { this.renderComponent() }
      </ImageStepContainer>
    );
  }
}

ImageStep.propTypes = {
  step: PropTypes.object.isRequired,
  steps: PropTypes.object.isRequired,
  isLast: PropTypes.bool.isRequired,
  previousStep: PropTypes.object.isRequired,
  triggerNextStep: PropTypes.func.isRequired,
};

export default ImageStep;
