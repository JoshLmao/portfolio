# Overview

These ```.json``` files power the main website and are used to populate the content.

## Portfolio

The ```portfolio.json``` is used to power the main page and contains information related to it, such as a welcoming message, social links, as well as listing any relevant experience.

The ```featured``` array is a list of project titles that are used inside the ```projects.json``` file and will search inside it and display all projects specified.

## Projects

The ```projects.json``` data file contains a list of all projects and their types. The ```/#/projects``` page is split up by project types (Games/Web Development/Other) and will only display the projects of the selected type. 

### Project Properties

A project contains a title, description, any external links such as a repo or live website, any assets to display next to it, and a date the project was started/completed.

#### Assets

The ```assets``` object can contains:

* ```image``` - A path to an image, relative to the ```public``` directory
* ```video``` - Path to a video, relative to the ```public``` directory

#### Links

The ```links``` object can contains the following:

* ```github``` - a github link
* ```gitlab``` - a gitlab link
* ```website``` - a link to an external website
* ```youtube``` - link to youtube video

#### Date

The ```date``` requires a [ISO-8601](https://en.wikipedia.org/wiki/ISO_8601) date representation which can be made by using [this website](https://dencode.com/en/date/iso8601) and using the ```ISO8601 Date (Extended)``` encoded option

