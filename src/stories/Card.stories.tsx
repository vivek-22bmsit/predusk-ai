import type { Meta, StoryObj } from '@storybook/react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  CardAction,
} from '../components/ui/card';
import { Button } from '../components/ui/button';

const meta: Meta<typeof Card> = {
  title: 'UI/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    className: {
      control: { type: 'text' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Card className="w-[350px]" {...args}>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>
          This is a description of the card content.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>This is the main content of the card.</p>
      </CardContent>
      <CardFooter>
        <Button>Action</Button>
      </CardFooter>
    </Card>
  ),
};

export const WithAction: Story = {
  render: (args) => (
    <Card className="w-[400px]" {...args}>
      <CardHeader>
        <CardTitle>Notifications</CardTitle>
        <CardDescription>You have 3 unread messages.</CardDescription>
        <CardAction>
          <Button variant="outline" size="sm">
            Mark all read
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="p-2 rounded bg-muted">
            <p className="text-sm font-medium">New message from John</p>
            <p className="text-xs text-muted-foreground">2 minutes ago</p>
          </div>
          <div className="p-2 rounded bg-muted">
            <p className="text-sm font-medium">Update available</p>
            <p className="text-xs text-muted-foreground">1 hour ago</p>
          </div>
        </div>
      </CardContent>
    </Card>
  ),
};

export const SimpleCard: Story = {
  render: (args) => (
    <Card className="w-[300px]" {...args}>
      <CardContent>
        <p>A simple card with just content.</p>
      </CardContent>
    </Card>
  ),
};

export const ProductCard: Story = {
  render: (args) => (
    <Card className="w-[300px]" {...args}>
      <CardHeader>
        <CardTitle>iPhone 15 Pro</CardTitle>
        <CardDescription>Latest flagship smartphone with titanium design</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="text-2xl font-bold">$999</div>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li>• 128GB Storage</li>
            <li>• A17 Pro Chip</li>
            <li>• Pro Camera System</li>
            <li>• USB-C</li>
          </ul>
        </div>
      </CardContent>
      <CardFooter className="gap-2">
        <Button className="flex-1">Add to Cart</Button>
        <Button variant="outline">Details</Button>
      </CardFooter>
    </Card>
  ),
};

export const ProfileCard: Story = {
  render: (args) => (
    <Card className="w-[350px]" {...args}>
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold">
            JD
          </div>
          <div>
            <CardTitle>John Doe</CardTitle>
            <CardDescription>Frontend Developer</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-sm text-muted-foreground">Location</span>
            <span className="text-sm">San Francisco, CA</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm text-muted-foreground">Experience</span>
            <span className="text-sm">5 years</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm text-muted-foreground">Projects</span>
            <span className="text-sm">42 completed</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="gap-2">
        <Button variant="outline" className="flex-1">
          Message
        </Button>
        <Button className="flex-1">Follow</Button>
      </CardFooter>
    </Card>
  ),
};

export const StatsCard: Story = {
  render: (args) => (
    <Card className="w-[250px]" {...args}>
      <CardHeader>
        <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
        <CardAction>
          <svg
            className="w-4 h-4 text-muted-foreground"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
            />
          </svg>
        </CardAction>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">$45,231.89</div>
        <p className="text-xs text-muted-foreground">+20.1% from last month</p>
      </CardContent>
    </Card>
  ),
};

export const LoadingCard: Story = {
  render: (args) => (
    <Card className="w-[350px]" {...args}>
      <CardHeader>
        <div className="space-y-2">
          <div className="h-4 bg-muted rounded animate-pulse"></div>
          <div className="h-3 bg-muted rounded w-2/3 animate-pulse"></div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="h-3 bg-muted rounded animate-pulse"></div>
          <div className="h-3 bg-muted rounded animate-pulse"></div>
          <div className="h-3 bg-muted rounded w-1/2 animate-pulse"></div>
        </div>
      </CardContent>
      <CardFooter>
        <div className="h-9 bg-muted rounded w-20 animate-pulse"></div>
      </CardFooter>
    </Card>
  ),
};