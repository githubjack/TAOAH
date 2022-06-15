import * as React from 'react';
import './Header.css';
import { Logo } from '../components/Logo';
import { GlobalNav } from '../components/GlobalNav';
export function Header() {
  return (
    <React.Fragment>
      <div className="fixed-header">
        <div className="logo"><Logo /></div>
        <div className="global-nav"><GlobalNav /></div>
      </div>
      <div className="scroll-header">
        <p>Todo: put scroll header into its own component</p>
      </div>
    </React.Fragment>
  );
}