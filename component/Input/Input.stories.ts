import Input from './Input';
import { Meta, StoryObj } from "@storybook/react";



const meta: Meta<typeof Input> = {
  title: 'Componenets/Input',
  component: Input,
};

export default meta;
type Story = StoryObj<typeof Input>;

export const InputDemo: Story = {
  args: {

    placeholder : "Email",
    type : "email",
    disabled : false
   
  },
};