# ionic-segment
segmented control for ionic v1


# Demo
Check out the [demo] (http://codepen.io/ihuseynoff/pen/dXOaZP)



# How to use it


## Basic Usage
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
