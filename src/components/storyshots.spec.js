import initStoryshots, { multiSnapshotWithOptions, Stories } from '@storybook/addon-storyshots';

initStoryshots({
  test: multiSnapshotWithOptions({}),
  storyKindRegex: /^((?!.*?DontTest).)*$/
});
