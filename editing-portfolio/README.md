# Editing Portfolio

A professional portfolio website for showcasing editing expertise and services.

## Features

- **Home Page**: Hero section with introduction and key statistics
- **Portfolio**: Showcase of completed editing projects
- **Services**: Detailed service offerings with pricing and process
- **Blog**: Articles and tips about editing and writing
- **Contact**: Contact form and multiple ways to get in touch
- **Responsive Design**: Works beautifully on desktop, tablet, and mobile

## Tech Stack

- **React 18**: Modern UI library
- **React Router**: Client-side navigation
- **CSS3**: Custom styling with responsive design
- **GitHub Pages**: Free hosting

## Installation & Setup

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Local Development

1. Clone the repository:
```bash
git clone https://github.com/YOUR_USERNAME/editing-portfolio.git
cd editing-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The site will open at [http://localhost:3000](http://localhost:3000)

## Customization

### Update Your Information

Edit these files to personalize the portfolio:

- `src/App.js` - Update your name in the navigation and footer
- `src/pages/Home.js` - Update your bio and statistics
- `src/pages/Portfolio.js` - Add your actual projects
- `src/pages/Services.js` - Update services and pricing
- `src/pages/Blog.js` - Add your blog posts
- `src/pages/Contact.js` - Update contact email and social links
- `public/index.html` - Update page title and meta description

### Colors & Branding

The main colors are defined in the CSS files:
- Primary: `#667eea` (purple-blue)
- Secondary: `#764ba2` (dark purple)
- Neutral: `#2c3e50` (dark blue)

Modify these in `src/App.css` and individual page CSS files.

## Deployment to GitHub Pages

### Step 1: Create a GitHub Repository

1. Go to [GitHub.com](https://github.com)
2. Click "New" to create a new repository
3. Name it: `editing-portfolio`
4. Make it public
5. Click "Create repository"

### Step 2: Update the Homepage URL

Edit `package.json` and update the `homepage` field:

```json
"homepage": "https://YOUR_USERNAME.github.io/editing-portfolio"
```

Replace `YOUR_USERNAME` with your actual GitHub username.

### Step 3: Install gh-pages

This is already in `package.json`, but ensure it's installed:

```bash
npm install gh-pages --save-dev
```

### Step 4: Deploy

Push to GitHub and deploy:

```bash
git remote add origin https://github.com/YOUR_USERNAME/editing-portfolio.git
git branch -M main
git push -u origin main
npm run deploy
```

### Step 5: Configure GitHub Pages (if needed)

1. Go to your repository on GitHub
2. Click Settings → Pages
3. Under "Source", select "Deploy from a branch"
4. Select `gh-pages` branch
5. Click Save

Your site will be live at: `https://YOUR_USERNAME.github.io/editing-portfolio`

## Scripts

- `npm start` - Run development server
- `npm build` - Build for production
- `npm test` - Run tests
- `npm deploy` - Deploy to GitHub Pages

## Project Structure

```
editing-portfolio/
├── public/
│   └── index.html
├── src/
│   ├── pages/
│   │   ├── Home.js & Home.css
│   │   ├── Portfolio.js & Portfolio.css
│   │   ├── Services.js & Services.css
│   │   ├── Blog.js & Blog.css
│   │   └── Contact.js & Contact.css
│   ├── App.js
│   ├── App.css
│   └── index.js
├── package.json
└── README.md
```

## Tips for Content

- **Portfolio Projects**: Replace the emoji examples with real project descriptions
- **Services**: Adjust pricing and service descriptions to match your offerings
- **Blog**: The blog links are placeholders; you can integrate a CMS or expand with full articles
- **Images**: Consider adding project images or your headshot (add to `public/` folder)
- **Contact Form**: The current form logs to console; connect it to a service like EmailJS or Formspree for real submissions

## Future Enhancements

- Add project image galleries
- Integrate real contact form submission
- Add testimonials/client quotes section
- Blog with full articles
- Case studies section
- Download resume/CV
- Dark mode toggle

## License

This project is open source and available under the MIT License.

## Support

For questions or issues, feel free to reach out or create an issue on GitHub.
