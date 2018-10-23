# Edotensei
Simple Load Assets/Resource.

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
Edotensei.remove(scriptList) // To Remove Script Element in Body HTML
```

![madara](https://media.tenor.com/images/183c6d46ac5c2a9a90884b4a3713fa54/tenor.gif)


### Contribute 
- Fork This [annabelle](https://github.com/ri7nz/Edotensei)
- Send Pull Request
- Create An issue 
- I am very open please give advice & feedback
