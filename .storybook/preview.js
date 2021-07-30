import AppWrapper from '../src/components/AppWrapper';

export const decorators = [
  (Story) => (
    <AppWrapper>
      <div className="p-3">
        <Story />
      </div>
    </AppWrapper>
  ),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
