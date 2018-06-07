import emotion from 'react-emotion';
import flex from 'styles/flex';

export const Terminal = emotion.div({
  ...flex.vertical,
  flex: 1,
  backgroundColor: '#1d1d1d',
  color: 'white',
  position: 'relative',
  transition: 'all 200ms linear',
  transform: 'translate(0)',
  ...flex.vertical,
  overflowY: 'auto',
  whiteSpace: 'pre',
  padding: 10,
  lineHeight: '17px',
  fontSize: 13,
  fontWeight: 300
});
