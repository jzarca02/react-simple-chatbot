import styled from 'styled-components';
import defaultTheme from '../theme';
import { pulse } from '../common/animations';

const fillFunc = (props) => {
  const { invalid, theme } = props;
  return invalid ? '#E53935' : '#4a4a4a';
};

const SubmitButton = styled.button`
  background-color: transparent;
  border: 0;
  border-bottom-right-radius: 10px;
  box-shadow: none;
  cursor: ${props => (props.disabled ? 'default' : 'pointer')};
  fill: ${fillFunc};
  opacity: ${props => (props.disabled && !props.invalid ? '.5' : '1')};
  outline: none;
  padding: 14px 16px 12px 16px;
  position: absolute;
  right: 0;
  top: 0;
  &:before {
    content: '';
    position: absolute;
    width: 23px;
    height: 23px;
    border-radius: 50%;
    animation: '';
  }
  &:not(:disabled):hover {
    opacity: 0.7;
  }
`;

SubmitButton.defaultProps = {
  theme: defaultTheme,
};

export default SubmitButton;
