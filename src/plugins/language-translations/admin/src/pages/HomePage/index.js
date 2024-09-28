/*
 *
 * HomePage
 *
 */

import React, { useState, useEffect, useContext } from "react";
// import PropTypes from 'prop-types';
import pluginId from "../../pluginId";
import Home from "./Tabs/index.js";
import {
  Layout,
  BaseHeaderLayout,
  ContentLayout,
  Link,
  Button,
  Box,
  Flex,
  Tabs,
  Tab,
  TabGroup,
  TabPanels,
  TabPanel,
  BaseCheckbox,
  Avatar,
  VisuallyHidden,
} from "@strapi/design-system";
import { TranslationContext } from "../../hooks/translationContext.js";

const HomePage = () => {
  const [translationsToBeAdded, setTranslationsToBeAdded] = useState([]);
  const [mainError, setMainError] = useState(false);
  const [mainSuccess, setMainSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const contextValue = {
    translationsToBeAdded,
    setTranslationsToBeAdded,
    mainError,
    setMainError,
    errorMessage,
    setErrorMessage,
    mainSuccess,
    setMainSuccess,
    successMessage,
    setSuccessMessage,
  };

  return (
    <TranslationContext.Provider value={contextValue}>
      <Home />
    </TranslationContext.Provider>
  );
};

export default HomePage;
