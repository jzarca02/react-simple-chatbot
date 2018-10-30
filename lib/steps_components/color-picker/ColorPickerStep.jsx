import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CirclePicker } from 'react-color';

import Loading from '../common/Loading';
import ColorPickerContainer from './ColorPickerContainer';

import ValidateButton from '../../components/ValidateButton';

class ColorPickerStep extends Component {
  /* istanbul ignore next */
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      selectedColors: [],
      isDisabled: false,
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
    const isAlreadySelected =
      this.state.selectedColors.filter(selectedColor => selectedColor.hex === value.hex).length > 0;
    if (!isAlreadySelected) {
      this.setState({ selectedColors: [...this.state.selectedColors, value] });
    } else {
      this.setState({
        selectedColors: this.state.selectedColors.filter(
          selectedColor => selectedColor.hex !== value.hex,
        ),
      });
    }
  }

  renderComponent() {
    const { colors, step, steps, previousStep, triggerNextStep } = this.props;
    const { selectedColors } = this.state;

    const colorPicker = () => (
      <CirclePicker
        onChange={this.handleColorChange}
        colors={colors}
        selectedColors={selectedColors}
      />
    );

    return React.cloneElement(colorPicker(), {
      step,
      steps,
      previousStep,
      triggerNextStep,
    });
  }

  render() {
    const { loading } = this.state;
    const { style, triggerNextStep } = this.props;

    const sendSelection = () => {
      triggerNextStep({ value: this.state.selectedColors });
      this.setState({ isDisabled: true });
    };

    return (
      <div style={{ margin: '-8px 6px 10px 6px', pointerEvents: this.state.isDisabled ? 'none' : 'all' }}>
        <ColorPickerContainer className="rsc-cs" style={style}>
          {loading ? <Loading /> : this.renderComponent()}
        </ColorPickerContainer>
        <ValidateButton className="btn btn-default" onClick={sendSelection}>
          Confirmer
        </ValidateButton>
      </div>
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
