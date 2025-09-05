import type { Preview } from "@storybook/react-vite";
import { MemoryRouter } from "react-router";

import { AppWrapper } from "../src/components/app";

const preview: Preview = {
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={["/"]}>
        <AppWrapper>
          <div className="p-3">
            <Story />
          </div>
        </AppWrapper>
      </MemoryRouter>
    ),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
