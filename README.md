📖 Bookshop node.js project

## Welcome to node.js App! This is a simple node.js application that demonstrates the capabilities of node.js, including using CREUD method, also this app show recent books.


```
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const PORT = 3000;

const booksRoute = require("./routes/books");
app.use("/books", booksRoute);

// Middleware to handle JSON data
app.use(bodyParser.json());

// Serve static files from the 'public' directory
app.use(express.static("public"));



```

## Demo 📸

[Live Demo]()🚀
💻
## Installation 👩‍💻
VS code, uppdate chorme, git bash

## Prerequisites
Node.js: Ensure you have Node.js (v12.x or later) installed. You can download it from nodejs.org.


## Usage 🎯

```bash
# git clone https://github.com/sodabarauf/first-node.js.git
# cd first-node.js
# Install dependencies using npm install or yarn install.
# Run the project with node server.js
# Write markdown and see the live preview instantly.
# Customize the preview using CSS and build for production if needed.
```

## 👤 Author: Sodaba Rauf

- [Linkedin](https://www.linkedin.com/in/sodaba-r-5a0733255/)
- [Email](sodabarauf4@gmail.com)
- [Github](https://github.com/sodabarauf)


## Contributing 🤝

To contribute, submit bug reports, feature requests, or pull requests via the GitHub repository issues and pull requests tabs.

