import React from 'react';
import { StoryDecorator } from '@storybook/react';

export const MobileDecorator: StoryDecorator = storyFn => (
  <div id="iphone-outer">
    <div id="iphone-inner">{storyFn()}</div>
    <div id="iphone-home" />
    <style jsx global>{`
      #iphone-outer {
        width: 3in;
        border: 1px solid #ccc;
        margin: 20px auto;
        padding: 0.1in;
        border-radius: 0.4in;
      }
      #iphone-inner {
        height: 4.5in;
        border: 1px solid #ccc;
        margin-top: 0.5in;
        font-size: 12px;
        font-family: PT Sans Caption;
        overflow-y: auto;
      }
      #iphone-home {
        width: 0.5in;
        height: 0.5in;
        margin: 10px auto 0 auto;
        border-radius: 100%;
        border: 1px solid #ccc;
      }
    `}</style>
  </div>
);
