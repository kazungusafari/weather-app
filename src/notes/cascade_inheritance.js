/* 
  
   The applied CSS rule is not working
   The CSS you thought should be applied to an element is not working.
   Which rule is styling your element may not be the one you expect.
   Some CSS properties by default inherit values set on on the current element's parent,and
   some do not.

  Stylesheets cascade

  Order of CSS rules matters
   -> If two rules that have equal specificity,the one that comes last in the CSS is the one that 
      will be used.
      
      h1{
          color : red
      }
      h1{
          color : blue
      }
      
   Same selectors(h1),the color should be blue

   Rules with equal specificity(identical selector)

   Which rule applies if multiple rules have different selectors,but could still apply to
   the same element.

   A measure of how specific a selector's selection will be

   less specific -> it will select all elements of that type that appear on a page,
   so will get a lower score.
   More specific -> it will select only the elements on a page that have specific 
   class attribute value,so will get a higher score

   .main-heading {
       color : red
   }
   h1{
       color :blue
   }
   <h1 class="main-heading">This is my heading</h1>

   color is red ,class selector gives its rule a higher specificity


   Some CSS property valuess set on parent elements are inherited by their child elements,and some
   are not.

   color and font-family  values

   widths,heights,margins,padding,borders values are not inherited

   specificity score = source order weight  + selector weight
 
   Controlling Inheritance

   Give me that value of the parent(inherit)
   Give me my initial value  of that property(default property value)
   Give me natural value(inherited if there or default property)
   Give me browser default value

 
   Initial value -> Initial property value for that element
   Inherited value -> Inherit a property value from parent
   Revert value -> browser default value for that property
   Unset value -> inherited property value or initial property value
  

   How is property initial value different from browser value?

   Given by CSS author
   Given by browser
   Inherited from parent
   Initial value
   Inherited or initial value


   How cascade defines which css CSS rules should apply when more than one thing could style an element 

   -> Source order 
   -> Specificity 
   -> Importance


   Source orders matters to the cascade,
   if you have more than one rule,which has exactly same specificity weight,then the
   one that comes last in the CSS will win.

   Other situation
   -> A rule comes later in the stylesheet,however but an earlier,conflicting,is applied.
     This is because the earlier has a higher specificity-it is more specific

     class selector has a higher specificity than element selector

     why is this behaviour important? avoid repetion

     Styles inside style attribute 
     Styles using id selector
     Styles using class,attribute or pseudo-class selectors
     Styles using element or pseudo-element selectors

     Universal selector(*) and combinators(+,>~'') and pseudo-class(:not) have no effect on specificity

     Selector                                 Thousands    Hundreds   Tens    One    Total Specificity
     h1                                         0           0         0       1         0001
     h1 + p::first-letter                       0           0         0       3         0003
     li > a[href*="en-US"] > .inline-warning    0           0         2       2         0022
     #main                                      0           1         0       0         0100
     No selector(rules inside style attribute)  1           0         0       0         1000




   Cascade rules
   Override cascade rules 
   Effect of css location


*/
