import styled from 'styled-components';
import defaultTheme from '../theme';

const ValidateButton = styled.a`
  background: ${({ theme }) => theme.botFontColor};
  border: 1px solid;
  border-color: ${({ theme }) => theme.botBubbleColor};
  border-radius: 5px;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.15);
  color: ${({ theme }) => theme.botBubbleColor};
  display: flex;
  font-size: 14px;
  padding: 12px;
  justify-content: space-around;

  &:hover { opacity: .7; }
`;

ValidateButton.defaultProps = {
  theme: defaultTheme,
};

export default ValidateButton;
