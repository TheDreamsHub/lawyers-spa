import React, { Suspense } from 'react';

import { appRoutesObj } from './app-paths';
import {  Route, Routes } from 'react-router-dom';



import Home from './home';
import ContactUs from './contact-us';
import WhoWeAre from './how-we-are';



const withSuspense = (WrappedComponent: React.ComponentType) => {
  return (
    <Suspense >
      <WrappedComponent />
    </Suspense>
  );
};

export const withSuspenseComponents = (element: JSX.Element) => {
  const newComponent = () => withSuspense(element.props.component);

  return { ...element, props: { ...element.props, component: newComponent } };
};

export function AppRouting() {
  return (
      <Routes>
        <Route
          key="home"
          path={appRoutesObj.getHomePath()}
          element={<Home />}
        />
        <Route
          key="whoWeAre"
          path={appRoutesObj.getWhoWeArePath()}
          element={<WhoWeAre />}
        />
        <Route
          key="contactUs"
          path={appRoutesObj.getContactUsPath()}
          element={<ContactUs />}
        />
      </Routes>
  );
}
