# SINGLE PAGE APPLICATION CHALLENGE

## How to run the application in your localhost.



## This is the assignment


Create a single page application (SPA) that displays a list of items.
These items must include a picture and a description.
The application functionality should satisfy the next use cases:
1. The user should be able to sort the items on the list using a drag and drop functionality.
2. There should be a counter on the page that shows how many items are being displayed.
3. Each item should have the actions: edit and delete. Edit allows a user to update the
image of an item and the description text. Delete allows a user to remove an item from
the list and update the counter.
4. A functionality to add a new item should exist. This functionality consist on a form to
upload an image (jpg, gif and png extensions of 320px x 320px size) and a description
text (max chars 300).
5. All the actions of the application should be done without refreshing the page (sort, add,
edit and delete) and saved immediately.
6. On a page refresh action, it should be displayed the last state of the list.
Tools to be used for the development: vanilla JavaScript with jQuery (or any other js library) with
any plugin and html5, css3, sass or less, any type of DB (if needed), any type of
backend/language (if needed).

___


1. Have to solve this.
2. Done
3. Done
4. Need to add image, from imgur
5. done
6. done


___ 

## Ran out of time to continue this challenge, but these are the steps I would follow to finish it up:

For 1. I would implement a simple npm package: React-DND
https://github.com/react-dnd/react-dnd.  
Of course this would mean making state handling more complex, since drag and drop would have to "edit" the array index which is currently sorting out the cards.
For 4. There are a couple of ways to solve it,
One option would be creating a REST backend in NODE, which accepts images, after making an axios Post request to the backend, we would get an image url, which can be added to state.
Another way is rewriting the whole thing and doing a MERN stack application, its not what I wanted to do.
Originally I thought that this is a simple application, and can all be resolved via CSR(client side rendering).
Finally, my choice which I which I ran out of time to implement would be uploading to imgurs api. Of course this implies having an API key, and if Testers want to test the app, they would have to make an account, get their own key and secret of course.
One last possibility was to convert images into base64 strings, and hold that in clients local Storage. Not good, but not terrible. 3.6

___

## My solutions for things that are done.

2. Items are a simple array of objects. I did not want to include a Database because I was eager to see if I could manage all the data via localStorage. So putting a counter is just a matter of doing array.length.
3. CRUD operations, CREATE, READ, UPDATE and DELETE are all hanlded via State Hooks. A combination of useState, useEffect and useReducers were chosen to manage simple app state.
4. Item is added simply by pushing to the array. Of course since the array is handled in state we cant really push, we make a new copy of the array with the new Item, and push that new array into state. This is done via the onSubmit Function. Really simple matter of pushing the item to state.
Update and Delete are a different matter. Using hooks, we would want to have the operations of delete and Update reflect state change instantly so I decided to use a simple reducer with a couple of actions.
Creating or Updating an item is done via the same form, so changes are made on the DOM whether user chose to edit or add a New item. 
5. This is explained before. Its instant
6. State persists refreshing of the page, thanks to localStorage. The state is saved on the localstorage component of the browser. To go back, we can press in CHROME, CNTRL + SHIFT + I to open developer tools.
Go to application Tab, and select Local Storage. There you can delete the stored state.