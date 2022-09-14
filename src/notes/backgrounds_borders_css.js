/* 
  Adding Gradient or background images
  Adding rounded corners

  Add background color
  add background image 

  Background image is larger or smaller than the box

  
  
  Smaller image are tiled to fill the box.
  You can control the tiling behaviour of images using background-repeat property
   no repeat
   repeat -default behaviour
   repeat vertically only
   repeat horizontally only

   By default ,larger image is not scaled down to fit the box,so we only see small corner of it
  This is because the image is cropped to fit into the box.
  However,we can background-size property to size the image to fit inside the box
   -length unit
   - percentages
   -identifiers
     cover  large enough image to completely cover the box while retaining its aspect ratio
     contain right size to fit inside the box.Gaps might appear(top,bottom,right,left)

    You can position backround image inside a box.

    gradient as background image -> cssgradient.io -> CSS Gradient Generators

    background: linear-gradient(90deg, #1CB5E0 0%, #000851 100%);

    How background image scroll when content scroll ?
     scroll -> element's background to scroll when page is scrolled
            -> element's background do not scroll when element's content is scrolled.
    
    fixed -> element's background is fixed to the viewport so that it does not scroll when page or element content is scrolled

    local -> fixes the background to the element it is set on,so when you scroll,the background scrolls with it.



 
*/
