/* 
    How is text laid out by default in a box?
    How is text aligned by default in a box?
    What is the default color for texts?
    What is the default font styles for the texts?
       ->>Font family
       ->>Font size
       ->>Font weight
   How are text decorated by default?
   How to style a part of a text?
   What is the default line height between lines of text ?
   What is default spacing between words and letters?
   
   

    Text is laid inside element's content box

    Styling the whole text or a part of the text?

    What is the color I want use for different texts

    Questions on Fonts

    - Use one or a mixture of generic fonts(cursive ,fantasy,monospace,sans-serif,serif)
    - Use web safe fonts or custom fonts stack or both
    - What should be font sizes for different texts
    - What units should we use for setting font sizes for different texts
    - What should we use to set font weight for different texts? Number or keywords

    Questions on alignment

    - How to align text with content box?

    Opinions on setting lines

    TEXT AND FONT STYLING
    -> Font weight
    -> Font family
    -> Font styles
    -> Text alignments and  other effects
    -> Line and letter spacing

  
  
    start of the text ------------------------- end of the text
                      -------------------------
                      -------------------------
                      ------------<br>
                      -------------
    start of the text ------------------------- end of the text

   Text content is a series of inline elements being 
   laid out on lines adjacent to one another,and not
   creating line breaks until the end of the line is reached,
   or unless you force a line break manually using the <br> element.

  Styling TEXTS generally fall into categories
   -> Font Styles
   -> Text Layouts

    Questions regarding styling this weather app texts 

     -> What font should be applied?
     -> What units should be  font size for different texts?
     -> Should be text be bold or italic?
     -> How is text align in the content box?
     -> What should be spacing between lines and letters?
     -> What are elements having text as children?
     -> How style a part of a text

     How to style a part of a text?
      -> Wrap that part of a text with an appropriate element
      -> Use text-specific pseudo-element

      ::first-letter to style the first letter of an element's text
      ::first-line to style the first line of an element's text
      ::selection style the currenly cursor highlighted text 


      Styling fonts

      -> What should be the color for different texts.The defaults color is black.
      -> What is the font for different texts.Only fonts available in a machine will applied to the text color.
         Otherwise,browser default font will be applied

         Fonts Availability

         -> Fonts that are generally available in all operating systems(Web safe fonts)
        https://www.cssfontstack.com/

        Some example of web safe fonts 

         Name                Generic Type            Alternative
         Arial               sans-serif              Helvetica
         Courier New         monospace               Courier
         Georgia             sans-serif              -
         Times New Roman     serif                  Times 
         Trebuchet MS        sans-serif             -
         Verdana             sans-serif             - 

       How to download a custom font along with your website
        
      Five Generic names for fonts 
      -> serif - characters with serif
      -> sans-serif - characters without serif
      -> monospace - CharacterS have same width
      -> Cursive - Characters have strokes
      -> Fantasy - decorative characters

       Font stacks - multiple font names separated with commas.(font availability)
       
       Usually have suitable generic font name at the end of the font stacks
       
       font names with more than one word,need to be surrounded by quotes



       Font size

       -> can take  values as pixels,ems and rems

       absolute values
       relative values
        - relative to parent element 1em === font size of parent element
            . Use it size everything(entire website making it maintanable)
            . Tricky if a lot of nested elements
        - relative to the root element 1rem === font size of root element
            . font size math is easier
            . IE version 8 not supported
      
            Inheritance
             .font size of an element is inherited from element's parent element
             
             Default font size
             html {
               font-size : 16px
             }
             p {
               font-size : 16px
             }
             h1{
               font-size : 2em;
             }

             rems or ems for font-size?
             avoid setting font-size for container elements

      Sizing texts in your website
      Altering  visual weight/emphasis of a text 
      
      font style italic text or not(normal,italic,oblique)
      font weight how bold the text is (numeric boldness or keywords(bold,light,normal,extrabold))
      Transform all texts to capitals,lowercase or capitalize first letter

      Text Decorations
      -> underlines
      -> overlines
      -> line-through 
      -> text shadows(horizontal offset,vertical Offset,blur,color)
      
      Text Alignment

      left justifies text
      Right justify text
      Center text
      Justify text all lines of text have same widths.

      line height the height of each line of text.(Body of text)
      1.5 to 2 
      Space between boxes(margin)
      Space between
       lines
       words
       letters
                                      Different shades of colors
       Font                          colors 50 100 200 300 400 500 600 700 800 900
                                          
       thin        100                
       extralight  200
       light       300
       normal      400
       medium      500
       semibold    600
       bold        700
       extrabold   800
       black       800

   How style links and their states
   How are links used -> tabs,menus,buttons

   pseudo class or pseudo elements

   state  unvisited link  :link
          Visited link :visited 
          Link with hover :hover
          link with focus :focus
          active link(clicked link) :active

 Default styles for links
  - texts have underlines(Get rid of text decorations underlines-- different in browsers)
  - unvisited links are blue(colors)
  - visited links are purple(colors)
  - hovering a link make mouse pointer change to a little hand icon
  - focussed links have a text outline around them(Get rid of outline and give a background color)
  - active links are red(color )

  What is color for the link and it different states?
  Show we get rid of underlines of links and
  What mouse pointer style when you hover or focus on a link?
  
  Styling link as buttons
  Including icons on links

  Headings
  Paragraphs
  Links
  Lists

  Fonts
  Texts

  How to style lists
  -> unordered lists
  -> ordered lists
  -> description lists
 
  
  -> <ol> and <ul> have a top and bottom margin of 16px(1em) padding-left of 40px(2.5em)
  -> <li> list have no set defaults for spacing
  -> <dl> has top and bottom margins of 16px(1em),but no padding set.
  -> <dd> have margin-left of 40px(2.5em)
  -> 

  What type of bullets to use for the Lists
  Position of the bullets(start,inside or outside)
  Custom image for the bullets
  
  -> Preffered web safe fonts
  -> Adding  preffered custom fonts
   
  fonts stacks
     -> Preffered customs Fonts(free or paid)
     -> Preffered web safe fonts

   Preffered fonts
    -> you have to download 
    
  file extensions .woff or .woff2 web open font format
  
  other extensions TTF(TrueType Font) EOT(Embedded Open Type) SVG fonts

  Download font zip file
  EXtract the zip file
  Save the the fonts in a fonts fold
  Use CSS syntax that enable you to your custom fonts
  @font-face {
  font-family: "myFont";
  src: url("myFont.woff2");
}

html {
  font-family: "myFont", "Bitstream Vera Serif", serif;
}

 Different fonts for the headings and  body texts?

 Source sans pro

 You have been provided with 
 -> some raw HTML for the homepage of an imaginary college.
 -> some CSS that styles the page into a three column layout
 -> download a couple of free-to-use Fonts
     .Fonts should give a fairly serious ,formal and trustworth feel : a serif site-wide font for the 
      general body text,coupled with a sans-serif or slab serif for the headings
  
      1.Layout

  -> Page with three column layout.

     2.Fonts
  -> Use free-to-use fonts(make sure they are really free)
  -> Different fonts for headings and body texts(paragraphs)
   
    3.General styling
  ->  SITE-WIDE FONT-SIZE of 10px
  ->  RELATIVE FONT-SIZES for HEADINGS and PARAGRAPHS
  ->  LINE-HEIGHT for BODY TEXT(PARAGRAPHS)
  ->  LETTER-SPACING for HEADINGS 
  ->  LETTER-SPACING and WORD-SPACING for paragraphs
       
      font-family
      font-size
      line-height
      letter-spacing
      word-spacing

      paragraphs and headings


      Links

      Give link,visited,focus and hover states some colors that go with the color of the horizontal
      bars at the top and bottom of the page

      Links underlined by default,but when you hover or focus them underline disappears

      Remove the default focus outline from all the links on the page.

      Give the active state a noticeably different styling so it stands out, 
       but should fit with overall page styling

       Externals links with icons

       3.Lists

       lists ,list items spacing and overall


       Apply colors to any user interface in a meaningful way

       Primary and secondary colors for the brand

       Dark and light variants for each color to apply to user interface in different ways.

       Harmonious
       Ensure accesible texts
       Distinguish UI elements and surfaces from one another.

       50                            50
       100                           100
       200                           200 secondary color
       300                           300
       400                           400
       500 primary color             500
       600                           600
       700 variant color             700 variant color
       800                           800 
       900                           900
   

       Color can make important elements to stand out

      contrast elements

       Show brand colors at memorable moments


       What is the primary color?
       -> Color that is displayed most frequently accross your app's screens and components
       -> contrasting elements
       What is the secondary color?(optional)
       -> provide more ways to accent and distinguish your products
       -> accenting elements(emphasize elements)
       What are the variants of both primary and secondary colors?
       What are the colors for additional UI colors?
          -> backgrounds -white
          -> surfaces -white
          -> errors - red
          -> typography
          -> iconography

          Paragraphs
          Headings
          Links
          Lists
          Form texts

          one column layout page



          Styling form control in different states using pseudo-classes

          :hover when form control is being hovered over by a mouse pointer
          :focus when form control has focus (being tabbed via the keyboard)
          :active when form control is active(clicked on,return or enter key is pressed down)
          :required targets required form control 
          :optional targets optional form control 
          :valid target valid form control
          :invalid target invalid form control
          :in-range target valid form control when in range
          :out-range targets form control when out of range
          :enabled target enabled form control 
          :disabled target disabled form control
          :read-only target read-only form control
          :write-only target write-only form control
          :checked target checked form control
          :indeterminate target form control that is neither checked nor not checked
          : default target the default selection option of a form control

          Styling form control based on whether they are required or not 

          Give different styles e.g different borders

          Using pseudo-elements ::before and ::after along with content to make a chunk 
          of content appear before or after the affected box

          Using CSS to put a chunk of content before and or after a box(Generate content using CSS)
          Chunk  of content(fake node) Not added to the DOM
          Invisible to screen readers
          part of document styles

          Use generated content to handle the placement and animation of the inner circle when radio button is checkedmdreac
          
*/
