/* 
  Standard box model 
  Alternative box model


  Every element is a box.

  Layouts
  Alignment

  Types of Boxes
  -> Block boxes
  -> Inline boxes
  
  

 Boxes also have inner and outer display type.

 Outer Display : block

 ->> Box will break onto a new line
 ->> Box will extend in the inline direction to fill the space available in its container.In most cases this
   means that the box will become as wide as its container,filling up 100% of the space available.
->> Width and height properties are respected.
->> Padding,margin and border will cause other boxes to be pushed away from the box.
 
Outer display : Inline
->> Box will not break onto a new line
->> Vertical paddings,margins and borders will apply but will not cause other inline boxes to move away from 
   the box.
->> Horizontal paddings,margins and borders will apply and will cause other inline boxes to move away from the box
 ->> height and width properties are not respected

outer display type says whether a box is of type block or inline

inner display type dictates how boxes inside a box are laid out.

By default,boxes inside a box are laid out in normal flow,which means they behave just like block boxes if block and inline box if
are inline boxes.

You can change inner display type to flex or grid

By default boxes are laid out as block or inline boxes (normal flow)

Parts of a box

->> content box is where content is displayed(sized using height and width)
->> padding box sit around content box as white space(sized using padding properties)
->> border box wraps the content and any padding(sized using border properties)
->> margin box outermost layer and wraps the content,padding and border as whitespace between this box and the content
   and other boxes.

 Boxes have content or other boxes as content

 Content can have height and width

 Whitespace around content is called padding

 Border wraps content and padding of a box

 Whitespace between boxes is called margin

 Actual space taken by boxes in the webpage should include padding,border and margin

 Browser Development Tools

 margin invisible space around your box.It pushes other boxes away from the box.

Set box visible space first,then invisible box space

Margin collapsing max(boxOneMargin,boxTwomargin)

inline-block and inline boxes

-> The width and height properteries have effect
-> Padding,margin and border will cause other boxes to be pushed away.
-> Does not break onto a new line


  T

*/
