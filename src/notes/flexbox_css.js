/* 
   ->> Arrange flexible boxes in rows or columns
   ->> The flexible boxes can expand to fill additional space
      or shrink to fit into smaller spaces


  Use cases
  -> Vetically centering a child inside its parent container
  -> Equal heights


  Which box is a flexible container?
  Which boxes are going to be laid out as flexible boxes?

  When items are laid oyt as flexible boxes,they are laid out along two axes.
  -> main axis
  -> cross axis
  
 The main axis is the direction the flexible boxes are laid out
   -> laid as rows across the page
   -> laid as columns down the page

The cross axis is running perpendicular to the direction the flexible boxes are laid out.

 Both axes have start and end

 Which direction the main axis runs?
 Which direction the flexible boxes are laid out in?

 row -> from left to right
 column -> from top to bottom

 Flexible children overflowing their flexible container(Fixed sizing) -> wrapping is the solution

 Wrapping bring multiple rows









  ->> Boxes can be laid out from the left of the page
     to the right of the page and vice versa
  ->> Boxes cab be laid out from the top of the page 
     to the bottom of the page and vice versa
  ->> Gives ability to distribute space among boxes and also
      align them
  ->> If boxes are laid out from the the left of the page to the right,
    then the main axis will run from the left of the page to the right of the page 
    and cross axis perpendicular to the main axis

    inline direction
    block direction

    Space distribution
    Alignment

    Start and end lines of both axes.

    What parts of the website can be laid out using flexbox

    Defaults
    Boxes display in a row
    Boxes alignment start from the start line of main axis
    Boxes do not stretch on the main axis,but can shrink
    Boxes will stretch to fill the size of the cross axis
    Boxes uses size of the content as their size in the main axis
    If there are more boxes than can fit in the container,they will not wrap but 
    will instead overflow
    If some boxes are taller ,all boxes will stretch along the the cross axis to fill its size.
  
    Which direction will our boxes display
    Boxes can only be laid in a column or row.
    Boxes can wrap onto multiples lines
    Space distribution will happen in these lines without reference to the lines either side.
    Gives us control over individual boxes by changing how available space is distributed among boxes
  
    Example

    Container width - 500px
    3 boxes with 100 pixels width
    Available space - 200 pixels

    By default the available space is put after the last box.

    What if we want the boxes to grow and fill the available space
    We need a way to distribute the available space between boxes

    Does boxes have sizes,
    We give boxes size or content give boxes size?

    Give each box an equal or unequal piece of available space

    Control how is taken if we do not have enough space

    Boxes can shrink or grow their size depending availability of the space

    How much can i grow or shrink?

    minimum size

    shrinking rather overflowing
    grow to take available space


    Aligning and justify boxes along the the main and cross axes?
    Distribute space between flex boxes?

    How to align boxes on the cross axis?
     -> By default boxes are stretched to the height of the flex container
        end,start,center,stretched

    How to align boxes on the main axis?

    Align a box on the cross axis

    Create gaps or gutters between boxes

    just alignment

    Both alignment and space distribution

    Controlling order of the boxes
    Changing the visual order of the boxes
    Change where they appear in the visual order


    properties                                   value
    flex-direction                                row
    flex-wrap                                     nowrap
    justify-content                               flex-start
    align-items                                    stretched
    align-content                                  space-between
    flex-grow                                       1
    flex-shrink                                     1
    flex-basis                                      auto
    order                                           0


    Natural size of flex boxes before an by growing or shrinking takes place

    How much space is available to lay out flexible boxes 
    How big are flexible boxes?
    What about flexible boxes without any width or height?

    
 
    as small as it can be without overflowing(min-content),taking any soft wrapping opportunities
    as big as it be possibly without taking any soft wrapping opportunities(it can overflow)


   positive and negative free Space

   A flexible container has positive space it has more space than it is required to display the
   flexible boxes

   distribute this space

   A flexible has negative free space when natural size of the flexible boxes add up to larger
   than the available space in the container

   remove this space
   
   flex-basis : width of the flexible box or max-content keyword(size of the content)


   The grow factor of a flexible box relative to the rest of the other flexible boxes in the
   flexible container when the positive free spaxe is distributed

   If all the flexible boxes have same grow factor,then space will be distributed evenly between 
   all

  The shrink factor of a flexible box relative to the rest of the other flexible boxes in the
   flexible container when distributing negative free space

   Take away space from other flexible boxes to avoid overflowing

   Gaps between rows or columns


   no growing
   no shrinking

   shrinking to zero


   flexbox grid system

   Rearange columns
   Number of columns



   Different size of flexible boxes in different devices.


   Create a 4-column grid system using flexbox

   negative and positive space
  
   



*/
