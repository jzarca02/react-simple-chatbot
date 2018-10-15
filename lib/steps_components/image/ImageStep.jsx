import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Loading from '../common/Loading';
import ImageStepContainer from './ImageStepContainer';

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
    const renderImage = imageSrc => <img alt="gif_render" src={imageSrc} />;
    return React.cloneElement(renderImage(image), {
      step,
      steps,
      previousStep,
      triggerNextStep,
    });
  }

  render() {
    const { loading } = this.state;
    const { style } = this.props;

    return (
      <ImageStepContainer
        className="rsc-cs"
        style={style}
      >
        {
          loading ? (
            <Loading />
          ) : this.renderComponent()
        }
      </ImageStepContainer>
    );
  }
}

ImageStep.propTypes = {
  step: PropTypes.object.isRequired,
  steps: PropTypes.object.isRequired,
  style: PropTypes.object.isRequired,
  previousStep: PropTypes.object.isRequired,
  triggerNextStep: PropTypes.func.isRequired,
};

export default ImageStep;
