/* 
   
 How you style regular boxes is not how you style images,other media and form elements

 What is possible?
 What is not possible?

 Replaced Boxes
  CSS cannot affect the internal appearance of these boxes e.g images and videos
  Some such as images and videos have aspect ratio(They havea size in both the horizontal and
  vertical dimension ) and displayed using intrinsic dimensions of the file by default.

  x and y sizes
  intrinsic size

  Sizing images
  - Put images  in a box that is smaller than the intrinsic dimensions of the image file in either direction
  - Put images  in a box that is larger than the intrinsic dimensions of the image file in either direction
  -> Appear smaller and does not stretch to fill it.
  -> Overflow


  How to deal with overflow issues

  Give images,videos and iframes a max-width of 100%
  Max-width of 100% makes these replaced boxes smaller in size than the box but not larger(fit into the box)

  How to size images inside boxes ?

  Size so that it can completely covers a box.

  Size a replaced to fit a box in a variety of ways(object-fit)

  cover - size the image down,maintaining the aspect ratio so that it neatly fills the box
        - some parts will be cropped
  contain - size the image down until it is small enough to fit inside the box

  fill - fill the box but not maintain the aspect ratio.


  How they behave as flex items or grid items?

  Images do not stretch and instead will be aligned to the start of the grid area or flex container

  To stretch 
   replaced boxes {
       width:100%;
       height:100%;
   }


   Form elements

  Many form controls added using input element
   -> text inputs
   -> HTML5 color and date picker
   -> multiline text input using textarea
   -> contain form using fieldset
   -> label part of a form using label
   -> Which is required?
   -> type of data
   -> show error 
      

   How they are styled by default?
   How they show error ?

   <input type="text"/>
   <input type="email"/>
   <textarea/>

   Easy to style because they behave like boxes

    - padding,borders and margins apply 
    - background colors
    - fonts
    - attribute selectors

   Default styling in different browsers

   In some browsers,form element do not inherit font styling by default

   use alternative css box model 

   set padding and margin to zero.

   overflow :auto -> prevent IE from showing scrollbar
  > Form resets
   button,
input,
select,
textarea {
  font-family: inherit;
  font-size: 100%;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

textarea {
  overflow: auto;
}
  
normalizing Stylesheets
 -> Anything different across browsers is set tp a consistent default
  before you your own work on CSS

  normalize.css
  
 










*/
