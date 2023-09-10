import { Component, CreateAppFunction, VueElement, createApp, defineAsyncComponent, defineComponent, ref } from "vue";

const app = createApp({})
const fs = require('fs');
const path = require('path');

function importFilesFromFolder(folderPath, fileExtension) {
  const files = fs.readdirSync(folderPath);

  const filteredFiles = files.filter((file) =>
    path.extname(file).toLowerCase() === fileExtension.toLowerCase()
  );

  const importedFiles = filteredFiles.map((file) => require(path.join(folderPath, file)));

  return importedFiles;
}

// Usage example
const folderPath = '/path/to/folder';
const fileExtension = '.js';
const importedFiles = importFilesFromFolder(folderPath, fileExtension);

console.log(importedFiles);

export default {
    install: (app, options: string) => {
        app.component('Svg', defineComponent({
            props: {
              name: {
                type: String,
                required: true
              },
              width: {
                type: String,
                reqired: false,
              },
              color: {
                type: String,
                required: false,
              },
              hover: {
                type: String,
                required: false,
              }
            },
            setup(props) {
                const svg = import.meta.glob<Record<string, string>>(`${options}/*.svg`, { eager: true })[`./${options}/${props.name}.svg`].default;

                console.log(options);
                

              // Component setup logic goes here
              // Access props and define component's behavior
      
              // Return data, methods, or computed properties
              return {
                count: ref(0),
                increment() {
                  this.count++;
                }
              };
            },
            template: `
              <div>
                <h2>{{ title }}</h2>
                <p>Count: {{ count }}</p>
                <button @click="increment">Increment</button>
              </div>
            `
          }));
    

        // const svg = import.meta.glob<Record<string, string>>('./assets/icons/*.svg', { eager: true })[`./assets/icons/${props.name}.svg`].default;

        // app.component('svg', defineComponent<{
        //     name: string;
        //     width: number;
        //     color?: string;
        //     hover?: string;
        // }>({
        //     props: {
        //         name: ''
        //     }
        //     setup(props) {

        //     }
        // }));
    }
}