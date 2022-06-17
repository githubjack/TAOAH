import * as React from 'react';
import './Header.css';
import { Logo } from '../components/Logo';
import { GlobalNav } from '../components/GlobalNav';
import { ScrollHeader } from '../components/ScrollHeader';
export function Header() {
  return (
    <React.Fragment>
      <div className="fixed-header">
        <React.Fragment>
          <Logo /></React.Fragment>
        <React.Fragment>
          <GlobalNav /></React.Fragment>
      </div>
      <React.Fragment>
        <ScrollHeader />
      </React.Fragment>
    </React.Fragment>
  );
}