
let fMain=function() {
  Debug.windowSize();
}

//---------------------------------------

class Debug {
  static windowSize() {
    console.log(this.getWindowSizeAsString());
  }
  static getWindowSizeAsString() {
    var wInfos = Array( 
      `InnerWidth=${WindowInfos.getInnerWidth()}px`,
      `InnerHeight=${WindowInfos.getInnerHeight()}px`
    );
    return wInfos.join("    /     ");
  }
}

class WindowInfos {
  static getInnerWidth() {
    return window.innerWidth;
  }  
  static getInnerHeight() {
    return window.innerHeight;
  }    
}

