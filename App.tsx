import * as React from 'react';
import { Header } from './containers/Header';
import { Story } from './containers/Story';
import './style.css';

export default function App() {
  return (
    <div>
      <Header />
      <Story />
    </div>
  );
}
