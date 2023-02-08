# A static page with (Finnish) text sections and gallery with animal pictures displayed

## Introduction
<p>
  This project is the first HTML, CSS and JavaScript project I've seriously invested my time into. It is also the first project I've made using these technologies after   not using them for an extended period of time. 
</p>
<p>
  I've put it up as a static page using Github Pages. It can be visited via the following link:

  https://jokemon-coder.github.io/meidanElaimet-ourAnimals/
</p>

## Functionality and features

### Initial planning
<p>
  My initial plans for this page was to create a fake website page for an animal caring centre or an equivelant of that. The page was to contain a header navigation bar,   basic information about the company, a simple image gallery containing different images of animals and a footer. 
  The page does contain:

  - A header inside of which is a title/logo and a navigation bar with different elements to navigate inside the page with.
  - A section in which is basic information about the "company".
  - A gallery containing, on the surface, 9 images. 
  - A contact information section under the gallery
  - A footer. 
  
</p>
<p>
  I believe I succeeded in implementing these in a way that I had initially planned. The final product does not stray far away from the initial plans that were made
  before beginning actual development. The text contained within the page is all made up and the images are unrelated. 
</p>

### Functionality
<p>
  The page contains a few parts in which JavaScript is used to give different functions to different elements and their elements. These would include:
  
  - The navigation bar
  - The image gallery
</p>
<p>
  In the case of the navigation bar, the elements inside it were given a mouseover and mouseout function to alter it's coloration when a user has their mouse over them.
</p>
<p>
   The image gallery on the other hand is much more complex. All of the images are altered in one way or another by the script behind the scenes. The initial 9 images that are inside the gallery are just what you see. All of images have a hover effect that alters their borders. Clicking on any of the images reveals 2 other images of the same animal using the same class. The 2 images on the row that do not belong to the selected class are removed from the row and moved into an invisible "storage" row. Pressing any image and revealing the other 2 images also reveals a button, which is used to close to this configuration and to bring it back to how it was. Once pressed, the button returns changes back to normal and makes itself have a display of "none". The button also has a hover effect with colors using JS. 
</p>
