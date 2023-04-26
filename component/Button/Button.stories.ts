import Button from "./Button";
import { Meta, StoryObj } from "@storybook/react";



const meta: Meta<typeof Button> = {
  title: 'Componenets/Button',
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {

    variant: 'primary',
    disabled : false,
    icon : ["Primary"],
  

   
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    disabled : false,
    icon : ["Secondary"],
  },
};

export const Danger: Story = {
  args: {
    variant: 'danger',
    disabled : false,
    icon : ["Danger"],
  },
};

