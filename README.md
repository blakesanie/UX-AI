<h1>UX-AI</h1>

Evaluating and Enhancing User Experience across the web with Artificial Intelligence

<h2>Table of Contents</h2>

- [Introduction](#introduction)
- [Installation](#installation)
- [Getting Started](#getting-started)
- [Examples and Applications](#examples-and-applications)
- [Usage with JavaScript UI Frameworks](#usage-with-javascript-ui-frameworks)
- [License and Attribution](#license-and-attribution)

## Introduction

UX-AI provides the ability to strengthen user experience by intelligently inferring user behavior status given demonstrated page interactions. In realtime, the AI agent periodically classifies such behavior statuses as either `distracted, engaged, idle, lost, or rushed`.

Our goal is for sites to leverage this valuable information to improve user experience during the browsing session.

For instance, once detecting that a user is **lost**, the underlying site can place visual emphasis on its search bar. Or, once a user is said to be `rushed`, a component containing contact information can be discretely presented before the user navigates away.

Most of the time, user behavior is classified as `engaged`, suggesting that the user is following along with the page as intended.

## Installation

Download the package with npm

```
npm install ux-ai
```

or link to your project with a \<script> tag

```html
<head>
    ...
    <script async src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs/dist/tf.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/ux-ai@latest/UXAI.js"></script>
</head>
```

_Note that if installing via \<script> tag, the TensorFlow.js package (ML Backend) must be explicitly linked_

## Getting Started

Instantiate a UXAI object, providing a handler function called after each inference with the history of classified behavior statuses as Strings.

```javascript
const uxai = new UXAI((history) => {
    // history is an array with values: "distracted", "engaged", "idle", "lost", or "rushed"

    /*
        your logic here
    */
})
```

If using a UI framework with Node.js, don't forget to import the package
```javascript
// top of file
import UXAI from "ux-ai"
```

## Examples and Applications

Sign Out the user when idle for 5 inference cycles:

```javascript
if (history.slice(history.length - 5).every((status) => status === "idle")) {
    signOutCurrentUser();
}
```

Trigger an auto-save before the distracted user forgets:

```javascript
if (history[history.length - 1] === "distracted") {
    saveDocument();
}
```

Gauge session page interest after once 10 inference cycles have passed:

```javascript
if (history.length >= 10) {
    const interest = history.filter(status => status === "engaged").length / history.length;
    console.log(`Interested ${Math.round(interest * 100)}% of the time`);
}
```

Of course, these are just a few simple examples. Feel free to take UX-AI in whatever direction you choose, staying well within ethical boundaries.

## Usage with JavaScript UI Frameworks

## License and Attribution

