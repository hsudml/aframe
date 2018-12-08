# A-Frame Project

Built with [A-Frame](https://aframe.io), a web framework for building virtual reality experiences. Make WebVR with HTML and Entity-Component. Works on Vive, Rift, desktop, mobile platforms.

Click and drag on desktop. Open it on a smartphone and use the device motion sensors. Or [plug in a VR headset](https://webvr.rocks)!

## How-to

If you are interested in remixing this but don't know where to start - you're here! This is a beginner tutorial project that you can start remixing following the instructions below. 

### Docs

For any programming language or library, the documentation is super important. A-frame is no different. To start off this project, we are going to take a look at the camera, which what dictates your view of the VR scene. Go to the [A-frame documentation](https://aframe.io/docs/0.8.0/introduction/) homepage and search for camera. You should be taken directly to the main page for the [camera component documentation](https://aframe.io/docs/0.8.0/components/camera.html#sidebar) (if not, just click the link). In this project's index.html page you'll see that the camera ```<entity>``` starts on line 21 and ends on line 29. It looks like this: 

```
  <a-entity position="0 1.75 0" rotation="1 0 0">
    <a-entity camera look-controls wasd-controls>
      <a-entity position="0 0 -2"
                geometry="primitive: ring; radiusInner: 0.1; radiusOuter: 0.12;"
                material="color: #fe0179; shader: flat; opacity: 0.75;"
                cursor="maxDistance: 30; fuse: false">  
      </a-entity>
    </a-entity>
  </a-entity>
  ```
  On that first line we have the position of the camera in 3D space. The numbers correspond to the X, Y and Z axes respectively. X and Z are both set to 0 and Y is set to 1.75. That means that the camera is 1.75 units above the floor (you can think of this as any unit - in VR units don't matter). Go ahead and set Z to 10 (Z is the last number). Now look at your scene (click the Show Live button at the top of this page). The camera is now 10 units farther away from your scene along the Z axis. Try the same with the X value and see what the change looks like. Now go back and reset the position values to 0, 1.75, and 0. 
  
  Now look at your scene again (Show Live) and press Alt+Ctrl+I. The Aframe inspector will show up and you'll see all of the components listed on the left-hand side of the screen. Click on the first entity listed and notice that the attributes of that entity show up on the right-hand side of the screen. You will recognize the position values as those for our camera. This is the entity for our camera. This isn't super obvious because we don't have an ID set for our camera. Go back to your index.html file and change the camera entity to include an ID for our camera and call it 'camera'. Line 21 should look like this:
  
```
    <a-entity position="0 1.75 0" rotation="1 0 0" id="camera">
```

Now go back to look at the scene and open the inspector again (Alt+Ctrl+I) and now you'll see the ID appear next to the entity in the left-hand menu and when clicked, the right-hand menu will also list the ID. Since it has a good descriptive name, it's obvious what we're dealing with. 

Next, go ahead and change the value of the position within the right-hand menu of the inspector. The camera will move. If you set the Z value to 10, it moves 10 units away from the scene. The Z-axis is represented by the blue arrow coming out of the camera entity in the scene view. You can also click on and drag the blue arrow to move your camera along the Z-axis and the value will change in the right-hand menu. 

