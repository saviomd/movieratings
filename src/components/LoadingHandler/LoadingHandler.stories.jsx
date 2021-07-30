import React from "react";

import LoadingHandler, { dataStatuses } from "./LoadingHandler";

export default {
  title: "Example/LoadingHandler",
  component: LoadingHandler,
  argTypes: {
    dataStatus: {
      options: dataStatuses,
      control: {
        type: "select",
      },
    },
  },
};

const Template = (args) => <LoadingHandler {...args} />;

export const Default = Template.bind({});
Default.args = {
  children:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor blanditiis, deleniti exercitationem omnis natus debitis ducimus similique non sint incidunt soluta aspernatur corporis animi rem pariatur itaque quod facere repellat.",
  dataStatus: "loaded",
  hasData: true,
  messageNoData: "noData",
};
