# AngularDrawingApp

## Resize SVG rectangle and Update its Property


# Client: Angular 13

*To achieve the task I have created a custom directive that uses a JavaScript library Interact, The Interact library helps us to interact with the custom directive.
Using Interect.Js  we can easily detect the changes in the custom directive.

* Initially the size of the rectangle is initialized by the API ({baseUrl}/api/draw/getrect)
* After resizing the rectangle the value is updated through the API({baseUrl}/api/draw/update)

# API .Net Core 5

* Get initial:  `api/draw/getrect` 
* Update Rectangle: `api/draw/update`
