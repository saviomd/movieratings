import type { Meta, StoryObj } from "@storybook/react-vite";

import MovieStats from "./MovieStats";

const moviesPerDecadeReleased = {
  groups: {
    "1910": 20,
    "1920": 10,
    "1930": 30,
    "1940": 40,
    "1950": 50,
    "1960": 100,
    "1970": 200,
    "1980": 300,
    "1990": 450,
    "2000": 500,
    "2010": 400,
  },
  max: 500,
};

const moviesPerRatingGiven = {
  groups: { "1": 200, "2": 300, "3": 350, "4": 500, "5": 200 },
  max: 500,
};

const moviesPerYearWatched = {
  groups: {
    "2013": 20,
    "2014": 50,
    "2015": 70,
    "2016": 40,
    "2017": 60,
    "2018": 70,
    "2019": 50,
    "2020": 60,
    "2021": 80,
    "2022": 70,
    "2023": 90,
    "2024": 80,
    "2025": 100,
    "2026": 40,
  },
  max: 100,
};

const meta = {
  title: "app/MovieStats",
  component: MovieStats,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    moviesPerDecadeReleased: { control: false },
    moviesPerRatingGiven: { control: false },
    moviesPerYearWatched: { control: false },
  },
} satisfies Meta<typeof MovieStats>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    moviesPerDecadeReleased,
    moviesPerRatingGiven,
    moviesPerYearWatched,
  },
};
