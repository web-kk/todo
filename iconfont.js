;(function(window) {

var svgSprite = '<svg>' +
  ''+
    '<symbol id="icon-caidan" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M82 720c-38 0-72 32-72 70s34 72 72 72 70-34 70-72S120 720 82 720z"  ></path>'+
      ''+
      '<path d="M82 376c-38 0-72 32-72 70s34 70 72 70 70-32 70-70S120 376 82 376z"  ></path>'+
      ''+
      '<path d="M338 166l606 0c36 0 66-28 66-64s-30-66-66-66L338 36c-36 0-66 30-66 66S302 166 338 166z"  ></path>'+
      ''+
      '<path d="M82 30C44 30 10 64 10 102s34 70 72 70 70-32 70-70S120 30 82 30z"  ></path>'+
      ''+
      '<path d="M944 380 338 380c-36 0-66 30-66 66s30 66 66 66l606 0c36 0 66-30 66-66S980 380 944 380z"  ></path>'+
      ''+
      '<path d="M944 724 338 724c-36 0-66 30-66 66s30 66 66 66l606 0c36 0 66-30 66-66S980 724 944 724z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-iconfont30" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M371.088 66.176l0 130.352 0 43.744 43.568 4.048c350.384 32.576 548.976 131.712 559.152 279.136 8.336 120.848-112.224 270.352-275.344 367.632 79.904-95.568 150.288-215.552 113.776-319.472-36.768-104.688-164.368-162.608-390.096-177.04l-51.056-3.264 0 51.168 0 82.816L52.976 295.744 371.088 66.176M392.976 0c-7.744 0-16.768 3.296-26.336 10.208L23.424 257.872c-28.848 20.832-28.848 54.912 0 75.744l343.2 247.664c9.584 6.928 18.592 10.208 26.336 10.208 15.6 0 26.128-13.28 26.128-37.056l0-111.952C1175.44 490.832 486.704 1024 500.096 1024c0.048 0 0.128-0.016 0.208-0.032 450.752-105.856 941.008-732.4-81.2-827.44L419.104 37.056C419.088 13.296 408.56 0 392.976 0L392.976 0z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-sousuo" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M968.896 903.103l-10.964-10.964-226.621-241.241c51.172-65.793 84.069-146.207 84.069-237.586 0-211.999-171.793-383.792-383.792-383.792-215.654 3.655-383.792 175.449-383.792 383.792s171.793 383.792 383.792 383.792c80.414 0 157.172-25.585 219.31-69.449l230.275 244.896c0 0 0 3.655 3.655 3.655 10.964 10.964 21.932 14.621 40.207 14.621 32.897 0 58.483-25.585 58.483-58.483-3.655-7.311-7.311-18.276-14.621-29.241zM427.931 713.034c-164.482 0-299.724-135.241-299.724-299.724s135.241-299.724 299.724-299.724 299.724 135.241 299.724 299.724-135.241 299.724-299.724 299.724z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-comiistupian" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M336.797188 278.473339c-32.245402 0-58.382689 26.136264-58.382689 58.402131 0 32.224935 26.137287 58.380642 58.382689 58.380642 32.246425 0 58.381665-26.13524 58.381665-58.380642C395.178853 304.609603 369.043612 278.473339 336.797188 278.473339zM959.532221 660.229996 959.532221 220.091674c0-64.491827-52.289923-116.76333-116.762307-116.76333L181.112406 103.328343c-64.472384 0-116.76333 52.270481-116.76333 116.76333l0 583.813582c0 64.473407 52.290947 116.764354 116.76333 116.764354l661.657508 0c64.472384 0 116.762307-52.29197 116.762307-116.764354L959.532221 660.46331l0.116657-0.11768L959.532221 660.229996zM920.612817 803.905256c0 42.989093-34.855856 77.841879-77.841879 77.841879L181.112406 881.747135c-38.571481 0-70.388117-28.138874-76.538187-64.976874l6.304589 6.326079 201.475687-202.039529 132.447545 132.839471 270.092461-284.319487L920.631236 675.896814l0 128.011512-0.019443 0L920.611793 803.905256zM920.612817 621.190865 714.21298 414.211836 444.122565 698.489368 312.354496 566.372352 103.27155 776.021186 103.27155 220.091674c0-42.989093 34.854832-77.841879 77.842903-77.841879l661.655462 0c42.989093 0 77.841879 34.853809 77.841879 77.841879L920.611793 621.190865 920.612817 621.190865z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-folder-o" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M931.384138 864.391862 87.990518 864.391862c-14.414291 0-26.101471-11.69946-26.101471-26.101471L61.889047 182.494381c0-6.92062 2.752694-13.566994 7.647167-18.461467 4.894474-4.89345 11.533684-7.640004 18.454304-7.640004 0.01228 0 0.01228 0 0.01228 0l284.053428 0.204661c6.919597 0.00614 13.547551 2.752694 18.441001 7.647167l90.029456 90.028433 450.856431 0c14.414291 0 26.100448 11.68718 26.100448 26.101471l0 557.916772C957.484585 852.693426 945.798429 864.391862 931.384138 864.391862zM114.09199 812.189943l791.190677 0L905.282666 306.474067 469.719546 306.474067c-6.92062 0-13.55983-2.752694-18.454304-7.647167l-90.041736-90.034573L114.09199 208.614272 114.09199 812.189943z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-shanchu" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M346.99425 372.767064c-17.32411 0-31.319943 13.995833-31.319943 31.319943l0 405.537795c0 17.32411 13.995833 31.319943 31.319943 31.319943 17.32411 0 31.319943-13.995833 31.319943-31.319943L378.314193 404.087007C378.314193 386.762897 364.31836 372.767064 346.99425 372.767064zM927.821318 169.230103 732.391699 169.230103c0.512043-3.584299 0.768064-7.168597 0.768064-10.838237L733.159763 81.158763C733.159763 36.44037 696.804734 0 652.001 0L354.76023 0C310.041837 0 273.601467 36.44037 273.601467 81.158763l0 76.123677c0 3.669639 0.341362 7.253938 0.768064 10.838237L97.88549 168.120677c-19.457621 0-35.160263 24.236686-35.160263 43.608967 0 19.457621 23.127261 40.451371 42.584882 40.451371l44.462372 0C149.004417 256.704059 148.577715 261.227102 148.577715 265.835486l0 675.896325c0 44.803734 36.44037 81.158763 81.158763 81.158763l567.172598 0c44.718393 0 82.268189-36.44037 82.268189-81.158763L879.177265 266.859572c0-4.608384-0.426702-9.131428-1.109426-13.569131l50.862905 0c19.457621 0 34.136178-24.236686 34.136178-43.608967S947.27894 169.230103 927.821318 169.230103zM336.497375 74.84357C336.497375 68.869739 341.36178 64.005334 347.335611 64.005334l312.090008 0c5.973831 0 10.838237 4.864405 10.838237 10.838237l0 102.664555c0 5.973831-4.864405 10.838237-10.838237 10.838237L347.335611 188.346362C341.36178 188.346362 336.497375 183.481957 336.497375 177.422785L336.497375 74.84357zM817.305442 952.314026c0 5.973831-4.864405 10.838237-10.838237 10.838237L221.287774 963.152263c-5.973831 0-10.838237-4.864405-10.838237-10.838237L210.449537 262.67789c0-5.973831 4.864405-10.838237 10.838237-10.838237L806.467206 251.839653c5.973831 0 10.838237 4.864405 10.838237 10.838237L817.305442 952.314026zM514.090841 372.767064c-17.32411 0-31.319943 13.995833-31.319943 31.319943l0 405.537795c0 17.32411 13.995833 31.319943 31.319943 31.319943 17.32411 0 31.319943-13.995833 31.319943-31.319943L545.410784 404.087007C545.410784 386.762897 531.329611 372.767064 514.090841 372.767064zM681.102092 372.767064c-17.32411 0-31.319943 13.995833-31.319943 31.319943l0 405.537795c0 17.32411 13.995833 31.319943 31.319943 31.319943S712.507376 826.948912 712.507376 809.624802L712.507376 404.087007C712.507376 386.762897 698.426202 372.767064 681.102092 372.767064z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-ioscolorwand" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M396.022 318.44 327.936 386.674 840.128 900 908 831.766ZM364 124l64 0 0 128-64 0 0-128ZM364 532l64 0 0 128-64 0 0-128ZM548 356l128 0 0 64-128 0 0-64ZM607.882 224.286 562.628 178.93 472.12 269.64 517.374 314.996ZM184.12 224.286 274.628 314.996 319.882 269.64 229.374 178.93ZM184.12 558.282 229.374 603.632 319.882 512.924 274.628 467.568ZM116 356l128 0 0 64-128 0 0-64Z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
'</svg>'
var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
var shouldInjectCss = script.getAttribute("data-injectcss")

/**
 * document ready
 */
var ready = function(fn){
  if(document.addEventListener){
      document.addEventListener("DOMContentLoaded",function(){
          document.removeEventListener("DOMContentLoaded",arguments.callee,false)
          fn()
      },false)
  }else if(document.attachEvent){
     IEContentLoaded (window, fn)
  }

  function IEContentLoaded (w, fn) {
      var d = w.document, done = false,
      // only fire once
      init = function () {
          if (!done) {
              done = true
              fn()
          }
      }
      // polling for no errors
      ;(function () {
          try {
              // throws errors until after ondocumentready
              d.documentElement.doScroll('left')
          } catch (e) {
              setTimeout(arguments.callee, 50)
              return
          }
          // no errors, fire

          init()
      })()
      // trying to always fire before onload
      d.onreadystatechange = function() {
          if (d.readyState == 'complete') {
              d.onreadystatechange = null
              init()
          }
      }
  }
}

/**
 * Insert el before target
 *
 * @param {Element} el
 * @param {Element} target
 */

var before = function (el, target) {
  target.parentNode.insertBefore(el, target)
}

/**
 * Prepend el to target
 *
 * @param {Element} el
 * @param {Element} target
 */

var prepend = function (el, target) {
  if (target.firstChild) {
    before(el, target.firstChild)
  } else {
    target.appendChild(el)
  }
}

function appendSvg(){
  var div,svg

  div = document.createElement('div')
  div.innerHTML = svgSprite
  svg = div.getElementsByTagName('svg')[0]
  if (svg) {
    svg.setAttribute('aria-hidden', 'true')
    svg.style.position = 'absolute'
    svg.style.width = 0
    svg.style.height = 0
    svg.style.overflow = 'hidden'
    prepend(svg,document.body)
  }
}

if(shouldInjectCss && !window.__iconfont__svg__cssinject__){
  window.__iconfont__svg__cssinject__ = true
  try{
    document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
  }catch(e){
    console && console.log(e)
  }
}

ready(appendSvg)


})(window)
