import type { Meta, StoryObj } from "@storybook/react-vite";

import Grid from "./Grid";

const meta = {
  title: "library/Grid",
  component: Grid,
} satisfies Meta<typeof Grid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: null,
  },
  render: (args) => (
    <div style={{ width: "50vw" }}>
      <Grid {...args}>
        <Grid.Col width={1}>1</Grid.Col>
        <Grid.Col width={1}>2</Grid.Col>
        <Grid.Col width={1}>3</Grid.Col>
        <Grid.Col width={1}>4</Grid.Col>
        <Grid.Col width={1}>5</Grid.Col>
        <Grid.Col width={1}>6</Grid.Col>
        <Grid.Col width={1}>7</Grid.Col>
        <Grid.Col width={1}>8</Grid.Col>
        <Grid.Col width={1}>9</Grid.Col>
        <Grid.Col width={1}>10</Grid.Col>
        <Grid.Col width={1}>11</Grid.Col>
        <Grid.Col width={1}>12</Grid.Col>
      </Grid>
    </div>
  ),
};

export const Responsive: Story = {
  args: {
    children: null,
  },
  render: (args) => {
    const cols = [...Array.from({ length: 4 }).keys()];
    return (
      <div style={{ width: "50vw" }}>
        <Grid {...args}>
          {cols.map((item) => (
            <Grid.Col key={item} width={6} widthSm={4} widthMd={3} widthLg={2}>
              12
              <br />
              sm6
              <br />
              md4
              <br />
              lg3
            </Grid.Col>
          ))}
        </Grid>
      </div>
    );
  },
};
