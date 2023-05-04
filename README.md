# npm starter kit
Starter kit for publishing `esm` module.

## requirements
```
node v16.16.0
```

## concept
1. Write source code in the `src/npm-starter-kit` folder.
2. Copy `src/npm-starter-kit` folder into `dist/npm-starter-kit` folder.
3. Create files for publishing(e.g. `package.json`) in `dist/npm-starter-kit` folder.
4. Publish in `dist/npm-starter-kit` folder.

## usage

Create dist/ & copy source code
```
$ npm run build
```

If you don't want create d.ts. remove command below.
```
$ npm run generate-types
```

Complete prepare for publishing
```
$ npm run publish:prepare
```

If you finish you npm setting, It's time for publish.
```
$ npm run publish:full
```