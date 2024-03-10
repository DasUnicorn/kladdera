# Kladerradatsch
We are redefining Task Management for Mental Well-being.
In a world where productivity apps often add to the stress rather than alleviate it, Kladerradatsch was designed with a deep understanding of the challenges faced by individuals battling depression.

At its core, Kladerradatsch acknowledges the variability of human energy levels. Unlike traditional task managers that demand relentless productivity regardless of one's mental state, Kladerradatsch adapts to the user's fluctuating energy resources throughout the day.

Imagine a tool that empowers users to seize the high-energy days for tackling tasks and ambitions with fervor. Yet, equally important, Kladerradatsch gently reminds users to prioritize self-care and basic needs during low-energy periods, recognizing that productivity should never come at the cost of well-being.

## Content

<!-- toc -->

## Technologies Used

* GitHub – storage and deployment
* Sublime Text - Editor
* Heroku - Deployment

### Languages Used

JavaScript, HTML/CSS

### Frameworks, Libraries & Programs Used

* React
* TypeScript
* Tailwind CSS


## User Experience
In a market saturated with productivity apps, Kladerradatsch stands out as a testament to empathy-driven design.

### Target Audience
Kladerradatsch caters to a specific demographic whose needs are often overlooked in the realm of productivity apps. Our target audience encompasses individuals who:

#### Struggle with Mental Health Challenges
The primary focus of Kladerradatsch is to provide support for individuals battling depression, anxiety, or other mental health conditions. These individuals often find it challenging to maintain a consistent level of productivity due to fluctuations in mood, energy, and motivation.

#### Experience Energy Variability
The target audience comprises individuals who recognize the variability of their energy levels throughout the day. They understand that some days are filled with boundless energy and optimism, while others are marked by fatigue and low motivation. Kladerradatsch empowers these individuals to make the most of their high-energy days while respecting their limitations on low-energy days. This applies also to people working in shift work, or having a chronical illness.

### Medical Background

## Project

### Workflow
In the development process, a Kanban board in form of a [github project](https://github.com/users/DasUnicorn/projects/3) is used to manage the tasks and track their progress. Initially, all issues are collected and placed in the backlog. During each iteration, a set number of issues are selected to be developed and assigned to the current milestone. These selected issues are then moved to the 'To Do' column on the Kanban board, indicating that they are ready to be worked on.

When working on the tasks begins, the status of the issues is updated to 'In Process'. This signifies that active development is underway. Once the development work is completed, the issues move to the 'Testing' column, where they undergo thorough testing to ensure the acceptions criterias are met.

If an issue passes testing successfully, it is considered 'Done' and is moved to the final column on the Kanban board.

If an issue encounters blockers or dependencies that prevent progress, it is moved to the 'Waiting' column. Here, it remains until the blockers are resolved, allowing work to resume.

Throughout its journey, from 'To Do' to 'Testing' and ultimately 'Done', detailed information including comments, Git commits, and testing results is added to each issue. This approach ensures transparency regarding the path and work undertaken for every issue.

![Kanban-Board](static/img/readme/kanban.png)

### Epics
Sadly GitHub does not support epics.
Therefore Epics have been created as a separate Issue, containing a list of all User Stories belonging to this Epic.
They have the label "epic" to filter for them.

### User Stories
Features in this project are structured through [user stories](https://github.com/DasUnicorn/kladdera/issues?q=is%3Aissue).
Each User Story contains:
- **Dependencies:** This field indicates any external factors or requirements that need to be fulfilled before the user story can be implemented in a form of a list of other user stories.
- **Description Of Service Or Screen:** This field typically describes the specific service, feature, or screen that the user story relates to.
- **User Objective:** This field outlines the user's goal or objective. It should clearly state what the user wants to achieve or accomplish. The format follows: "As a user, I want to [action], so that [reason or benefit]." With this Objective in mind, User Stories are created to align with the target audience.
- **Acceptance Criteria:** This field specifies the conditions or criteria that must be met for the user story to be considered complete. It helps define the boundaries and expectations for implementing the user story.

## Design
The elegant simplicity of the Apple Watch typography left an indelible impression, serving as the cornerstone of Kladerradatsch's design philosophy. Embracing clean lines, minimalistic elements, and intuitive layouts, our design exudes a sense of calmness.
At the heart of Kladerradatsch lies a neutral palette. Against this backdrop, pops of vibrant color emerge for modern energy.
Building upon the foundation of simplicity, Kladerradatsch incorporates elements of modern abstract art, geometric shapes, fluid lines, and subtle textures.

### Wireframes
The design centers around an information page, authentication (login, sign up, logout,...), and past time statistics. At the core is the customizable todo list, displaying task count and energy level represented by emojis. Tasks are assigned energy levels, and the app structure shell be highly customizable to suit individual preferences.

### Prototype
The Figma prototype offers a glimpse into Kladerradatsch's design idea. 




## Credits:
* https://www.material-tailwind.com/docs/react/
* Graphics: https://www.freepik.com/free-vector/geometric-wallpaper_10423742.htm#fromView=search&page=7&position=1&uuid=8652eecc-bed0-4938-a4e7-0d46a57c165a
* Typograph Apple Watch Design https://support.apple.com/de-de/guide/watch/apde9218b440/watchos
* SVG Icons https://www.svgrepo.com/svg/526462/
* CSS Modules https://medium.com/@ralph1786/using-css-modules-in-react-app-c2079eadbb87
* https://react-icons.github.io/react-icons/
* Navbar https://medium.com/@ryaddev/build-responsive-navbar-with-tailwind-css-and-react-icons-3b13a272dec4
* https://github.com/remix-run/react-router
* routing https://www.youtube.com/watch?v=Ul3y1LXxzdU