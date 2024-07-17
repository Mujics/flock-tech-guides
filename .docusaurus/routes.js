import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/flock-tech-guides/__docusaurus/debug',
    component: ComponentCreator('/flock-tech-guides/__docusaurus/debug', 'c5f'),
    exact: true
  },
  {
    path: '/flock-tech-guides/__docusaurus/debug/config',
    component: ComponentCreator('/flock-tech-guides/__docusaurus/debug/config', '410'),
    exact: true
  },
  {
    path: '/flock-tech-guides/__docusaurus/debug/content',
    component: ComponentCreator('/flock-tech-guides/__docusaurus/debug/content', '07c'),
    exact: true
  },
  {
    path: '/flock-tech-guides/__docusaurus/debug/globalData',
    component: ComponentCreator('/flock-tech-guides/__docusaurus/debug/globalData', 'b5e'),
    exact: true
  },
  {
    path: '/flock-tech-guides/__docusaurus/debug/metadata',
    component: ComponentCreator('/flock-tech-guides/__docusaurus/debug/metadata', '044'),
    exact: true
  },
  {
    path: '/flock-tech-guides/__docusaurus/debug/registry',
    component: ComponentCreator('/flock-tech-guides/__docusaurus/debug/registry', 'dc7'),
    exact: true
  },
  {
    path: '/flock-tech-guides/__docusaurus/debug/routes',
    component: ComponentCreator('/flock-tech-guides/__docusaurus/debug/routes', '139'),
    exact: true
  },
  {
    path: '/flock-tech-guides/',
    component: ComponentCreator('/flock-tech-guides/', '683'),
    routes: [
      {
        path: '/flock-tech-guides/',
        component: ComponentCreator('/flock-tech-guides/', '29a'),
        routes: [
          {
            path: '/flock-tech-guides/',
            component: ComponentCreator('/flock-tech-guides/', 'ff0'),
            routes: [
              {
                path: '/flock-tech-guides/',
                component: ComponentCreator('/flock-tech-guides/', 'abc'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/flock-tech-guides/style-guide',
                component: ComponentCreator('/flock-tech-guides/style-guide', '00e'),
                exact: true,
                sidebar: "docs"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
