import React, { useState, useEffect, useContext } from "react";
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
  Avatar,
  Td,
  Tr,
  Th,
  TabGroup,
  TabPanels,
  TabPanel,
  Table,
  Thead,
  Tbody,
  BaseCheckbox,
  VisuallyHidden,
  Textarea,
  Popover,
} from "@strapi/design-system";
import { Plus, Trash } from "@strapi/icons";
import { IconButton } from "@strapi/design-system/IconButton";
import { Typography } from "@strapi/design-system/Typography";
import TranslationModal from "../../../components/TranslationModal";
import { TranslationContext } from "../../../hooks/translationContext.js";
import Notification from "../../../components/Notification";
import AddTranslationConfirmationModal from "../../../components/AddTranslationConfirmationModal";
import translationRequest from "../../../api/translationRequest";

const Home = () => {
  const [currentEnvrionment, setCurrentEnvironment] = useState(
    process.env.NODE_ENV
  );
  const [translationModal, setTranslationModal] = useState(false);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);

  const {
    mainError,
    setMainError,
    errorMessage,
    setErrorMessage,
    translationsToBeAdded,
    mainSuccess,
    setMainSuccess,
    successMessage,
    setSuccessMessage,
    setTranslationsToBeAdded,
  } = useContext(TranslationContext);

  useEffect(() => {}, [currentEnvrionment]);

  const addTranslationToProduction = async () => {
    const addTranslationResponse = await translationRequest.addTranslation(
      translationsToBeAdded
    );
    const addTranslationResponseJson = await addTranslationResponse.json();
    if (addTranslationResponseJson?.status !== 200) {
      // TODO: Show errors in dialog
      setMainError(true);
      setErrorMessage(addTranslationResponseJson.error);
      setShowConfirmationModal(false);
      return;
    }
    setMainSuccess(true);
    setSuccessMessage("Translations added successfully");
    setShowConfirmationModal(false);
    setTranslationsToBeAdded([]);
  };

  const handleDelete = (index) => {
    const newEntries = [...translationsToBeAdded];
    newEntries.splice(index, 1);
    setTranslationsToBeAdded(newEntries);
  };

  return (
    <Layout>
      {currentEnvrionment !== "development" ? (
        <Box padding={6} background="warning100">
          <Flex gap={2} alignItems="center">
            <VisuallyHidden>
              <Avatar size="small" />
            </VisuallyHidden>
            <Box>
              <Typography as="p" variant="beta">
                This feature is only available in the development environment
              </Typography>
            </Box>
          </Flex>
        </Box>
      ) : (
        <>
          {mainSuccess && (
            <Notification
              showNotification={mainSuccess}
              setShowNotification={setMainSuccess}
              width="85%"
              message={successMessage}
              variant="success"
              title="Success"
            />
          )}
          {mainError && (
            <Notification
              showNotification={mainError}
              setShowNotification={setMainError}
              width="85%"
              message={errorMessage}
              variant="danger"
              title="Error"
            />
          )}
          {translationModal && (
            <TranslationModal setShowModal={setTranslationModal} />
          )}
          {showConfirmationModal && (
            <AddTranslationConfirmationModal
              setShowConfirmationModal={setShowConfirmationModal}
              addTranslation={addTranslationToProduction}
            />
          )}
          <BaseHeaderLayout
            title="Languge Translations"
            subtitle="Dashboard for adding, updating and deleting texts for translations in production"
            as="h2"
            primaryAction={
              <Button
                startIcon={<Plus />}
                onClick={() => setTranslationModal(true)}
              >
                Add
              </Button>
            }
          />
          <ContentLayout>
            <Box padding={1} background="primary100">
              <Table>
                <Thead>
                  <Tr>
                    <Th>
                      <Typography variant="sigma">Key</Typography>
                    </Th>
                    <Th>
                      <Typography variant="sigma">Text</Typography>
                    </Th>
                    <Th>
                      <Typography variant="sigma">Description</Typography>
                    </Th>
                    <Th>
                      <Typography variant="sigma">Page</Typography>
                    </Th>
                    <Th>
                      <VisuallyHidden>Actions</VisuallyHidden>
                    </Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {translationsToBeAdded.map((entry, index) => {
                    return (
                      <Tr key={index}>
                        <Td>
                          <Typography>{entry.key}</Typography>
                        </Td>
                        <Td>
                          <Typography>{entry.text}</Typography>
                        </Td>
                        <Td>
                          <Typography>{entry.description}</Typography>
                        </Td>
                        <Td>
                          <Typography>{entry.page}</Typography>
                        </Td>
                        <Td>
                          <Flex>
                            <Box paddingLeft={1}>
                              <IconButton
                                onClick={() => handleDelete(index)}
                                label="Delete"
                                icon={<Trash fill="primary700" />}
                              />
                            </Box>
                          </Flex>
                        </Td>
                      </Tr>
                    );
                  })}
                </Tbody>
              </Table>
              <Box padding={2}>
                <Flex alignItems="center" justifyContent="end" width={100}>
                  <Button
                    startIcon={<Plus />}
                    variant="primary"
                    size="L"
                    onClick={() => setShowConfirmationModal(true)}
                  >
                    Add translation
                  </Button>
                </Flex>
              </Box>
            </Box>
          </ContentLayout>
        </>
      )}
    </Layout>
  );
};

export default Home;
