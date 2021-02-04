import '!style-loader!css-loader!sass-loader!../src/assets/scss/index.scss';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  options: {
    storySort: {
      method: 'alphabetical',
      order: ['Welcome'],
    },
  },
  backgrounds: { disable: true },
  themes: [
    { name: 'bbento', class: 'bbento', color: '#005f60' },
    { name: 'uob-msig', class: 'uob-msig', color: '#2d9cff' }
  ]
}