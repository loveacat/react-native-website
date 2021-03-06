/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

const RemarkablePlugins = require("./core/RemarkablePlugins");

// const users = require("./showcase.json");

const baseUrl = "/";
const repoUrl = "https://github.com/facebook/react-native";
const bbsUrl = "http://bbs.reactnative.cn";
const siteConfig = {
  title: "React Native 中文网",
  tagline: "使用React来编写原生应用的框架",
  baseUrl,
  projectName: "react-native",
  repoUrl,
  users: [],
  editUrl:
    "https://github.com/reactnativecn/react-native-website/blob/production/cndocs/",
  headerLinks: [
    { doc: "getting-started", label: "文档" },
    { href: "https://ke.qq.com/course/197101", label: "课程", external: true },
    // { blog: true, label: "博客" },
    { href: "http://bbs.reactnative.cn", external: true, label: "讨论" },
    { href: "http://update.reactnative.cn", label: "热更新", external: true },
    { search: true },
    { href: repoUrl, label: "GitHub" },
    { href: "https://doc.react-china.org/", external: true, label: "React" }
  ],
  headerIcon: "img/header_logo.png",
  footerIcon: "img/header_logo.png",
  favicon: "img/favicon.png",
  colors: {
    primaryColor: "rgb(34, 34, 34)",
    secondaryColor: "#05A5D1",
    tintColor: "#005068",
    backgroundColor: "#f5fcff"
  },
  algolia: {
    apiKey: "7ab53ed26928639bae06ef0f6165f68b",
    indexName: "reactnative_cn",
    algoliaOptions: {
      facetFilters: ["tags:VERSION"],
      hitsPerPage: 5
    }
  },
  // facebookAppId: "1677033832619985",
  // twitter: "reactnative",
  markdownPlugins: [
    RemarkablePlugins.SnackPlayer,
    RemarkablePlugins.ReactNativeWebPlayer
  ],
  highlight: {
    theme: "solarized-dark"
  },
  gaTrackingId: "UA-63485149-4",
  scripts: ["https://snack.expo.io/embed.js", baseUrl + "js/codeblocks.js"],
  customDocsPath: "cndocs"
};

module.exports = siteConfig;
