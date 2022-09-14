/* 
 
  Boxes
  Texts
  Layout

 Boxes have texts.Texts in the boxes can be styled.Boxes also can be styled ,manipulated and arranged
 in relation to the viewpoint or to one another.

 

Different layout methods we can use to position  a box in a webpage relative to 
   -> Its default position in the normal flow.
   -> Other boxes around it
   -> Their parent box
   -> Viewpoint/window

  
   1.Normal flow

   How Boxes are displayed in a webpage by default

   This usually depend on type of the box.
   
   Some boxes will always appear below another box(Block box)

   Take 100% of the width of the parent box.
   Height is the content inside it.
   Height/Width = content + padding + margin(can use standard or alternative CSS box model)
   Block boxes are separated by margins


   Some boxes will always appear beside another(inline Box)

   Site along same line with each other

   ......................

   ......................

   Wrap onto a new line if there no or enough space

   For many of the boxes in a webpage,the normal flow will create exactly the layout we need.

   For complex layouts,you will need to alter this default display behaviour.
   

    FlexBox

    display flexible boxes either in rows or columns inside a parent.

    These flexible boxes expand to fill additional space or shrink to fit into smaller space.

    Easy to center boxes inside a parent box.

    Easy to make all flexible boxes take equal amount of available width/height regardless

    Easy to have flexible boxes with equal height even if they have different amount of content

    How
    -> Which boxes are to be displayed as flexible boxes? ( laid as flexible items(boxes))
    -> These boxes must have a commn parent box(flexible container) -> laid as block box
    -> flexible items are laid along two axes(main and cross axis )
    -> By default flexible items are laid from left to right

    Direction of main axis
    
    Direction of the cross axis

    Flexible boxes will overflow their container(fixed width or height) - wrapping

    What proportion of space along the main axis a flexible box take up compared to 
    other flexible boxes?

    What is minimum size for each flexible boxes?

    How to align the flexible boxes along the axes?

    How much a flexible box will shrink  in order to  prevent overflow?boes

    Changing the layout order of flexible boxes with changing source order?


   start,end,center,space-around and space-between



  Size and spacing 
   
   

  Images that resize

  Media query

  Fluid grids

  Excel in centering children and setting equal heights

  What is the flex container ?
  Who are flexible items?

  Flexible Boxes
   Default sizes
     width - content
     height - 100%

     Centering boxes
     Create boxes with equal heights
     Reorder boxes
   


     The flex items can be laid out in any direction
     Display order reversed or rearranged
     Can be laid out linearly along a single (main) axis or wrapped
     into multiple lines along a secondary (cross) axix
     Can shrink or grow to respond to the available space
     Can be aligned with respect to each other on the cross axis
     (leftwards,rightwards,downwards,upwards)
     They can flex their sizes
     Can grow to fill unused space
     Shrink to avoid overflowing
     Align them both vertically and horizontally
     Can be nested
   










*/
