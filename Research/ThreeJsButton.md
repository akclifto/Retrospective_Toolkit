const button = makeElementObject('button', 700, 200)    
button.css3dObject.element.textContent = "InSceneButton"
button.css3dObject.element.style.fontSize = '100px'
button.css3dObject.element.addEventListener('click', () => alert('Button clicked!'))

The trick is you have to import css3d and use that to render the button in the scene.  But that gives you access to modify things within the scene.

Here is the live example I found of this in action
https://codepen.io/trusktr/pen/oNXpMgX

