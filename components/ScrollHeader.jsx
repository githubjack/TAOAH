import * as React from 'react';
import './ScrollHeader.css';
import { HeroTitle} from './HeroTitle';
export function ScrollHeader() {
  return (
    <div className="scroll-header">
    <div className="hero">
     <HeroTitle />
    </div>
    </div>

  );
}