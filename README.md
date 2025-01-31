# Wheel Spinner - Random Choice Maker

[My Notes](notes.md)


> [!NOTE]
>  This is a template for your startup application. You must modify this `README.md` file for each phase of your development. You only need to fill in the section for each deliverable when that deliverable is submitted in Canvas. Without completing the section for a deliverable the TA will not know what to look for when grading your submission. Feel free to add additional information to each deliverable description, but make sure you at least have the list of rubric items and a description of what you did for each item.

## 🚀 Specification Deliverable

- [x] Proper use of Markdown in README.md
- [x] A concise and compelling elevator pitch in your README.md
- [x] Description of key features in your README.md
- [x] Description of how you will use each technology
- [x] One or more rough sketches of your application. Images must be embedded in your README.md.

### Elevator pitch

You know that moment when you need to decide between a list of options and they are all equally good? What you need is a simple website where you can create a spinner to make the choice for you. It is quick and simple, just fill in the blanks and add as many choices as you need. You can even save previous wheels if you often need to do similar spins. Plus you can see what others are spinning at the same time for fun!

### Design

![Design image](src/img/DesignDrawing.jpg)

Just a simple page where the central element is the spinning wheel, and you can put in all of the options.

```mermaid
sequenceDiagram
  actor User1 as User1
  actor User2 as User2
  participant Server as Server

  User2 ->> Server: save this wheel
  User1 ->> Server: spin result "swim"
  Server ->> User2: user1 spun "swim"
```

### Key features

- Ability to login to have history of wheels
- Ability to adjust number of entries
- See results of other users spins

### Technologies

I am going to use the required technologies in the following ways.

- **HTML** - Organize main content on page, two primary pages: wheels and login.
- **CSS** - Style and keep text elements clear and visually separated. Also adjust for screen size.
- **React** - Control spinning animation, random result picking, login and authentication.
- **Service** - Endpoints for login, saving, and retrieving old wheels, change the colors of wheel using the [ColourLovers](https://www.colourlovers.com/api#palettes) for fun.
- **DB/Login** - Store users and wheels. Securely store users information. Cannot save wheels if not logged in.
- **WebSocket** - Serve results from other wheel spins to add a fun twist.

## 🚀 AWS deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **Server deployed and accessible with custom domain name** - [My server link](https://ecdye.click).

## 🚀 HTML deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **HTML pages** - 3 basic pages representing the webpage have been implemented
- [x] **Proper HTML element usage** - All the different elements are used in appropriate places
- [x] **Links** - There are links across all parts of the page
- [x] **Text** - Text elements are used throughout the pages
- [x] **3rd party API placeholder** - Placeholder in pages
- [x] **Images** - An image is included to show off the very simple origins of the page
- [x] **Login placeholder** - There is a placeholder login page
- [x] **DB data placeholder** - There is a placeholder history page that will use a database
- [x] **WebSocket placeholder** - There is a websocket placeholder that has results of other users spins

## 🚀 CSS deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **Header, footer, and main content body** - General styling was added
- [x] **Navigation elements** - Sticky navbar with styling complete
- [x] **Responsive to window resizing** - The website appears normal in normal configurations.
- [x] **Application elements** - All of the different elements of the application are styled as much as possible without use of JS.
- [x] **Application text content** - Text is styled as appropriate to draw focus and encourage clarity
- [x] **Application images** - The image on the about page is styled to appear nicely

## 🚀 React part 1: Routing deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Bundled using Vite** - I did not complete this part of the deliverable.
- [ ] **Components** - I did not complete this part of the deliverable.
- [ ] **Router** - Routing between login and voting components.

## 🚀 React part 2: Reactivity

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **All functionality implemented or mocked out** - I did not complete this part of the deliverable.
- [ ] **Hooks** - I did not complete this part of the deliverable.

## 🚀 Service deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Node.js/Express HTTP service** - I did not complete this part of the deliverable.
- [ ] **Static middleware for frontend** - I did not complete this part of the deliverable.
- [ ] **Calls to third party endpoints** - I did not complete this part of the deliverable.
- [ ] **Backend service endpoints** - I did not complete this part of the deliverable.
- [ ] **Frontend calls service endpoints** - I did not complete this part of the deliverable.

## 🚀 DB/Login deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **User registration** - I did not complete this part of the deliverable.
- [ ] **User login and logout** - I did not complete this part of the deliverable.
- [ ] **Stores data in MongoDB** - I did not complete this part of the deliverable.
- [ ] **Stores credentials in MongoDB** - I did not complete this part of the deliverable.
- [ ] **Restricts functionality based on authentication** - I did not complete this part of the deliverable.

## 🚀 WebSocket deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Backend listens for WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **Frontend makes WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **Data sent over WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **WebSocket data displayed** - I did not complete this part of the deliverable.
- [ ] **Application is fully functional** - I did not complete this part of the deliverable.
