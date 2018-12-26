# Edotensei

[![Known Vulnerabilities](https://snyk.io/test/github/ri7nz/Edotensei/badge.svg)](https://snyk.io/test/github/ri7nz/Edotensei)
[![NPM Version](https://badge.fury.io/js/edotensei.svg)](https://badge.fury.io/js/edotensei)
[![Build Status](https://travis-ci.com/ri7nz/Edotensei.svg?branch=master)](https://travis-ci.com/ri7nz/Edotensei)
[![Contributors](https://badgen.net/github/contributors/ri7nz/edotensei)](https://github.com/contributors/ri7nz/edotensei)
[![Bundlephobia](https://badgen.net/bundlephobia/min/edotensei)](https://bundlephobia.com/result?p=edotensei@1.0.0)
[![Bundlephobia](https://badgen.net/bundlephobia/minzip/edotensei)](https://bundlephobia.com/result?p=edotensei@1.0.0)
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fri7nz%2FEdotensei.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Fri7nz%2FEdotensei?ref=badge_shield)

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
  // Load javascript 
  {
    src: 'main.js', // URL
    async: boolean,
    defer: boolean,
    rel: 'preload|prefetch|dns-prefetch'
  },
  
  // load css
  {
    src: 'main.css', // load css
    rel: 'preload|prefetch|dns-prefetch'
  }
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


## License
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fri7nz%2FEdotensei.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Fri7nz%2FEdotensei?ref=badge_large)