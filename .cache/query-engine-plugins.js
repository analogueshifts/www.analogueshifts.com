
import * as pluginGatsbyNode0 from "../node_modules/gatsby-plugin-page-creator/gatsby-node"
import * as pluginGatsbyNode1 from "../node_modules/gatsby-plugin-page-creator/gatsby-node"
import * as pluginGatsbyNode2 from "../node_modules/gatsby-plugin-image/gatsby-node"
import * as pluginGatsbyNode3 from "../node_modules/gatsby-source-filesystem/gatsby-node"
import * as pluginGatsbyNode4 from "../node_modules/gatsby-transformer-sharp/gatsby-node"
import * as pluginGatsbyNode5 from "../node_modules/gatsby-plugin-sharp/gatsby-node"
import * as pluginGatsbyNode6 from "../node_modules/gatsby-plugin-page-creator/gatsby-node"
import * as pluginGatsbyNode7 from "../node_modules/gatsby-plugin-page-creator/gatsby-node"
import * as pluginGatsbyNode8 from "../node_modules/gatsby-plugin-page-creator/gatsby-node"
import * as pluginGatsbyNode9 from "../node_modules/gatsby-plugin-page-creator/gatsby-node"
import * as pluginGatsbyNode10 from "../node_modules/gatsby-plugin-page-creator/gatsby-node"
import * as pluginGatsbyNode11 from "../node_modules/gatsby-plugin-page-creator/gatsby-node"
import * as pluginGatsbyNode12 from "../node_modules/gatsby-plugin-page-creator/gatsby-node"
import * as pluginGatsbyNode13 from "../node_modules/gatsby-plugin-page-creator/gatsby-node"
import * as pluginGatsbyNode14 from "../node_modules/gatsby-plugin-page-creator/gatsby-node"
import * as pluginGatsbyNode15 from "../node_modules/gatsby-plugin-page-creator/gatsby-node"
import * as pluginGatsbyNode16 from "../node_modules/gatsby-plugin-page-creator/gatsby-node"
import * as pluginGatsbyNode17 from "../node_modules/gatsby-plugin-page-creator/gatsby-node"
import * as pluginGatsbyNode18 from "../node_modules/gatsby-plugin-page-creator/gatsby-node"
import * as pluginGatsbyNode19 from "../node_modules/gatsby-plugin-page-creator/gatsby-node"
import * as pluginGatsbyNode20 from "../node_modules/gatsby-plugin-page-creator/gatsby-node"
import * as pluginGatsbyWorker0 from "../node_modules/gatsby-plugin-sharp/gatsby-worker"

export const gatsbyNodes = [
{ name: "gatsby-plugin-page-creator", module: pluginGatsbyNode0, importKey: 1 },
{ name: "gatsby-plugin-page-creator", module: pluginGatsbyNode1, importKey: 2 },
{ name: "gatsby-plugin-image", module: pluginGatsbyNode2, importKey: 3 },
{ name: "gatsby-source-filesystem", module: pluginGatsbyNode3, importKey: 4 },
{ name: "gatsby-transformer-sharp", module: pluginGatsbyNode4, importKey: 5 },
{ name: "gatsby-plugin-sharp", module: pluginGatsbyNode5, importKey: 6 },
{ name: "gatsby-plugin-page-creator", module: pluginGatsbyNode6, importKey: 7 },
{ name: "gatsby-plugin-page-creator", module: pluginGatsbyNode7, importKey: 8 },
{ name: "gatsby-plugin-page-creator", module: pluginGatsbyNode8, importKey: 9 },
{ name: "gatsby-plugin-page-creator", module: pluginGatsbyNode9, importKey: 10 },
{ name: "gatsby-plugin-page-creator", module: pluginGatsbyNode10, importKey: 11 },
{ name: "gatsby-plugin-page-creator", module: pluginGatsbyNode11, importKey: 12 },
{ name: "gatsby-plugin-page-creator", module: pluginGatsbyNode12, importKey: 13 },
{ name: "gatsby-plugin-page-creator", module: pluginGatsbyNode13, importKey: 14 },
{ name: "gatsby-plugin-page-creator", module: pluginGatsbyNode14, importKey: 15 },
{ name: "gatsby-plugin-page-creator", module: pluginGatsbyNode15, importKey: 16 },
{ name: "gatsby-plugin-page-creator", module: pluginGatsbyNode16, importKey: 17 },
{ name: "gatsby-plugin-page-creator", module: pluginGatsbyNode17, importKey: 18 },
{ name: "gatsby-plugin-page-creator", module: pluginGatsbyNode18, importKey: 19 },
{ name: "gatsby-plugin-page-creator", module: pluginGatsbyNode19, importKey: 20 },
{ name: "gatsby-plugin-page-creator", module: pluginGatsbyNode20, importKey: 21 },
]

export const gatsbyWorkers = [
{ name: "gatsby-plugin-sharp", module: pluginGatsbyWorker0, importKey: 1 },
]

export const flattenedPlugins =
  [
  {
    "resolve": "",
    "id": "35a61dc2-564c-58ac-8714-320d57162158",
    "name": "gatsby-plugin-page-creator",
    "version": "5.12.1",
    "pluginOptions": {
      "plugins": [],
      "path": "C:\\Users\\tesli\\Desktop\\PT\\webapp\\as-web/src/pages/jobs"
    },
    "nodeAPIs": [
      "createPages",
      "createPagesStatefully",
      "onPluginInit",
      "setFieldsOnGraphQLNodeType"
    ],
    "browserAPIs": [],
    "ssrAPIs": [],
    "pluginFilepath": "",
    "importKey": 1
  },
  {
    "resolve": "",
    "id": "69e0ba3f-8db7-5411-b72d-eaa592ad65df",
    "name": "gatsby-plugin-page-creator",
    "version": "5.12.1",
    "pluginOptions": {
      "plugins": [],
      "path": "C:\\Users\\tesli\\Desktop\\PT\\webapp\\as-web/src/pages/job"
    },
    "nodeAPIs": [
      "createPages",
      "createPagesStatefully",
      "onPluginInit",
      "setFieldsOnGraphQLNodeType"
    ],
    "browserAPIs": [],
    "ssrAPIs": [],
    "pluginFilepath": "",
    "importKey": 2
  },
  {
    "resolve": "",
    "id": "a9f9c4c1-d74b-569b-a6ec-6093f5d12592",
    "name": "gatsby-plugin-image",
    "version": "3.12.0",
    "pluginOptions": {
      "plugins": []
    },
    "nodeAPIs": [
      "createSchemaCustomization",
      "onCreateBabelConfig",
      "onCreateWebpackConfig",
      "preprocessSource"
    ],
    "browserAPIs": [],
    "ssrAPIs": [
      "onRenderBody"
    ],
    "pluginFilepath": "",
    "importKey": 3
  },
  {
    "resolve": "",
    "id": "247d8927-4cab-5e1a-9e94-e2b07c5f3b5f",
    "name": "gatsby-source-filesystem",
    "version": "5.12.0",
    "pluginOptions": {
      "plugins": [],
      "name": "images",
      "path": "C:\\Users\\tesli\\Desktop\\PT\\webapp\\as-web/src/images",
      "fastHash": false
    },
    "nodeAPIs": [
      "onPreInit",
      "pluginOptionsSchema",
      "sourceNodes",
      "setFieldsOnGraphQLNodeType"
    ],
    "browserAPIs": [],
    "ssrAPIs": [],
    "pluginFilepath": "",
    "importKey": 4
  },
  {
    "resolve": "",
    "id": "822bdf7b-a95a-5885-9351-158705910ac3",
    "name": "gatsby-transformer-sharp",
    "version": "5.12.0",
    "pluginOptions": {
      "plugins": []
    },
    "nodeAPIs": [
      "onPreInit",
      "onCreateNode",
      "shouldOnCreateNode",
      "createSchemaCustomization",
      "createResolvers"
    ],
    "browserAPIs": [],
    "ssrAPIs": [],
    "pluginFilepath": "",
    "importKey": 5
  },
  {
    "resolve": "",
    "id": "9e618b1c-a2d0-52b1-86ab-f91016f37381",
    "name": "gatsby-plugin-sharp",
    "version": "5.12.0",
    "pluginOptions": {
      "plugins": [],
      "base64Width": 20,
      "stripMetadata": true,
      "defaultQuality": 50,
      "failOnError": true,
      "failOn": "warning"
    },
    "nodeAPIs": [
      "onCreateDevServer",
      "onPostBootstrap",
      "onPluginInit",
      "onPreBootstrap",
      "pluginOptionsSchema"
    ],
    "browserAPIs": [],
    "ssrAPIs": [],
    "pluginFilepath": "",
    "importKey": 6
  },
  {
    "resolve": "",
    "id": "bc0a68c1-9d9c-58d4-be55-e1ccf3e6f289",
    "name": "gatsby-plugin-page-creator",
    "version": "5.12.1",
    "pluginOptions": {
      "plugins": [],
      "path": "C:/Users/tesli/Desktop/PT/webapp/as-web/node_modules/gatsby/dist/internal-plugins/dev-404-page/src/pages",
      "pathCheck": false
    },
    "nodeAPIs": [
      "createPages",
      "createPagesStatefully",
      "onPluginInit",
      "setFieldsOnGraphQLNodeType"
    ],
    "browserAPIs": [],
    "ssrAPIs": [],
    "pluginFilepath": "",
    "importKey": 7
  },
  {
    "resolve": "",
    "id": "08d2456a-df7d-5044-81dc-af729239467c",
    "name": "gatsby-plugin-page-creator",
    "version": "5.12.1",
    "pluginOptions": {
      "plugins": [],
      "path": "C:/Users/tesli/Desktop/PT/webapp/as-web/node_modules/gatsby/dist/internal-plugins/load-babel-config/src/pages",
      "pathCheck": false
    },
    "nodeAPIs": [
      "createPages",
      "createPagesStatefully",
      "onPluginInit",
      "setFieldsOnGraphQLNodeType"
    ],
    "browserAPIs": [],
    "ssrAPIs": [],
    "pluginFilepath": "",
    "importKey": 8
  },
  {
    "resolve": "",
    "id": "69921a40-c446-5d16-b283-b5eb9d6cf55f",
    "name": "gatsby-plugin-page-creator",
    "version": "5.12.1",
    "pluginOptions": {
      "plugins": [],
      "path": "C:/Users/tesli/Desktop/PT/webapp/as-web/node_modules/gatsby/dist/internal-plugins/internal-data-bridge/src/pages",
      "pathCheck": false
    },
    "nodeAPIs": [
      "createPages",
      "createPagesStatefully",
      "onPluginInit",
      "setFieldsOnGraphQLNodeType"
    ],
    "browserAPIs": [],
    "ssrAPIs": [],
    "pluginFilepath": "",
    "importKey": 9
  },
  {
    "resolve": "",
    "id": "914e61d6-3d9d-59ea-a5c7-5b71d734e288",
    "name": "gatsby-plugin-page-creator",
    "version": "5.12.1",
    "pluginOptions": {
      "plugins": [],
      "path": "C:/Users/tesli/Desktop/PT/webapp/as-web/node_modules/gatsby/dist/internal-plugins/prod-404-500/src/pages",
      "pathCheck": false
    },
    "nodeAPIs": [
      "createPages",
      "createPagesStatefully",
      "onPluginInit",
      "setFieldsOnGraphQLNodeType"
    ],
    "browserAPIs": [],
    "ssrAPIs": [],
    "pluginFilepath": "",
    "importKey": 10
  },
  {
    "resolve": "",
    "id": "afa5c47e-3e3a-5131-8cea-d73344a87cce",
    "name": "gatsby-plugin-page-creator",
    "version": "5.12.1",
    "pluginOptions": {
      "plugins": [],
      "path": "C:/Users/tesli/Desktop/PT/webapp/as-web/node_modules/gatsby/dist/internal-plugins/webpack-theme-component-shadowing/src/pages",
      "pathCheck": false
    },
    "nodeAPIs": [
      "createPages",
      "createPagesStatefully",
      "onPluginInit",
      "setFieldsOnGraphQLNodeType"
    ],
    "browserAPIs": [],
    "ssrAPIs": [],
    "pluginFilepath": "",
    "importKey": 11
  },
  {
    "resolve": "",
    "id": "8bb0b9e3-479f-559a-9d9f-028bac4dc040",
    "name": "gatsby-plugin-page-creator",
    "version": "5.12.1",
    "pluginOptions": {
      "plugins": [],
      "path": "C:/Users/tesli/Desktop/PT/webapp/as-web/node_modules/gatsby/dist/internal-plugins/bundle-optimisations/src/pages",
      "pathCheck": false
    },
    "nodeAPIs": [
      "createPages",
      "createPagesStatefully",
      "onPluginInit",
      "setFieldsOnGraphQLNodeType"
    ],
    "browserAPIs": [],
    "ssrAPIs": [],
    "pluginFilepath": "",
    "importKey": 12
  },
  {
    "resolve": "",
    "id": "6d2ede91-208c-54f0-866c-2e6b459f0cdc",
    "name": "gatsby-plugin-page-creator",
    "version": "5.12.1",
    "pluginOptions": {
      "plugins": [],
      "path": "C:/Users/tesli/Desktop/PT/webapp/as-web/node_modules/gatsby/dist/internal-plugins/functions/src/pages",
      "pathCheck": false
    },
    "nodeAPIs": [
      "createPages",
      "createPagesStatefully",
      "onPluginInit",
      "setFieldsOnGraphQLNodeType"
    ],
    "browserAPIs": [],
    "ssrAPIs": [],
    "pluginFilepath": "",
    "importKey": 13
  },
  {
    "resolve": "",
    "id": "c97a5d22-c163-5a00-a8ad-755090f973a6",
    "name": "gatsby-plugin-page-creator",
    "version": "5.12.1",
    "pluginOptions": {
      "plugins": [],
      "path": "C:/Users/tesli/Desktop/PT/webapp/as-web/node_modules/gatsby-plugin-page-creator/src/pages",
      "pathCheck": false
    },
    "nodeAPIs": [
      "createPages",
      "createPagesStatefully",
      "onPluginInit",
      "setFieldsOnGraphQLNodeType"
    ],
    "browserAPIs": [],
    "ssrAPIs": [],
    "pluginFilepath": "",
    "importKey": 14
  },
  {
    "resolve": "",
    "id": "a298058a-3dad-513f-8661-f6ac30f8a72f",
    "name": "gatsby-plugin-page-creator",
    "version": "5.12.1",
    "pluginOptions": {
      "plugins": [],
      "path": "C:/Users/tesli/Desktop/PT/webapp/as-web/node_modules/gatsby-plugin-postcss/src/pages",
      "pathCheck": false
    },
    "nodeAPIs": [
      "createPages",
      "createPagesStatefully",
      "onPluginInit",
      "setFieldsOnGraphQLNodeType"
    ],
    "browserAPIs": [],
    "ssrAPIs": [],
    "pluginFilepath": "",
    "importKey": 15
  },
  {
    "resolve": "",
    "id": "48d3f9f2-a52e-580f-aae0-7c3cce40e0f2",
    "name": "gatsby-plugin-page-creator",
    "version": "5.12.1",
    "pluginOptions": {
      "plugins": [],
      "path": "C:/Users/tesli/Desktop/PT/webapp/as-web/node_modules/gatsby-plugin-image/src/pages",
      "pathCheck": false
    },
    "nodeAPIs": [
      "createPages",
      "createPagesStatefully",
      "onPluginInit",
      "setFieldsOnGraphQLNodeType"
    ],
    "browserAPIs": [],
    "ssrAPIs": [],
    "pluginFilepath": "",
    "importKey": 16
  },
  {
    "resolve": "",
    "id": "786e7646-0026-5387-aa43-447dfed8aedb",
    "name": "gatsby-plugin-page-creator",
    "version": "5.12.1",
    "pluginOptions": {
      "plugins": [],
      "path": "C:/Users/tesli/Desktop/PT/webapp/as-web/node_modules/gatsby-source-filesystem/src/pages",
      "pathCheck": false
    },
    "nodeAPIs": [
      "createPages",
      "createPagesStatefully",
      "onPluginInit",
      "setFieldsOnGraphQLNodeType"
    ],
    "browserAPIs": [],
    "ssrAPIs": [],
    "pluginFilepath": "",
    "importKey": 17
  },
  {
    "resolve": "",
    "id": "074f9963-e655-59ca-9e63-1eb9bce3e413",
    "name": "gatsby-plugin-page-creator",
    "version": "5.12.1",
    "pluginOptions": {
      "plugins": [],
      "path": "C:/Users/tesli/Desktop/PT/webapp/as-web/node_modules/gatsby-transformer-sharp/src/pages",
      "pathCheck": false
    },
    "nodeAPIs": [
      "createPages",
      "createPagesStatefully",
      "onPluginInit",
      "setFieldsOnGraphQLNodeType"
    ],
    "browserAPIs": [],
    "ssrAPIs": [],
    "pluginFilepath": "",
    "importKey": 18
  },
  {
    "resolve": "",
    "id": "862fb618-34a0-5fab-801a-f6ea5bcda87f",
    "name": "gatsby-plugin-page-creator",
    "version": "5.12.1",
    "pluginOptions": {
      "plugins": [],
      "path": "C:/Users/tesli/Desktop/PT/webapp/as-web/node_modules/gatsby-plugin-sharp/src/pages",
      "pathCheck": false
    },
    "nodeAPIs": [
      "createPages",
      "createPagesStatefully",
      "onPluginInit",
      "setFieldsOnGraphQLNodeType"
    ],
    "browserAPIs": [],
    "ssrAPIs": [],
    "pluginFilepath": "",
    "importKey": 19
  },
  {
    "resolve": "",
    "id": "28f9f1b4-fe08-52f7-a057-a7b62cfc8ed4",
    "name": "gatsby-plugin-page-creator",
    "version": "5.12.1",
    "pluginOptions": {
      "plugins": [],
      "path": "C:/Users/tesli/Desktop/PT/webapp/as-web/node_modules/gatsby-plugin-manifest/src/pages",
      "pathCheck": false
    },
    "nodeAPIs": [
      "createPages",
      "createPagesStatefully",
      "onPluginInit",
      "setFieldsOnGraphQLNodeType"
    ],
    "browserAPIs": [],
    "ssrAPIs": [],
    "pluginFilepath": "",
    "importKey": 20
  },
  {
    "resolve": "",
    "id": "2ffd890c-5c5c-5ea0-9267-42f0d6184f5f",
    "name": "gatsby-plugin-page-creator",
    "version": "5.12.1",
    "pluginOptions": {
      "plugins": [],
      "path": "C:/Users/tesli/Desktop/PT/webapp/as-web/src/pages",
      "pathCheck": false
    },
    "nodeAPIs": [
      "createPages",
      "createPagesStatefully",
      "onPluginInit",
      "setFieldsOnGraphQLNodeType"
    ],
    "browserAPIs": [],
    "ssrAPIs": [],
    "pluginFilepath": "",
    "importKey": 21
  }
]
