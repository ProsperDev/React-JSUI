import flex from 'styles/flex';
import emotion from 'react-emotion';

export const Home = emotion.div({
  ...flex.vertical,
  flex: 1
});

export const Title = emotion.div({
  marginBottom: 20,
  color: 'white'
});

export const BabelWebview = emotion.div({
  width: '100%',
  height: '100%'
});

export const Empty = emotion.div({
  ...flex.vertical,
  ...flex.centerVertical,
  flex: 1
});

export const GroupList = emotion.div({
  // ...flex.horizontal
});
