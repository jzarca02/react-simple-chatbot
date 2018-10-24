import styled from 'styled-components';

const ImageStepContainer = styled.div`
  border-radius: 0 18px 18px 0px;
  display: flex;
  justify-content: center;
  margin: 0 6px 10px 57px;
  padding: 16px;
  max-width: 50%;
  background: ${props => props.theme.botBubbleColor};
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.15);
`;

export default ImageStepContainer;
