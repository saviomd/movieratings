import type { Meta, StoryObj } from "@storybook/react-vite";

import MovieButton from "./MovieButton";
import { movieDiaryMock } from "~/__mocks__";

const meta = {
  title: "app/MovieButton",
  component: MovieButton,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof MovieButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    movie: movieDiaryMock[0],
    type: "Diary",
  },
};
