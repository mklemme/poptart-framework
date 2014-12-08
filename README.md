# Poptart Documentation
Poptart's wiki table of contents:  
* [Layout](https://github.com/Sprk-Platform/poptart/wiki/1.0-Layout)  
  * [Grid](https://github.com/Sprk-Platform/poptart/wiki/1.1-Grid-layout)  
* [Utilities](https://github.com/Sprk-Platform/poptart/wiki/2.0-Utilities)  
  * [Helper Classes](https://github.com/Sprk-Platform/poptart/wiki/2.1-Helper-classes)  

## Getting started

There are 4 ways to start using Poptart:

### Method 1: CDN delivered files

Include this in your header to include Poptart's assets.
```html
<link href="http://framework.getsprk.com/cherry/v/1.0.min.css" type="stylesheet">
```

### Method 2: Self-hosted files
```html
<link href="path/to/library/cherry/1.0.min.css" type="stylesheet">
```

### Method 3: SASS/SCSS raw files

If you want to use the raw SASS files, download them **here**. Check out our list of recommended development workflows for **node** and **rails**. The file structure for the SASS files:
```html
.
├── application.scss
└── _poptart
    |
    ├── _settings
    |   ├── config.sass
    |   ├── mixins.sass
    |   ├── reset.sass
    |
    ├── _components 
    |   ├── button.sass
    |   ├── grid.sass
    |   ├── cards.sass
    |   
    └── framework.sass

```

### Method 4: Node app starter kit

You can also clone this repo and immediately start using the app as a starting point for your app.
```zsh
git clone https://github.com/Sprk-Platform/poptart
```

### Contributors

We have a long list of valued contributors. Check them all at:

https://github.com/Sprk-Platform/poptart/graphs/contributors

We welcome contributions. If you find something you would like to improve, create a pull request.

### Bug reports

If you discover a problem with Poptart, we would like to know about it. However, we ask that you please review these guidelines before submitting a bug report:

https://github.com/Sprk-Platform/poptart/wiki/?Bug-reports

## License

Insert license info
