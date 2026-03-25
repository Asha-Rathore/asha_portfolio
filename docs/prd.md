# Requirements Document

## 1. Application Overview

- **Application Name:** Asha – Portfolio
- **Description:** A modern, responsive, and animated personal portfolio website for Software Engineer Asha Rathore. The site showcases her professional experience, skills, projects, education, and certifications with a clean developer aesthetic, dark/light mode toggle, smooth animations, and a contact form backed by Spring Boot. The portfolio is built using the attached CV as the primary reference.

---

## 2. Reference Files

1. CV file name: Asha_CV.pdf
   CV file link: https://miaoda-conversation-file.s3cdn.medo.dev/user-algotrj1adj4/conv-algtcfmyiwow/20260329/file-algwtu1o8g74.pdf
   Usage: Primary source of truth for all portfolio content including skills, experience, projects, education, certifications, and personal information. All content must be derived from this CV.

---

## 3. Users & Use Cases

- **Target Users:** Recruiters, hiring managers, collaborators, and anyone reviewing Asha's professional profile.
- **Core Use Cases:**
  - Browse Asha's background, skills, and experience
  - View and explore project cards
  - Download her CV
  - Send a message via the contact form
  - Toggle between dark and light mode

---

## 4. Page Structure & Core Features

### 4.1 Page Overview

```
Portfolio (Single Page Application)
├── Navigation Bar (sticky)
├── Hero Section
├── About Me Section
├── Skills Section
├── Experience Section
├── Projects Section
├── Education Section
├── Certifications & Languages & Interests Section
└── Contact Section / Footer
```

---

### 4.2 Navigation Bar

- Sticky top navigation bar that remains visible on scroll
- Links: Hero, About, Skills, Experience, Projects, Education, Contact
- Smooth scroll to each section on click
- Dark/light mode toggle button (icon-based)
- On mobile: collapses into a hamburger menu
- GitHub icon linking to https://github.com/Asha-Rathore
- LinkedIn icon linking to https://linkedin.com/in/asha-rathore-823819202

---

### 4.3 Hero Section

- Animated particle or gradient background (full-viewport)
- Short animated text introduction (typewriter or fade-in effect)
- Headline: 「Software Engineer building scalable web, mobile, and backend systems.」
- Sub-details: Name (Asha), Location (Ilmenau, Germany – Open to relocation, hybrid, remote)
- Three call-to-action buttons:
  - **Download CV** – triggers download of Asha_CV.pdf (file link: https://miaoda-conversation-file.s3cdn.medo.dev/user-algotrj1adj4/conv-algtcfmyiwow/20260329/file-algwtu1o8g74.pdf)
  - **View Projects** – smooth scrolls to Projects section
  - **Contact Me** – smooth scrolls to Contact section
- Entrance animation on page load (staggered fade/slide-in)

---

### 4.4 About Me Section

- Section reveal animation on scroll
- Concise professional summary derived from Asha_CV.pdf:
  - Software Engineer with 3+ years of experience
  - Expertise in Java, Spring Boot, .NET, Flutter, REST APIs
  - Experience across backend, web, and mobile development
  - Agile/Scrum methodology experience
  - Productivity-enhanced with AI tools: GitHub Copilot, ChatGPT, Claude
- Optional profile photo placeholder (if no image provided, use an elegant avatar/initials block)

---

### 4.5 Skills Section

- Section reveal animation on scroll
- All skills must be extracted directly from Asha_CV.pdf; the list below reflects the CV content and must be updated if the CV contains additional or different skills
- Skills displayed as animated tags or with animated progress indicators
- Dynamic skills visualization (e.g., radar chart or animated tag cloud)
- Grouped by category:
  - **Programming Languages:** Java, C#, Dart, Python, JavaScript, TypeScript, SQL
  - **Backend:** Spring Boot, REST APIs, JWT, Entity Framework, Node.js, Firebase
  - **Frontend:** Blazor, React, HTML, CSS
  - **Mobile:** Flutter, React Native, Kotlin
  - **Tools & IDEs:** Git, Postman, VS Code, IntelliJ IDEA, Android Studio, Jira, Figma
  - **Concepts & Practices:** OOP, Data Structures, Clean Architecture, SOLID Principles, Agile/Scrum
  - **AI Productivity Tools:** GitHub Copilot, ChatGPT, Claude
- Note: If Asha_CV.pdf contains additional skills not listed above, they must be included in the appropriate category

---

### 4.6 Experience Section

- Animated vertical timeline layout, revealed on scroll
- All experience entries must be sourced from Asha_CV.pdf
- Each entry includes: role title, company name, date range, location, and bullet-point highlights

**Entries (to be verified and supplemented from Asha_CV.pdf):**

1. **Working Student – Software Development**
   - Company: Analytik Jena
   - Period: February 2025 – December 2025
   - Location: Germany
   - Highlights:
     - Built a Blazor web application for automated license generation
     - Implemented full feature lifecycle from design to deployment

2. **Software Engineer**
   - Company: Binate Digital
   - Period: May 2022 – August 2024
   - Location: Pakistan
   - Highlights:
     - Developed cross-platform apps using Flutter
     - Integrated REST APIs and optimized performance

3. **Flutter Intern**
   - Company: Aks iQ
   - Period: March 2022 – April 2022

---

### 4.7 Projects Section

- Grid of project cards with hover animations (lift/glow effect)
- Each card displays:
  - Project name
  - Short description
  - Tech stack tags
  - GitHub link button – present and clickable, but links to private repositories (GitHub will show a 404 or private repo page; this is expected behavior)
- All project details must be sourced from Asha_CV.pdf

**Projects:**

1. **License Generating Tool**
   - Description: Web application for automated generation of PDF licenses
   - Tech: Blazor, .NET, Spring Boot
   - GitHub: private repository link (sourced from Asha_CV.pdf)

2. **Fare Share**
   - Description: Travel expense splitting application
   - Tech: Flutter, REST APIs, Firebase
   - GitHub: private repository link (sourced from Asha_CV.pdf)

3. **Locks**
   - Description: Sports information application
   - Tech: Flutter, REST APIs
   - GitHub: private repository link (sourced from Asha_CV.pdf)

4. **Baby Bonding**
   - Description: Location-based application using Google Maps
   - Tech: Flutter, Google Maps API
   - GitHub: private repository link (sourced from Asha_CV.pdf)

5. **Rent Folkz**
   - Description: QR-based rental platform
   - Tech: Flutter, QR integration, REST APIs
   - GitHub: private repository link (sourced from Asha_CV.pdf)

---

### 4.8 Education Section

- Section reveal animation on scroll
- All education entries sourced from Asha_CV.pdf
- Two entries displayed as cards or timeline items:

1. **M.Sc. in Research in Computer and Systems Engineering**
   - Institution: Technische Universität Ilmenau
   - Period: 2024 – Present

2. **B.Sc. in Computer Science**
   - Institution: Karachi Institute of Economics and Technology
   - Period: 2018 – 2022

---

### 4.9 Certifications, Languages & Interests Section

- Displayed as a grouped card or three-column layout
- All entries sourced from Asha_CV.pdf

**Certifications:**
- Flutter Fundamentals – 10Pearls
- UI/UX Certificate – 10Pearls
- Development Trainee – Binate Digital

**Languages:**
- English – IELTS 7
- German – A2 (B1 in progress)

**Interests:**
- Painting
- Travelling
- Learning new technologies

---

### 4.10 Contact Section

- Contact form with the following fields:
  - Name (required)
  - Email (required, format validation)
  - Message (required)
  - Submit button
- Form submission handled by Spring Boot backend endpoint
- Success and error feedback messages displayed inline
- Display contact details below or beside the form:
  - Email: rathoreasha75@gmail.com
  - Phone: +49 15560724768
  - Location: Ilmenau, Germany
- GitHub and LinkedIn icon links

---

## 5. Business Rules & Logic

- **CV as Source of Truth:** All content (skills, experience, projects, education, certifications) must be extracted from Asha_CV.pdf; any discrepancy between the CV and the above sections must be resolved in favor of the CV
- **Display Name:** The user's name is displayed as 「Asha」 throughout the portfolio (not 「Asha Rathore」)
- **Dark/Light Mode:** Toggle persists for the session; default is dark mode (developer aesthetic)
- **Smooth Scrolling:** All internal navigation links use smooth scroll behavior
- **Animated Section Reveals:** Each section animates into view as the user scrolls down (fade-in + slide-up)
- **Download CV:** Clicking 「Download CV」 triggers a direct file download of Asha_CV.pdf using the link: https://miaoda-conversation-file.s3cdn.medo.dev/user-algotrj1adj4/conv-algtcfmyiwow/20260329/file-algwtu1o8g74.pdf
- **Project GitHub Links:** All project cards include a GitHub link button pointing to the respective private repository (sourced from Asha_CV.pdf); since repositories are private, the links are present but access is restricted by GitHub
- **Contact Form Submission:**
  - Frontend validates all required fields before submission
  - POST request sent to Spring Boot backend
  - Backend sends or stores the message; returns success/failure response
  - On success: display confirmation message and reset form
  - On failure: display error message without clearing form
- **Mobile Responsiveness:** All sections reflow gracefully on screens from 320px upward; navigation collapses to hamburger menu on mobile

---

## 6. Exceptions & Edge Cases

| Scenario | Handling |
|---|---|
| Contact form submitted with empty required fields | Inline validation error shown per field; form not submitted |
| Invalid email format in contact form | Inline error: 「Please enter a valid email address」 |
| Spring Boot backend unreachable | Display: 「Unable to send message. Please try again later or email directly.」 |
| Project GitHub link points to private repository | Link is present and clickable; GitHub will display its standard private/404 page – no special handling needed |
| User on very small screen (< 360px) | Layout remains usable; no horizontal overflow |

---

## 7. Acceptance Criteria

- Hero section loads with animated particle/gradient background and staggered text entrance animation
- Name displayed as 「Asha」 throughout the entire portfolio
- Dark/light mode toggle switches theme across all sections without page reload
- All navigation links scroll smoothly to the correct section
- Each section animates into view on scroll
- Skills section renders all skills extracted from Asha_CV.pdf as animated tags or dynamic visualization grouped by category
- Experience section renders as an animated vertical timeline with all entries from Asha_CV.pdf
- All project cards display with hover animation, description, tech stack, and GitHub link button
- Education, certifications, languages, and interests are all visible and correctly grouped per Asha_CV.pdf
- Contact form validates all fields client-side before submission
- Contact form submits to Spring Boot backend and displays success or error feedback
- Download CV button triggers download of Asha_CV.pdf
- GitHub and LinkedIn icons are present and link to the correct URLs
- Layout is fully responsive and usable on mobile, tablet, and desktop
- No horizontal scroll on any viewport width

---

## 8. Out of Scope (This Release)

- User authentication or login system
- CMS or admin panel for editing portfolio content
- Blog or articles section
- Multi-language (i18n) support
- Analytics or visitor tracking integration
- Backend email delivery service configuration (Spring Boot endpoint structure is in scope; actual SMTP/email provider setup is out of scope)
- Automated CV generation from form input