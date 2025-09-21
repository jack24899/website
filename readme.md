# Jack Male - Portfolio Website

A modern, responsive portfolio website built with Node.js, Express, and Handlebars. Features a clean design showcasing projects, skills, and professional information with both development server and static site generation capabilities.

## Features

* Responsive Design: Mobile-first approach with Tailwind CSS
* Modern UI: Clean, professional interface with smooth animations
* Project Showcase: Featured projects with technology tags and GitHub links
* Skills Visualization: Progress bars for technical skills
* Contact Form: Integrated contact form with reCAPTCHA validation
* Static Site Generation: Build to static HTML for easy deployment
* FAQ Section: Expandable FAQ section on contact page
* SEO Optimized: Proper meta tags and semantic HTML structure

## Live Demo

The website is deployed and accessible at: https://melodic-kringle-1cfb44.netlify.app/ 

## Tech Stack

* **Backend**: Node.js, Express.js
* **Templating**: Handlebars.js
* **Styling**: Tailwind CSS (via CDN)
* **Form Handling**: Formspree integration
* **Security**: reCAPTCHA v2 protection
* **Development**: Nodemon for hot reloading
* **Deployment**: Static site generation for Netlify

## Prerequisites

Before running this project, make sure you have:

* Node.js (v14 or higher)
* npm or yarn package manager
* Git

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/jack24899/website.git
   cd website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables** (optional)
   
   Create a `.env` file in the root directory if you need to customize:
   ```
   PORT=5000
   NODE_ENV=development
   ```

## Running the Application

### Development Mode
Start the development server with hot reloading:
```bash
npm run dev
```
The application will be available at `http://localhost:5000`

### Production Mode
Start the production server:
```bash
npm start
```

### Static Site Generation
Generate static HTML files for deployment:
```bash
npm run build
```
This creates a `./dist` folder with all static files ready for deployment.

## Project Structure

```
portfolio-website/
├── views/                      # Handlebars templates
│   ├── layouts/
│   │   └── main.handlebars    # Main layout template
│   ├── home.handlebars        # Homepage content
│   ├── about.handlebars       # About page content
│   ├── contact.handlebars     # Contact page content
│   ├── thank-you.handlebars   # Thank you page
│   └── 404.handlebars         # 404 error page
├── routes/
│   └── index.js               # Application routes
├── dist/                      # Generated static files (after build)
├── app.js                     # Main Express application
├── build-static.js            # Static site generator
├── package.json               # Project dependencies
└── README.md                  # Project documentation
```

## Customization

### Updating Personal Information

1. **Contact Details**: Update email, GitHub, and LinkedIn links in:
   * `views/layouts/main.handlebars` (footer section)
   * `views/contact.handlebars` (contact info section)

2. **Project Information**: Modify the projects section in:
   * `views/home.handlebars` (featured projects)

3. **About Content**: Update personal information in:
   * `views/about.handlebars` (journey, skills, interests)

4. **Skills & Progress Bars**: Adjust skill percentages in:
   * `views/home.handlebars` (technical skills section)

### Styling Modifications

The project uses Tailwind CSS with custom CSS variables for consistent theming. Key customization points:

* **Color Scheme**: Modify CSS variables in `views/layouts/main.handlebars`
* **Typography**: Update Google Fonts import and font-family declarations
* **Components**: Custom button, card, and navigation styles in the main layout

### Form Configuration

The contact form uses Formspree for handling submissions:

1. Update the form action URL in `views/contact.handlebars`:
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

2. Update reCAPTCHA site key:
   ```html
   <div class="g-recaptcha" data-sitekey="YOUR_RECAPTCHA_SITE_KEY"></div>
   ```

## Deployment

### Static Site Deployment (Recommended)

1. **Build the static site**:
   ```bash
   npm run build
   ```

2. **Deploy the `dist` folder** to your preferred hosting platform:
   * **Netlify**: Drag and drop the `dist` folder or connect to Git
   * **Vercel**: Upload the `dist` folder or use Vercel CLI
   * **GitHub Pages**: Upload contents to your GitHub Pages repository

### Server Deployment

For dynamic server deployment:

1. **Heroku**:
   ```bash
   git add .
   git commit -m "Deploy to Heroku"
   git push heroku main
   ```

2. **DigitalOcean/AWS**: Use PM2 for process management:
   ```bash
   npm install -g pm2
   pm2 start app.js --name "portfolio"
   ```


## Author

**Jack Male**
* GitHub: [@jack24899](https://github.com/jack24899)
* LinkedIn: [Jack Male](https://www.linkedin.com/in/jack-male-21369a257/)
* Email: jdev8602@gmail.com

