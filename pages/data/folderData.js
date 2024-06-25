const explorer = {
  id: "1",
  name: "root",
  isFolder: true,
  items: [
    {
      id: "2",
      name: "public",
      isFolder: true,
      items: [
        {
          id: "3",
          name: "public nested 1",
          isFolder: true,
          items: [
            {
              id: "4",
              name: "index.html",
              isFolder: false,
              content: "<h1>this is our first ide</h1>",
              items: [],
            },
            {
              id: "5",
              name: "hello.html",
              isFolder: false,
              content: "<h1>hello world</h1>",
              items: [],
            },
          ],
        },
        {
          id: "6",
          name: "public_nested_file",
          isFolder: false,
          content: "our first ide website",
          items: [],
        },
      ],
    },
    {
      id: "7",
      name: "src",
      isFolder: true,
      items: [
        {
          id: "8",
          name: "App.js",
          isFolder: false,
          content: "console.log(hello ide)",
          items: [],
        },
        {
          id: "9",
          name: "Index.js",
          isFolder: false,
          content: "import { useState } from 'react';",
          items: [],
        },
        {
          id: "10",
          name: "styles.css",
          isFolder: false,
          content:
            ".textarea { margin:5px; width: 98.5%; height: 67vh; background-color: rgb(227, 233, 233);}",
          items: [],
        },
      ],
    },
    {
      id: "11",
      name: "package.json",
      isFolder: false,
      content: "import { useState } from 'react';",
      items: [],
    },
  ],
};

export default explorer;
