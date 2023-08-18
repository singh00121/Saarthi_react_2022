// // sitemapGenerator.js

// import { createSitemap } from 'react-router-sitemap';
// import { Route } from 'react-router-dom';

// const Sitemap = () => {
//   const hostname = 'https://clever-kitten-1d43df.netlify.app'; // Replace with your actual domain

//   const routes = [
//     '/',
//     '/Products',
//     '/LevelukK8',
//     '/P2LevelukSD501p',
//     '/P3LevelukSD501',
//     '/P4LevelukSuper501',
//     '/P5LevelukJRIV',
//     '/P6LevelukSD501U',
//     '/P7AnespaDX',
//     '/download',
//     '/healthbenefit',
//     '/contect',
//     '/OurTeam',
//     '/testimonial',
//     '/*',
//     // Add more routes as needed
//   ];

//   const generateSitemap = () => {
//     const sitemap = createSitemap({
//       hostname,
//       routes: routes.map(route => ({
//         route,
//       })),
//       // Add any additional options or configurations here
//     });

//     return sitemap.toString();
//   };

//   return generateSitemap();
// };

// export default Sitemap;


// generateSitemap.js
const fs =  require('fs');
const { createSitemap } =require( 'react-router-sitemap');

const ReactDOMServer = require("react-dom/server");
const { StaticRouter } =require ("react-router");
import APP from './src/App'

const staticRoutes = [
  '/',
    '/Products',
    '/LevelukK8',
    '/P2LevelukSD501p',
    '/P3LevelukSD501',
    '/P4LevelukSuper501',
    '/P5LevelukJRIV',
    '/P6LevelukSD501U',
    '/P7AnespaDX',
    '/download',
    '/healthbenefit',
    '/contect',
    '/OurTeam',
    '/testimonial',
    '/*',
];

const hostname = 'https://clever-kitten-1d43df.netlify.app'; // Replace with your actual domain

// Function to generate the sitemap
const generateSitemap = () => {
  const sitemap = createSitemap({
    hostname,
    routes: staticRoutes,
    // Add any additional options or configurations here
  });

  fs.writeFileSync('./public/sitemap.xml', sitemap.toString(), 'utf-8');
};

// Render the App component and generate the sitemap
ReactDOMServer.renderToString(
  React.createElement(StaticRouter, null, React.createElement(App)),
  (err, html) => {
    if (err) throw err;
    generateSitemap();
  }
);


// --------------------

// const { SitemapStream, streamToPromise } = require('sitemap');
// const { createReadStream, createWriteStream } = require('fs');
// const { pipeline } = require('stream');

// const generateSitemap = async () => {
//   const links = [
//     { url: '/', changefreq: 'weekly', priority: 1.0 },
//     { url: '/Products', changefreq: 'monthly', priority: 0.8 },
//     { url: '/LevelukK8', changefreq: 'monthly', priority: 0.8 },
//     { url: '/P2LevelukSD501p', changefreq: 'monthly', priority: 0.8 },
//     { url: '/download', changefreq: 'monthly', priority: 0.8 },
//     // Add more dynamic links as needed
//   ];

//   const stream = new SitemapStream({ hostname: 'https://clever-kitten-1d43df.netlify.app' });
  
//   for (const link of links) {
//     stream.write(link);
//   }

//   stream.end();

//   const xmlStream = streamToPromise(stream).then((smStream) => smStream.toString());

//   const writeStream = createWriteStream('./public/sitemap.xml');
//   await pipeline(xmlStream, writeStream);

//   console.log('Sitemap generated successfully!');
// };

// generateSitemap().catch((error) => {
//   console.error('Error generating sitemap:', error);
// });

