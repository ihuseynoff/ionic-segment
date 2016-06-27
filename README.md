# ionic-segment

This is an iOS segmented control directive for ionc v1. It is inspired from [ionic v2](http://ionicframework.com/docs/v2/components/#segment).Do not hesitate to contribute to this project.


# Demo
Check out the [demo](http://codepen.io/ihuseynoff/pen/dXOaZP)


# How to use it

### JS/CSS Imports 
Please first imports the following JavaScript/CSS file imports in your index.html.

```html
<link rel="stylesheet" href="bower_components/ionic-segment/dist/css/style.css">
<script src="bower_components/ionic-segment/dist/js/directive.js"></script>
```


### Angular Dependency (app.js)

```javascript
angular.module('DemoApp', ['ionic', 'plgn.ionicSegment'])
```

### Basic Usage

```html
  <ion-segment ng-model="categories" full="true"  assertive>
    <ion-segment-button value="movies">
      Movies
    </ion-segment-button>
    <ion-segment-button value="series">
      Series
    </ion-segment-button>
  </ion-segment>
 
<div ng-switch="categories">
  
   <ion-list ng-switch-when="movies">
      <ion-item>
        Batman Begins
      </ion-item>
        .....
    </ion-list>

    <ion-list ng-switch-when="series">
      <ion-item>
        Game of Thrones
      </ion-item>
        .....
    </ion-list>
    
    <ion-list ng-switch-when="animation">
      <ion-item>
        Ice Age
      </ion-item>
        .....
    </ion-list>
  
  </div>
  ```
## Options 



