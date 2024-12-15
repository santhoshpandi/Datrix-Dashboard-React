const items = [
  {
    name:'Home', path:'/'
  },
  {
    name:'Trend', path:'/trend'
  },
  {
    name:'Layout',
    path:'/layout',
    items:[
      {
        name:'Computer', path:'/layout/computer'
      },
      {
        name:'Laptop', path:'/layout/laptop'
      },
      {
        name:'Tablet', path:'/layout/tablet'
      },
      {
        name:'Mobile', path:'/layout/mobile'
      },
    ]
  },
  {
    name:'Plan',
    path:'/plan',
    items:[
      {
        name:'Basic', path:'/plan#basic'
      },
      {
        name:'Advanced', path:'/plan#advanced'
      },
      {
        name:'Pro', path:'/plan#pro'
      },
    ]
  },
  {
    name:'API Reference', path:'/api-reference'
  },

  
]

export default items