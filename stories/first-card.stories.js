import { html } from 'lit';
import '../src/first-card.js';

export default {
  title: 'FirstCard',
  component: 'first-card',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ title, backgroundColor }) {
  return html`
    <first-card
      style="--first-card-background-color: ${backgroundColor || 'white'}"
      .title=${title}
    >
    </first-card>
  `;
}

export const App = Template.bind({});
App.args = {
  title: 'My app',
};
