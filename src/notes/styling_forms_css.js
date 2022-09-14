/* 
 Styling form controls and their state

 How much you style and customize form controls state depend on browser
 
Some form controls behave like HTML boxes and therefore all box model properties applies

Easy to style  
   -> Some text styles are not inherited by default
   -> You have to tell form controls to inherit these text styles
 
Normalize form controls
  - Use alternative box model
  - Set margin and padding to zero
  - Set autoflow to auto for textarea
  
Some form controls require complex CSS or some specific tricks

Some form controls cannot be styled throughly using CSS

Some form controls have complex internal structure

Historically form controls styling done by browsers

Default browser styles for form controls

You do not want styles from browsers

You want to build yours

input {
  -webkit-appearance : none;
  appearance : none
}
Remove some box model styles e.g borders

Search inputs in Opera,edge and chrome on macOs operating systems you cannot 
 -> adjust height or font size
 -> box and texts properties
Hard to customize


I do not want form controls default styles

Have styles that you cannot adjust because the form controls are not scalable(rendering engine) ->font size and height 

Form controls with default aqua appearance(not scalable)

input[type="search"] {
    -webkit-appearance: none;
    appearance: none;
}

Setting border/background disables or break aqua appearance

delete icon when search form control have or lose focus

Dissapear in some browsers
  
 input[type="search"]::-webkit-search-cancel-button


 The sizes(width and height) of some form controls are not meant supposed to changed and browsers react differently when
 you try(Box model properties)

 Disable aqua default appearance

  Make form control inline-block
  Give form control a background color of red background
  Give form control a height and width

  not a recognised selector
  not a recognised property and therefore value
  


  Dropdown boxes
  Complex control types e.g color ,datetime-local
  Feedback-oriented controls like progress and meter

  Different default styles across browsers
  You can style them in some ways,some parts of their internals are literally impossible to style

  Live with differences but make the following are same across browsers
      -> sizing <->  type of box,
      -> background colors
      -> get rid of system level styling
  

      Styling Checkboxes
       -> Put the form control in an inline block box
       -> Give the box a background color
       -> Give form control a height and width
       -> After applying these couple of styles,you will realize they look different 
       in different browsers
       -> Remove the default aqua appearance
       -> Styles for different states of form control ->> when is checked,when is disabled?
      
      
      ->> Good form Control
      ->> Bad form control
      ->> Ugly form Controls

      Different looks in different browsers
      You can still style them in some ways,
      Some parts of their internals are literally impossible to style

      Internal structure
        - You cannot style


      Form controls in different states

      For Meters and Progress form controls,just create your own.
        -> You can only set desired width
        ->  Height settings are not consistent across browsers
        -> You can color background,
        -> You cannot color foreground 
        -> Removing system level styling using appearance : none making things worse

      For file input
       -> The problem with file pickers is that button provided that you press to open the file
         picker is completely unstylable
      -> It cannnot be sized or colored
      -> Won't accept a different font

      Clicking a label associated with a form control,will activate form control.


      Hide the file form control
      Style its label to act like a button,which when presses will open the file picker

      For color picker,for more control over styling it is better to have a custom color picker

      For range picker it is very annoying to style
           -> You can styles track completely
           -> Hard to customize the style of the Thumb -> Complex CSS code ,non-standard CSS,browser specific pseudo elements
      
     For Date picker and input of type number,
       ->> Easy to style containing box
       ->> You cannot style internal parts and you cannot get rid of default system level styling
    
    For full control 
      -> library
      -> Build your own

  For input of type number,just use an input of different type

  For selects and datalists

  Autocomplete list
  options

  use a library
  build your own

  -> Easy to style if you don't want to vary the look and feel too much from defaults
  -> the arrow icon that indicates a dropdwon differs across browsers
  -> change if you increase size of the containing box
  -> You can get rid of icon altogether
  -> create your own icon
  -> no styling control over boxes that contains options
  -> options boxes do not inherit font set on the family
  -> You cannot set color or spacing
  -> look different in different browsers

  Build own
  Use a library


  Range picker
   - Track
   - Thumb

  Select and datalists
    - options
  
  Date picker
      -> a box to pick date
      -> a box to pick time

  Color Picker
   -> Colors


  


*/
