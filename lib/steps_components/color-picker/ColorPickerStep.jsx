import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CirclePicker } from 'react-color';

import Loading from '../common/Loading';
import ColorPickerContainer from './ColorPickerContainer';

class ColorPickerStep extends Component {
  /* istanbul ignore next */
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
    };

    this.renderComponent = this.renderComponent.bind(this);
    this.handleColorChange = this.handleColorChange.bind(this);
  }

  componentDidMount() {
    const { step } = this.props;
    const { delay } = step;

    setTimeout(() => {
      this.setState({ loading: false });
    }, delay);
  }

  handleColorChange(value) {
    return this.props.triggerNextStep({ color: value });
  }


  renderComponent() {
    const { colors, step, steps, previousStep, triggerNextStep } = this.props;
    const colorPicker = () => (<CirclePicker
      onChange={this.handleColorChange}
      colors={colors}
    />);

    return React.cloneElement(colorPicker(), {
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
      <ColorPickerContainer
        className="rsc-cs"
        style={style}
      >
        {
          loading ? (
            <Loading />
          ) : this.renderComponent()
        }
      </ColorPickerContainer>
    );
  }
}

ColorPickerStep.propTypes = {
  colors: PropTypes.array.isRequired,
  step: PropTypes.object.isRequired,
  steps: PropTypes.object.isRequired,
  style: PropTypes.object.isRequired,
  previousStep: PropTypes.object.isRequired,
  triggerNextStep: PropTypes.func.isRequired,
};

export default ColorPickerStep;
