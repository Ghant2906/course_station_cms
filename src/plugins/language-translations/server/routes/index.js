module.exports = [
  {
    method: "GET",
    path: "/checkDuplicateKeyOrText",
    handler: "translationController.findCheckDuplicateKeyOrText",
    config: {
      policies: [],
      auth: false,
    },
  },
  {
    method: "POST",
    path: "/addTranslation",
    handler: "translationController.addTranslation",
    config: {
      policies: [],
      auth: false,
    },
  },
];
