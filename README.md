# Art of the Italian High Renaissance
## Link to deployed app

https://fast-citadel-59465.herokuapp.com/

## High Level Goal

Our website,“Art of the Italian High Renaissance”, showcases artworks by Michelangelo, Leonardo, and Raffaello in the 15-16 Century Italian High Renaissance. Users can view artworks born during the short period of the most exceptional artistic production and learn more about each artwork and each artist’s style. 

## Explanation of Purpose

By clicking on the images of the artworks, users can look at the art piece in greater detail, and read more about each art piece. By clicking on the heart icon below the image, users can either add the artwork they like into a favorites list or unfavorite it. There are two filters and a sorting button at the top of the web page where users can filter the artworks by type of art and by artist, and sort the artworks by title or by year of creation. 

## User Design Principles

Our website has high learnability for new users - the website gives clear information on the goal of the website and instructions on how to use it. Whenever users hover over a clickable item on the page, their cursor would automatically change to a pointer cursor, helping them realize that it is a clickable item.

It is also efficient and memorable to use - filtering, sorting, and favorite list functionalities has clear affordances: the dropdown list indicates the current selected option for the filters and sorting, and the heart icon gives clear visual guidance to users regarding what it means. In addition, clicking on the heart icon would render an instantaneous change in its appearance, and the selected artwork would directly appear or disappear from the favorites list, giving users immediate feedback on their actions.

It is also an intuitive design that users can click on an image to view more details about the corresponding artwork. Moreover, in the pop-up window, users can click on the image to further zoom in, or click again to zoom out. The website also remembers users' preference of whether to show the enlarged version when they click on the images.


## Workflow and Structure of Code

In the render() method in App.js, a FilteredList child component is created and the const array of 12 items created in App.js is passed into created FilteredList component as a prop. 

In FilteredList.js, several methods are written to handle the filtering, sorting and favorite functionalities. In the render() method, there are four drop-down buttons: filtering according to type of artwork, filtering according to artist, sorting by the title or year of artwork, and showing favorite list. When a user selects any options from the drop-down button, a corresponding method is triggered which sets the state of FilterList to a proper value.  Every time the FilteredList is rendered, all filters are applied to the items array in its props and the new item array is sent to an ArtpieceList child component as a prop along with another boolean indicating whether we are showing the favorites list on the page.

In ArtpieceList.js, renderList() converts every item in the array in its props into html script that shows the proper images along with their corresponding title, artist, and created year. Within this method, the image is clickable. When a user clicks on any of the images, showModal() method is triggered and it sets the state of the boolean “show” to true, and stores all the essential information about this artwork in ArtipieceList’s state. Then an ArtpieceModal child component is created. It is responsible for showing a pop-up window when a user clicks on any of the images shown on the page. All the states previously set are passed in as props, and the boolean “show” is to tell the ArtpieceModal that the pop-up window need to show.

Finally, in ArtpieceModal.js, a pop-up window is rendered. Within the pop-up window, the image is also clickable. A user can click on the image to enlarge it. There is a state “inLarge” indicating whether the images should be shown in large or normally. It is set in the method called showInLarge() triggered whenever a user clicks on an image.
