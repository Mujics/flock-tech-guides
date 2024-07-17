import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
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
