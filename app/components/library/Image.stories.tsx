import type { Meta, StoryObj } from "@storybook/react-vite";

import {
  movieDetailsBatman1989Mock,
  movieDetailsGattaca1997Mock,
  movieDetailsSe7en1995Mock,
  movieDetailsTheFastAndTheFurious2001Mock,
} from "~/__mocks__";

import Image from "./Image";

const backdrops = [
  ...movieDetailsBatman1989Mock.images.backdrops.slice(0, 3),
  ...movieDetailsGattaca1997Mock.images.backdrops.slice(0, 3),
  ...movieDetailsSe7en1995Mock.images.backdrops.slice(0, 3),
  ...movieDetailsTheFastAndTheFurious2001Mock.images.backdrops.slice(0, 3),
].map(({ url }) => url);

const posters = [
  ...movieDetailsBatman1989Mock.images.posters.slice(0, 3),
  ...movieDetailsGattaca1997Mock.images.posters.slice(0, 3),
  ...movieDetailsSe7en1995Mock.images.posters.slice(0, 3),
  ...movieDetailsTheFastAndTheFurious2001Mock.images.posters.slice(0, 3),
].map(({ url }) => url);

const profiles = [
  ...movieDetailsBatman1989Mock.credits.cast.slice(0, 3),
  ...movieDetailsGattaca1997Mock.credits.cast.slice(0, 3),
  ...movieDetailsSe7en1995Mock.credits.cast.slice(0, 3),
  ...movieDetailsTheFastAndTheFurious2001Mock.credits.cast.slice(0, 3),
].map(({ profile_url }) => profile_url);

const meta = {
  title: "library/Image",
  component: Image,
  argTypes: {
    src: { control: "select" },
    title: { control: false },
    type: { control: false },
  },
  decorators: [
    (Story) => (
      <div className="mx-auto w-75">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Image>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Backdrop: Story = {
  args: {
    src: backdrops[0],
    title: "title",
    type: "backdrop",
  },
  argTypes: {
    src: { options: backdrops },
  },
};

export const Poster: Story = {
  args: {
    src: posters[0],
    title: "title",
    type: "poster",
  },
  argTypes: {
    src: { options: posters },
  },
};

export const Profile: Story = {
  args: {
    src: profiles[0],
    title: "title",
    type: "profile",
  },
  argTypes: {
    src: { options: profiles },
  },
};
