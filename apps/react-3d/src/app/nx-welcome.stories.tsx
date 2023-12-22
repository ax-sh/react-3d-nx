import type { Meta, StoryObj } from '@storybook/react';
import { NxWelcome } from './nx-welcome';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

import withAPIRequest from './with-api-request';
import { DefaultBodyType, http, HttpResponse, PathParams } from 'msw';
import { TanStackQueryMockData } from '../mocks/tan-stack-query-mock.data';

const meta: Meta<typeof NxWelcome> = {
  component: NxWelcome,
  title: 'NxWelcome',
  decorators: [withAPIRequest],
};
export default meta;
type Story = StoryObj<typeof NxWelcome>;

export const Primary: Story = {
  args: {},
};

Primary.parameters = {
  msw: {
    handlers: [
      http.get<PathParams, DefaultBodyType, typeof TanStackQueryMockData>(
        'https://api.github.com/repos/TanStack/query',
        () => HttpResponse.json(TanStackQueryMockData)
      ),
    ],
  },
};

export const Heading: Story = {
  args: {},
  async play({ canvasElement }) {
    const canvas = within(canvasElement);
    await expect(canvas.getByText(/Welcome to NxWelcome!/gi)).toBeTruthy();
  },
};
