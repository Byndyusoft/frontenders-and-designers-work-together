import type { Meta, StoryObj } from '@storybook/react-vite';
import { DumpComponent } from './DumpComponent';
import { MyCalendar } from './calendar/calendar';

const meta = {
    title: 'Пример истории',
    component: MyCalendar,
    parameters: {
        backgrounds: {
            default: 'dark'
        }
    }
} satisfies Meta<typeof MyCalendar>;

type TStory = StoryObj<typeof MyCalendar>;

export const calendar: TStory = {};

calendar.storyName = 'Dump';

export default meta;
