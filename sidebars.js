module.exports = {
  docs: 
  {
    'Introduction': ['intro'],
    'Development': [
      'development/style-guide',
      'development/postman-use-guide'
    ],
    'Backend': [ 
      {
        type: 'category',
        label: 'Java',
        items: 
        [
          'backend/java/java'
        ],
      },
      {
        type: 'category',
        label: 'Netcore',
        items: 
        [
          'backend/net-core/net-core'
        ],
      }, 
    ],
    'Front-end': [ 
      {
        type: 'category',
        label: 'Angular',
        items: 
        [
          'front-end/angular/angular'
        ],
      },
      {
        type: 'category',
        label: 'React',
        items: 
        [
          'front-end/react/react'
        ],
      }, 
    ],
    'Presentaciones': [
      'presentaciones/docusaurus',
      'presentaciones/codeium'
    ],
    'Proyectos': [
      {
        type: 'category',
        label: 'Pivot',
        items: 
        [
          'proyectos/pivot/capas-de-librerias',
          'proyectos/pivot/lambda-documentacion'
        ],
      }
    ]
  },
};



