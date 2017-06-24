;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-fangdajing" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M850.453 800.653l0.105-0.223-197.89-193.493c38.961-45.944 61.363-103.043 63.198-161.203 3.664-70.834-24.038-144.003-74.073-195.682-42.739-45.105-102.838-75.421-164.821-83.209-12.031-1.639-24.352-2.458-36.625-2.458-61.344 0-121.126 19.942-168.322 56.113-54.705 40.781-92.468 101.996-103.616 167.925-11.054 61.446 0.911 127.372 32.811 180.82 21.819 37.152 52.888 69.073 89.828 92.298 33.909 21.453 72.924 35.474 112.775 40.485 11.958 1.62 24.219 2.439 36.445 2.439 56.586 0 112.572-17.3 158.132-48.773l197.642 193.343 3.655 3.368 0.105-0.091c6.515 5.235 14.768 8.14 23.319 8.14 20.202 0 36.637-16.127 36.637-35.947 0-8.787-3.358-17.279-9.308-23.853M649.856 536.743c-32.378 64.734-97.46 112.073-169.899 123.548-33.909 5.773-69.646 3.986-102.941-5.139-64.972-17.433-120.583-63.58-148.808-123.528-32.677-66.559-28.602-150.391 10.387-213.6 34.702-58.404 95.873-99.427 163.56-109.707l4.802-0.71c2.525-0.409 5.069-0.799 7.555-1.082 8.369-0.858 16.882-1.286 25.282-1.286 34.569 0 68.716 7.283 98.811 21.085 55.059 24.691 98.955 70.579 120.409 125.929 23.529 59.109 20.125 128.061-9.157 184.488z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-wo" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M504.88781 64C381.336728 64 280.831444 164.48 280.831444 288 280.831444 411.52 381.336728 512 504.88781 512 628.406886 512 728.944177 411.52 728.944177 288 728.944177 164.48 628.470901 64 504.88781 64M504.88781 576C346.063854 576 216.815339 446.783999 216.815339 288 216.815339 129.216 346.063854 0 504.88781 0 663.711766 0 792.960282 129.216 792.960282 288 792.960282 446.783999 663.711766 576 504.88781 576"  ></path>' +
    '' +
    '<path d="M931.856025 1024 92.156778 1024 130.214353 681.407999 308.051091 610.239999 331.865083 669.759999 189.621298 726.591999 163.662767 960 860.350036 960 834.391505 726.591999 692.147721 669.759999 715.961711 610.239999 893.798451 681.407999 931.856025 1024Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-shouyedaohangicon" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M155.417187 327.565431 867.603509 327.565431c20.100804 0 36.394908-16.295128 36.394908-36.396955 0-20.100804-16.295128-36.395932-36.394908-36.395932L155.417187 254.772544c-20.101827 0-36.396955 16.295128-36.396955 36.395932C119.020232 311.269279 135.31536 327.565431 155.417187 327.565431z"  ></path>' +
    '' +
    '<path d="M867.603509 474.816123 155.417187 474.816123c-20.101827 0-36.396955 16.295128-36.396955 36.396955 0 20.100804 16.295128 36.397978 36.396955 36.397978L867.603509 547.611056c20.100804 0 36.394908-16.297175 36.394908-36.397978C903.998417 491.112274 887.703289 474.816123 867.603509 474.816123z"  ></path>' +
    '' +
    '<path d="M867.603509 694.860724 155.417187 694.860724c-20.101827 0-36.396955 16.296151-36.396955 36.396955s16.295128 36.396955 36.396955 36.396955L867.603509 767.654634c20.100804 0 36.394908-16.296151 36.394908-36.396955S887.703289 694.860724 867.603509 694.860724z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
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

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)