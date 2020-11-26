const button = makeElementObject('button', 700, 200)    
button.css3dObject.element.textContent = "InSceneButton"
button.css3dObject.element.style.fontSize = '100px'
button.css3dObject.element.addEventListener('click', () => alert('Button clicked!'))

The trick is you have to import css3d and use that to render the button in the scene.  But that gives you access to modify things within the scene.

Here is the live example I found of this in action
https://codepen.io/trusktr/pen/oNXpMgX

Idea for using annotations within threejs Learned from 
https://medium.com/swlh/building-a-3d-interactive-with-react-and-threejs-70dfd212bf67

updateScreenPosition = offset => 
   {
    //loop through array of interaction points and update position
    let styleString;
    for (let i = 0; i < this.props.annotationPositions.length; i++) 
         {
          let poi = new THREE.Vector3(
          this.props.annotationPositions[i].position3D.x,
          this.props.annotationPositions[i].position3D.y + offset,
          this.props.annotationPositions[i].position3D.z 
           );
         poi.project(this.camera);
         poi.x = Math.round((0.5 + poi.x / 2) * this.renderer.domElement.width);
      poi.y = Math.round((0.5 - poi.y / 2) * this.renderer.domElement.height);
     
  styleString = "top: " + poi.y + "px; left: " + poi.x + "px;";
        this.annotations[i].setAttribute(`style`, `${styleString}`);
        }
 
    //z-axis test to reverse position of horizontal annotations (ic1,ic4)
    if (this.camera.position.z < 0 && !this.state.leftSideRotation) 
        {  this.setState({ leftSideRotation: true });  } 
    else if (this.camera.position.z >= 0 && this.state.leftSideRotation)
        {  this.setState({ leftSideRotation: false }); }
   };a


I simpler option might just be to use the var die1 = threejsname.getObjectByName("die1")
some function to id which side is up... then render it.
