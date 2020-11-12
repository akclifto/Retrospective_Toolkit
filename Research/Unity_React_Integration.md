# Research Unity integration into React

How do we implementent Unity into React? From what I have researched we need to directly interface with the browser’s JavaScript engine.  One way to do that is to use Unity WebGL.  

WebGL provides an easy solution for embedding Unity WebGL builds in your React application, with two-way communication between your React and Unity application with advanced API's.  

- If what I gather from our meetings, WebGL may not be the most optimal approach.  

I found this package on NPM for Unity WebGL:

- [react-unity-webgl](https://www.npmjs.com/package/react-unity-webgl)
  - [Documentation starts here](https://github.com/elraccoone/react-unity-webgl/wiki)
- [WebGL Unity Manual Documentation](https://docs.unity3d.com/Manual/webgl.html)  
- [Using WebGL to integrate with browser scripting](https://docs.unity3d.com/Manual/webgl-interactingwithbrowserscripting.html)
  - Unity code is based in C#, I'm sure @Dillon is already familiar with this.  
  - Calling JS or ReactJS from Unity is similar to endpoint usage.
  - Sending data from JS to Unity script uses the `unityInstance.SendMessage(objectName, methodName, value);` keyword.  An Example:

```csharp
    unityInstance.SendMessage('MyGameObject', 'MyFunction');
    unityInstance.SendMessage('MyGameObject', 'MyFunction', 5);

    unityInstance.SendMessage('MyGameObject', 'MyFunction', 'MyString');
```

Code from Unity looks like it is executed on its own scope, so we should be able to embed the Unity content without conflicting with anything else on the web application page.  
