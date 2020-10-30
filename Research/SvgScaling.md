# Spike:  Research scaling svg to 3D dice surface

## Adam Clifton

### SVG Research

From initial research, svg files do not require scaling, since they are made of vectors and not pixels.  
The benefit of using svg images is their ability to scale well on surfaces ranging from small to very large (think billboards).

[This article discusses two method to scale an svcg to specific sizes](https://medium.com/@ayumitabinote/how-to-resize-a-svg-image-7829bac8948c)

The file I am using to scale is the origSun.svg image, with the testSun.svg being the output test file that can be found in the [resources/svg-resources folder](resources/svg-resources/).  To adjust a scale size of an svg file, open the svg file in a text editor:
![svg-img1](resources/svg-resources/svg-img1.png)

Add height and with constraints to the image, if necessary.  These put a max-value threshold on the image. In the example below, the max-value threshold is 1000px by 1000px.

![svg-img2](resources/svg-resources/svg-img2.png)

These can be adjusted as needed and should be able to be used to scale to the surface of our cubes.  

Additionally, you can constraing or change the svg size with CSS using the background-size modifier:

`image: {
    background-size: 400px 600px
}`

### Scale SVG to 3d Surface

I don't have any experience with Unity and using/scaling/wrapping images to objects in 3D, so my research and  testing knowledge on this is limited.
However, I did find plugin for Unity called [SVG Importer](http://svgimporter.com/) that appears to be able to handle importing and using vector graphics
in Unity.  The site contains expected documentation for how to use the Importer as well as video tutorials on how to get started using the plugin and
applying svg images to a scene.  
