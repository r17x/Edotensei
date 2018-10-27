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
![use-in-react](https://github.com/ri7nz/Edotensei/blob/master/docs/use-in-react.png)
![result-in-browser](https://github.com/ri7nz/Edotensei/blob/master/docs/result-react.png)

   
### Contribute 
- Fork This [Edotensei](https://github.com/ri7nz/Edotensei)
- Send Pull Request
- Create An issue 
- I am very open please give advice & feedback
