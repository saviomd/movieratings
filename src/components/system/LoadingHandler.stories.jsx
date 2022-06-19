import React from "react";

import LoadingHandler, { dataStatuses } from "./LoadingHandler";

export default {
  title: "system/LoadingHandler",
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

function Template(args) {
  return <LoadingHandler {...args} />;
}

export const Default = Template.bind({});
Default.args = {
  children:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor blanditiis, deleniti exercitationem omnis natus debitis ducimus similique non sint incidunt soluta aspernatur corporis animi rem pariatur itaque quod facere repellat.",
  dataStatus: "loaded",
  hasData: true,
  messageNoData: "noData",
};
