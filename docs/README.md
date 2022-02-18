<!-- PROJECT LOGO -->
<h1 align="center">
  <img align="center" src="../img/logo.png" alt="Logo" width=40 height=40>
  <span align="center">TodoJS</span>
</h1>

<p align="center">
  A todo list application written in Vanilla JavaScript.<br />
  <a href="https://todojs.martisbvk.repl.co/">View Demo</a>
  ·
  <a href="https://github.com/bernardm/todo-js/issues">Report Bug</a>
  ·
  <a href="https://github.com/bernardm/todo-js/issues">Request Feature</a>
</p>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#license">License</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project

<!-- PROJECT SHIELDS -->
[![Contributors][contributors-shield]][contributors-url]
[![Issues][issues-shield]][issues-url]
[![License: MIT][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

[![TodoJS Screen Shot][product-screenshot]](https://todojs.martisbvk.repl.co/)

A todo list written in Vanilla JavaScript.

<p align="right">(<a href="#readme">back to top</a>)</p>

### Built With

* [Mocha](https://mochajs.org/)
* [node assert](https://nodejs.org/api/assert.html)
* [ESLint](https://eslint.org/)
* [Font Awesome](https://fontawesome.com/)

<p align="right">(<a href="#readme">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these steps.

### Prerequisites

Setup a global instance of mocha for testing.
  ```sh
  npm install -g mocha
  ```

Setup a webserver to load the JavaScript app. Any webserver can be used. The usage steps provided assume `static-server` is installed.
  ```sh
  npm install -g static-server
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/bernardm/todo-js.git
   cd todo-js
   ```
1. Install NPM packages
   ```sh
   npm install
   ```

<p align="right">(<a href="#readme">back to top</a>)</p>

<!-- USAGE EXAMPLES -->
## Usage

1. Run the unit tests
   ```sh
   mocha
   ```
1. Launch the application
   ```sh
   static-server -o
   ```

<p align="right">(<a href="#readme">back to top</a>)</p>

<!-- ROADMAP -->
## Roadmap

- [ ] Responsive layout fot desktop, tablet, and mobile devices
- [ ] User data saved locally
- [ ] Todo Groups/Projects
    - [ ] Tree view with infinite nesting
    - [ ] Drag Drop to reorganize projects
- [ ] Todo Items
    - [ ] Drag Drop to sort todo items

See the [open issues](https://github.com/bernardm/todo-js/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme">back to top</a>)</p>

<!-- LICENSE -->
## License

Copyright (c) 2021-2022 Bernard Martis, Lakshay Gosain.

Distributed under the MIT License. See `docs/LICENSE.txt` for more information.

<p align="right">(<a href="#readme">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
[contributors-shield]: https://img.shields.io/github/contributors/bernardm/todo-js.svg?style=flat-square
[contributors-url]: https://github.com/bernardm/todo-js/graphs/contributors
[issues-shield]: https://img.shields.io/github/issues/bernardm/todo-js.svg?style=flat-square
[issues-url]: https://github.com/bernardm/todo-js/issues
[license-shield]: https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square
[license-url]: https://github.com/bernardm/todo-js/blob/main/docs/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=0077b5
[linkedin-url]: https://linkedin.com/in/bernard-martis
[product-screenshot]: ../img/logo.png
