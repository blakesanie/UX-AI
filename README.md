<div id="header">

<h1>UX-AI</h1>
<p id="headline">Enabling websites to evaluate and enhance user experience with Artificial Intelligence</p>
<div id="actions">
<a href="https://www.npmjs.com/package/react-bubble-ui">
<img alt="npm" src="https://img.shields.io/npm/v/ux-ai?style=for-the-badge&logo=npm" style="border-radius: 5px; overflow: hidden;">
</a>
<a href="https://paypal.me/blakesanie">
<img alt="Donate" src="https://img.shields.io/badge/Donate-%20?style=for-the-badge&logo=paypal&color=blue" style="border-radius: 5px; overflow: hidden;">
</a>
<a href="https://github.com/blakesanie/UX-AI">
<img alt="GitHub" src="https://img.shields.io/badge/GitHub-%20?style=for-the-badge&logo=github&color=grey" style="border-radius: 5px; overflow: hidden;">
</a>
<a href="https://github.com/blakesanie/UX-AI/blob/main/LICENSE">
<img alt="Apache 2.0" src="https://img.shields.io/github/license/blakesanie/UX-AI?logo=apache&style=for-the-badge&color=4B4BAB&label=%20" style="border-radius: 5px; overflow: hidden;">
</a>
</div>
</div>


## Table of Contents

<ul class="sticky">
<li><a href="#introduction">Introduction</a></li>
<li><a href="#demo">Demo</a></li>
<li><a href="#installation">Installation</a></li>
<li><a href="#getting-started">Getting Started</a></li>
<li><a href="#examples-and-applications">Examples and Applications</a></li>
<li><a href="#future-improvements">Future Improvements</a></li>
<li><a href="#license-and-attribution">License and Attribution</a></li>
</ul>

## Introduction

UX-AI provides the ability to strengthen user experience by intelligently inferring user behavior status given demonstrated page interactions. In realtime, the AI agent periodically classifies such behavior statuses as either `distracted, engaged, idle, or rushed`.

Our goal is for sites to leverage this valuable information to improve user experience during the browsing session.

For instance, once detecting that a user is `rushed`, a component containing contact information can be discretely presented before the user navigates away. See more use cases and examples [here](#examples-and-applications).

Most of the time, user behavior is classified as `engaged`, suggesting that the user is following along with the page as intended.

_Don't worry, UX-AI does not save any observations of user behavior. No user-related data collected by UX-AI ever leaves the browser. Upon refresh or page close, all respective data UX-AI disappears._

## Demo

View a live demo [here](https://blakesanie.com).

## Installation

First, make sure to link TensorFlow.js, the ML framework on top of which UX-AI's models are built.

```html
<head>
    ...
    <script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs/dist/tf.min.js"></script>
</head>
```

Download UX-AI with npm

```
npm install ux-ai
```

or link the package with a \<script> tag

```html
<head>
    ...
    <script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs/dist/tf.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/ux-ai@latest/UXAI.js"></script>
</head>
```

## Getting Started

If using a UI framework with Node.js, don't forget to import the package. This is not necessary if the package is imported via \<script\> tag.

```javascript
// top of file
import UXAI from "ux-ai"
```

Instantiate a UXAI object, passing in an object of options.

```javascript
const uxai = new UXAI({
    inferenceInterval: 10000, // ms between predictions, must be between 3000 and 10000.
    inferenceCallback: history => {}, // history is array of behavior status Strings
})
```

Note that behavior status classifications are more stable with a greater inferenceInterval.

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

## Future Improvements

Observation and intelligent prediction/classification methods are always under further development, though often occurring outside this repository. UX-AI will automatically use the most recently published ML model, as it is loaded over the cloud.

## License and Attribution

This project is released under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). In your own derivations, significant changes should be stated and attributions should be maintained in the NOTICE file.

