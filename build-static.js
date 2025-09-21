const fs = require('fs');
const path = require('path');
const handlebars = require('handlebars');

// Create output directory
const outputDir = './dist';
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

// Read template files
const readTemplate = (templatePath) => {
  return fs.readFileSync(templatePath, 'utf8');
};

// Read the main layout
const mainLayout = readTemplate('./views/layouts/main.handlebars');

// Read page templates
const homeTemplate = readTemplate('./views/home.handlebars');
const aboutTemplate = readTemplate('./views/about.handlebars');
const contactTemplate = readTemplate('./views/contact.handlebars');
const notFoundTemplate = readTemplate('./views/404.handlebars');
const thankYouTemplate = readTemplate('./views/thank-you.handlebars');

// Compile the main layout
const layoutCompiled = handlebars.compile(mainLayout);

// Function to render a page
const renderPage = (bodyContent, pageData) => {
  return layoutCompiled({
    ...pageData,
    body: bodyContent
  });
};

// Compile and render each page
const pages = [
  {
    template: homeTemplate,
    data: {
      title: 'Jack Male - Software Engineer',
      name: 'Jack Male'
    },
    filename: 'index.html'
  },
  {
    template: aboutTemplate,
    data: {
      title: 'About Jack Male - Software Engineer'
    },
    filename: 'about.html'
  },
  {
    template: contactTemplate,
    data: {
      title: 'Contact Jack Male - Software Engineer'
    },
    filename: 'contact.html'
  },
  {
    template: notFoundTemplate,
    data: {
      title: '404 - Page Not Found'
    },
    filename: '404.html'
  },
  {
    template: thankYouTemplate,
    data: {
      title: 'Thank You - Message Received'
    },
    filename: 'thank-you.html'
  }
];

// Generate HTML files
pages.forEach(page => {
  const bodyCompiled = handlebars.compile(page.template);
  const bodyHtml = bodyCompiled(page.data);
  const fullHtml = renderPage(bodyHtml, page.data);
  
  const outputPath = path.join(outputDir, page.filename);
  fs.writeFileSync(outputPath, fullHtml);
  console.log(`Generated: ${page.filename}`);
});

// Create _redirects file for Netlify (for client-side routing)
const redirectsContent = `
# Handle 404s
/*    /404.html   404

# Handle thank-you page
/thank-you    /thank-you.html   200
`;

fs.writeFileSync(path.join(outputDir, '_redirects'), redirectsContent.trim());
console.log('Generated: _redirects');

console.log('\nStatic site generated successfully in ./dist directory!');