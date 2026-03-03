import type { Preview } from "@storybook/react-vite";
import { MemoryRouter } from "react-router";

import { AppWrapper } from "../app/components/app";
import { bodyClassName } from "../app/root";

const ratingControl = {
  max: 5,
  min: 0,
  type: "range" as const,
};

const preview: Preview = {
  argTypes: {
    count: {
      if: { arg: "count", exists: true },
      control: ratingControl,
    },
    rating: {
      if: { arg: "rating", exists: true },
      control: ratingControl,
    },
  },

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
