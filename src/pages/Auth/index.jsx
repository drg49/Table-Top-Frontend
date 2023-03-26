import React from 'react';
import Panel from '../../components/Panel';

export default function Auth(){
  return (
    <>
      <Panel size='sm' header='Header One' closable={true}>
        <p>Sample</p>
      </Panel>
      <Panel size='md' header='Header Two' closable={false}>
        <p>Sample</p>
      </Panel>
      <Panel size='lg' header='Header Three' closable={true}>
        <p>Sample</p>
      </Panel>
    </>
  )
}