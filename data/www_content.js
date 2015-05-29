module.exports = {

  // general site info
  description: "site description",
  author: "Inflexion Interactive",
  title: "TekMark Brand Guidlines",

  // nav items
 navigation: {
   links: [
     {
       text: "logo",
       href: "#logo"
     },
     {
       text: "color swatches",
       href: "#color"
     },
     {
       text: "fonts",
       href: "#type"
     },
     {
       text: "images",
       href: "#images"
     },
     {
       text: "website",
       href: "http://tekmark.com"
     }
   ]
 },

  // hero
  hero: {
    logo: "/images/hero-logo.png",
    background: "/images/hero-bg.jpg",
    alt_text: "Tekmark logo",
    byline: "your brand",
    purpose: "guidelines"
  },

  // company overview
  company: {
    title: "company<br>overview",
    copy: "<p>Tekmark Global Solutions offers the solutions, people, practices, and products to solve the most complex IT and telecom challenges. Tekmark’s highly automated and efficient internal processes allow them to compete head-to-head with much larger competitors, while still retaining the personal relationships and high-touch service that has gotten the company where they are today.</p>"
  },

  // logo section
  logo: {
    title: "the<br>logo",
    copy: "<p>The Tekmark logo has been developed to work across multiple mediums. Do not use any variations of this logo other than those seen in this style guide. Never alter or edit the Tekmark logo in any way.</p><p>The logo must be placed on a contrasting background in order to preserve the integrity of the logo. The Tekmark logos are not to be used in any other format than those supplied and seen here. Do not use any other variations. Never editor alter the logo in any way.</p><p>Design elements are never to violate the logo.</p>",
    standard_mark: "/images/logo-base.png",
    variable_mark: "/images/logo-variable.png"
  },

  // measures & guides
 measure: {
   title: "measures<br>&amp; guides",
   copy: "<p>Follow the below measurements and guidelines in order to obtain the correct scaling, proportion and visibility.</p>",
   examples: [
     { source: "/images/measures1.png", alt: "Alt text" },
     { source: "/images/measures2.png", alt: "Alt text for 2" }
   ]
 },

  // what not to do
  not_do: {
    title: "what not<br>to do",
    copy: "<p>The Tekmark logo should always retain its integrity. No other appearance should be shown other than what is portrayed in these brand guidelines. Do not stretch, change logo colors, add drop shadows or display the logo on the a background other than those shown above.</p>",
    mark: "/images/not-do.png",
    bg: "/images/not-do-bg.png"
  },

  // downloads
  downloads: {
    title: "logo<br>download",
    copy: "<p>Download the following logos according to their use. Send all EPS files to your printer or designer. PNG is for web and PDFs and JPEGs are for viewing only.</p>",
    mark: "http://placehold.it/960x150"
  },

  // color usage
  color: {
    title: "color<br>usage",
    copy: "<p>Utilizing the correct color palette is crucial in retaining the integrity of the brand. The following colors and only these colors should be carried throughout all collateral and documents. Never alter the brand colors; including shades and tints.</p>",
    img: {
      source: "/images/color-usage.png",
      alt: "img description"
    }
  },

  // typeface usage
  typeface: {
    title: "typeface<br>usage",
    copy: "<p>Headers should always be in Open Sans Extrabold and Open Sans Bold. Body copy should only be set in Open Sans Semibold or Open Sans Light.</p><p>No headers or body type should be set less than 7pt with a leading of 10pts. Tracking should be set at 10 and will increase as type increases. Leading should always be under the same discretion. The exception to type size is the <em>fine type</em> as is to be set to no less than 5pt.<p>",
    mark1: "/images/type-usage-1.png",
    mark2: "/images/type-usage-2.png"
  },

  // share
  share: {
    title: "share this document",
    links: [
      {
        href: "http://google.com",
        imgsrc: "http://placehold.it/50x50",
        text: "print"
      },
      {
        href: "http://google.com",
        imgsrc: "http://placehold.it/50x50",
        text: "share"
      }
    ]
  },

  // footer
  footer: {
    line1: "80 River Street, Penthouse, Hoboken, NJ 07030",
    line2: "&copy; 2015 Inflexion Interactive, LLC. All rights reserved. Read our Privacy Policy."
  }
}
