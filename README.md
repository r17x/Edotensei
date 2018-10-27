# Edotensei

[![Known Vulnerabilities](https://snyk.io/test/github/ri7nz/Edotensei/badge.svg)](https://snyk.io/test/github/ri7nz/Edotensei)
[![NPM Version](https://badge.fury.io/js/edotensei.svg)](https://badge.fury.io/js/edotensei)
[![Build Status](https://travis-ci.com/ri7nz/Edotensei.svg?branch=master)](https://travis-ci.com/ri7nz/Edotensei)

Simple Load Assets/Resource.   
   
![madara](https://media.tenor.com/images/183c6d46ac5c2a9a90884b4a3713fa54/tenor.gif)

### Instalation
```
$ yarn add edotensei --dev
$ npm install edotensei --save-dev
```

### Usage
```
import Edotensei from 'edotensei'

const scriptList = [
  {
    src: 'main.js', // URL
    async: boolean,
    defer: boolean,
    rel: 'preload|prefetch|dns-prefetch'
  },
  // add more here {}
];

Edotensei.add(scriptList) // To Add Script Element in Body HTML 

# Make sure to pass same array of scriptList instance/reference
Edotensei.remove(scriptList) // To Remove Script Element in Body HTML

```

### Example in React 
- add & remove on react lifecycle
![use-in-react](https://github.com/ri7nz/Edotensei/blob/master/docs/use-in-react.png)  
- result in browser
![result-in-browser](https://github.com/ri7nz/Edotensei/blob/master/docs/result-react.png)

### Contributors
- Everyone who posted an issue / pull request
   
### Contribute & Help
- Star & Fork [Edotensei](https://github.com/ri7nz/Edotensei)
- Post any issues you find (please check existing issues before posting!)
- Post new feature requests
- Pull requests are welcome
