#  ResumeFlow - AI Powered Resume Builder Landing  Page UI


**ResumeFlow** is a modern, responsive resume builder landing page UI designed using **HTML semantic tags** and **CSS**. The project focuses on creating a professional user interface with interactive components, responsive layouts, hover effects.

#  Technologies Used


HTML(HYPERTEXT MARKUP LANGUAGE)

CSS(CASCADING STYLE SHEET)

JavaScript    

#  Project Structure

    resume-landing/
    │
    ├── index.html
    ├── style.css
    ├── script.js
    ├── resume1.webp
    ├── resume2.webp
    ├── resume3.webp
    └── README.md


#  Semantic HTML Tags Used

Instead of using unnecessary `<div>` elements, I focused on semantic HTML tags.

    <header>
    <nav>
    <main>
    <section>
    <article>
    <form>
    <footer>
    <time>

#  CSS Concepts Used

This project helped me practice many CSS concepts:

    * Flexbox
    * CSS Grid
    * CSS Clamp()
    * CSS Min()
    * CSS Transitions
    * CSS Transform
    * Hover Effects
    * Glow Effects
    * Gradient Text
    * Gradient Shadows
    * 3D Card Flip Animations
    * Responsive Design
    * Media Queries
    * Pseudo Elements
    * CSS Positioning



# JavaScript:

    javascript
    document.getElementById("current-year").textContent =
    new Date().getFullYear();
    
## How It Works

Created a card-based process flow:

* Step 1 → Choose Template
* Step 2 → Fill Information
* Step 3 → Download Resume

#  Problems Faced

During development, I encountered several challenges.

### Problem 1

Multiple cards were overlapping on smaller screens.

### Solution

I used:

css

    flex-wrap: wrap;
    width: min(350px,90vw);

### Problem 2

Navbar items broke on mobile devices.

### Solution

Used media queries:

css

    .nav{
        flex-direction:column;
    }

### Problem 5

Invalid CSS values like font-style:bold; and background-color:darkgrey.

### Solution

Corrected :

css

    background:#1f2225;
    font-weight:bold;

#  What I Learned

This project improved my understanding of:

* Semantic HTML
* CSS Layout Systems
* UI Design Principles

# Preview

```
ResumeFlow
├── Hero Section
├── Features
├── How It Works
├── Templates
├── FAQ
└── Footer
```

---

# Author

Developed by **inf0chan**

This project was built as part of my journey to improve my skills in:

* HTML5
* CSS3
* Responsive Design
* Frontend Development

**If you liked this project, consider giving it a star on GitHub.**
