import React from 'react';

import '../styles/App.css';

import TestContainer from './TestContainer.jsx';
import HappyFace from './tests/HappyFace';
import UsersRender from './tests/UsersRender';
import RandomNumberGen from './tests/RandomNumberGen';
import StateTest from './tests/StateTest';
import ControlledComponent from './tests/ControlledComponent';

export default function App(props) {
  return (
    <>
      <header id="main-header">
        <img src="./images/oak-logo.png" alt="Oak Logo" id="oak-logo" />
        <h1 className="Title">
          Oak <i>React tests</i>
        </h1>
        <p>
          By:{' '}
          <a
            href="https://github.com/DaviCarvalho5"
            target="_blank"
            rel="noreferrer"
          >
            DaviCarvalho5
          </a>
        </p>
      </header>

      <section>
        <TestContainer
          title="Controlled Component"
          createdAt="04/09/2021"
          comments="Testing how controlled components works."
        >
          <ControlledComponent />
        </TestContainer>

        <TestContainer
          title="State Test"
          createdAt="04/09/2021"
          comments="How React updates 'stated' components?"
        >
          <StateTest />
        </TestContainer>

        <TestContainer title="Random Number Generator" createdAt="04/09/2021">
          <RandomNumberGen />
        </TestContainer>

        <TestContainer
          title="Users Render"
          createdAt="04/09/2021"
          comments="Trying with some data."
        >
          <h3 className="left">Table</h3>
          <UsersRender />

          <h3 className="left">List</h3>
          <UsersRender type="list" />
        </TestContainer>

        <TestContainer
          title="Happymeter :)"
          createdAt="04/09/2021"
          comments="How much happy you are?"
        >
          <HappyFace happymeter="10" />
        </TestContainer>
      </section>
    </>
  );
}
