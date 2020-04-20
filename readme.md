Visca Web Frontend Test
======


## Estructure
- I've used BEM and ITCSS for the structure of the TEST. I've not used all the ITCSS layers. But this is the first step in order to have a clear architecture in the CSS part. 
- For polyfills we should install Webpack for auto generate the CSS files and Autoprexifr for compile automatically.
 
## Resources
- I've downloaded the Source Sans Pro font in order to use the preload attribute to improve web performance.
- In order to be fast, I've used Font Awesome as an icon resource for the stars. In other terms, I would create a Webfont from SVGs for not import icons that I don't actually need.  

## Links
- For have multiple links and don't have problems with nested links (nested links are nod valid), my decision was had a main link in absolute position that covers all the card, and the other links above (Read more link) with a hightest z-index. 

## Hover effects
- I've used a 10% for the hover effects when the card are in the same row, but I reduce it on the list grid for a better effect for the user. 

## Other explanations
- I didn't make the menu due this wasn't an exercise part.
- Maybe the transitions effects in the Grid are not so soft as you expected, but I had made the Grid almost completely in CSS which is better for our website performance.
