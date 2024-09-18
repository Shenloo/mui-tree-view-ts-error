### This repo reproduces TS error when using MUI-X TreeView component

Steps to reproduce the error:
- install dependencies: `npm install`
- build app: `npm run build`

During building, ts should throw the error:
>src/Demo.tsx:63:36 - error TS2339: Property 'getItem' does not exist on type 'Partial<{}>'.

