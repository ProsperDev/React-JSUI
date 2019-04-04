import emotion from 'react-emotion';
import flex from 'styles/flex';
import { Vertical } from 'styles/flex-components';
import { noSelect, whiteish } from 'styles/mixins';
import { debug } from 'config/debug';

export const Group = emotion(Vertical)(
  {
    backgroundColor: whiteish(0.05),
    borderRadius: 5,
    padding: 15,
    marginBottom: 15,
    color: 'white',
    transition: 'all 150ms linear'
  },
  ({ collapsed, hide, horizontal }) => ({
    ...(collapsed && {
      cursor: 'pointer',
      '&:hover': {
        backgroundColor: '#55647d'
      }
    }),
    ...(hide && {
      display: 'none'
    }),
    ...(horizontal && {
      marginRight: 15,
      width: 300
    })
  })
);

export const ProjectList = emotion.div(
  {
    ...flex.horizontal,
    ...flex.wrap
  },
  ({ horizontal }) => ({
    ...(horizontal && {
      ...flex.vertical,
      alignItems: 'flex-start',
      flex: 1,
      height: '100%',
      maxHeight: '100%',
      overflowY: 'auto',
      flexWrap: 'initial',
      width: '100%'
    })
  })
);
