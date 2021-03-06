import { makeObjArr } from './dataManipulation';

const { enabledBlocks } = window.gpaGutenblocks || {};

const allEnabled = [
  {
    common: [
      { audio: 'enabled' },
      { cover: 'enabled' },
      { file: 'enabled' },
      { gallery: 'enabled' },
      { heading: 'enabled' },
      { image: 'enabled' },
      { list: 'enabled' },
      { paragraph: 'enabled' },
      { quote: 'enabled' },
      { video: 'enabled' },
    ],
  }, {
    formatting: [
      { code: 'enabled' },
      { freeform: 'enabled' },
      { html: 'enabled' },
      { preformatted: 'enabled' },
      { pullquote: 'enabled' },
      { table: 'enabled' },
      { verse: 'enabled' },
    ],
  }, {
    layout: [
      { button: 'enabled' },
      { columns: 'enabled' },
      { mediaText: 'enabled' },
      { more: 'enabled' },
      { nextpage: 'enabled' },
      { separator: 'enabled' },
      { spacer: 'enabled' },
    ],
  }, {
    widgets: [
      { archives: 'enabled' },
      { categories: 'enabled' },
      { latestComments: 'enabled' },
      { latestPosts: 'enabled' },
      { shortcode: 'enabled' },
    ],
  }, {
    embed: [
      { animoto: 'enabled' },
      { cloudup: 'enabled' },
      { collegehumor: 'enabled' },
      { dailymotion: 'enabled' },
      { embed: 'enabled' },
      { facebook: 'enabled' },
      { flickr: 'enabled' },
      { funnyordie: 'enabled' },
      { hulu: 'enabled' },
      { imgur: 'enabled' },
      { instagram: 'enabled' },
      { issuu: 'enabled' },
      { kickstarter: 'enabled' },
      { meetupCom: 'enabled' },
      { mixcloud: 'enabled' },
      { photobucket: 'enabled' },
      { polldaddy: 'enabled' },
      { reddit: 'enabled' },
      { reverbnation: 'enabled' },
      { screencast: 'enabled' },
      { scribd: 'enabled' },
      { slideshare: 'enabled' },
      { smugmug: 'enabled' },
      { speaker: 'enabled' },
      { spotify: 'enabled' },
      { soundcloud: 'enabled' },
      { ted: 'enabled' },
      { tumblr: 'enabled' },
      { twitter: 'enabled' },
      { videopress: 'enabled' },
      { vimeo: 'enabled' },
      { wordpress: 'enabled' },
      { wordpressTv: 'enabled' },
      { youtube: 'enabled' },
    ],
  },
];

export const getBlockSettings = () => {
  const enabled = enabledBlocks ? makeObjArr( enabledBlocks ) : '';

  const blockSettings = enabled || allEnabled;

  return blockSettings;
};
