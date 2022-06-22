import * as React from 'react';
import './Story.css';
import { Feature } from '../components/Feature';
import { FeatureList } from '../components/FeatureList';
export function Story(){
  return (
    <div className="story-grid">
      <Feature />
      <FeatureList />
    </div>
  );
}