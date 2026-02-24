import type { Preview } from "@storybook/react-vite";
import { MemoryRouter } from "react-router";

import { AppWrapper } from "../app/components/app";
import { bodyClassName } from "../app/root";

const preview: Preview = {
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={["/"]}>
        <AppWrapper>
          <div className={`${bodyClassName} p-3`}>
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
        date: /Date$/i,
      },
    },
    layout: "centered",
  },

  tags: ["autodocs"],
};

export default preview;
