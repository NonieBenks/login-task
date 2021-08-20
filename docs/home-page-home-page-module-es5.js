(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-page-home-page-module"], {
    /***/
    "./node_modules/ngx-pinch-zoom/__ivy_ngcc__/fesm2015/ngx-pinch-zoom.js":
    /*!*****************************************************************************!*\
      !*** ./node_modules/ngx-pinch-zoom/__ivy_ngcc__/fesm2015/ngx-pinch-zoom.js ***!
      \*****************************************************************************/

    /*! exports provided: PinchZoomComponent, PinchZoomModule, _defaultComponentProperties */

    /***/
    function node_modulesNgxPinchZoom__ivy_ngcc__Fesm2015NgxPinchZoomJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PinchZoomComponent", function () {
        return PinchZoomComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PinchZoomModule", function () {
        return PinchZoomModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "_defaultComponentProperties", function () {
        return _defaultComponentProperties;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      function PinchZoomComponent_div_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PinchZoomComponent_div_2_Template_div_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

            var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r1.toggleZoom();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("pz-zoom-button-out", ctx_r0.isZoomedIn);
        }
      }

      var _c0 = ["*"];
      var defaultProperties = {
        transitionDuration: 200,
        doubleTap: true,
        doubleTapScale: 2,
        limitZoom: "original image size",
        autoZoomOut: false,
        zoomControlScale: 1,
        minPanScale: 1.0001,
        minScale: 0,
        listeners: "mouse and touch",
        wheel: true,
        wheelZoomFactor: 0.2,
        draggableImage: false
      };
      var backwardCompatibilityProperties = {
        "transition-duration": "transitionDuration",
        "transitionDurationBackwardCompatibility": "transitionDuration",
        "double-tap": "doubleTap",
        "doubleTapBackwardCompatibility": "doubleTap",
        "double-tap-scale": "doubleTapScale",
        "doubleTapScaleBackwardCompatibility": "doubleTapScale",
        "auto-zoom-out": "autoZoomOut",
        "autoZoomOutBackwardCompatibility": "autoZoomOut",
        "limit-zoom": "limitZoom",
        "limitZoomBackwardCompatibility": "limitZoom"
      };

      var Touches = /*#__PURE__*/function () {
        function Touches(properties) {
          var _this = this;

          _classCallCheck(this, Touches);

          this.eventType = undefined;
          this.handlers = {};
          this.startX = 0;
          this.startY = 0;
          this.lastTap = 0;
          this.doubleTapMinTimeout = 300;
          this.tapMinTimeout = 200;
          this.touchstartTime = 0;
          this.i = 0;
          this.isMousedown = false;
          this._touchListeners = {
            "touchstart": "handleTouchstart",
            "touchmove": "handleTouchmove",
            "touchend": "handleTouchend"
          };
          this._mouseListeners = {
            "mousedown": "handleMousedown",
            "mousemove": "handleMousemove",
            "mouseup": "handleMouseup",
            "wheel": "handleWheel"
          };
          this._otherListeners = {
            "resize": "handleResize"
          };
          /*
           * Listeners
           */

          /* Touchstart */

          this.handleTouchstart = function (event) {
            _this.elementPosition = _this.getElementPosition();
            _this.touchstartTime = new Date().getTime();

            if (_this.eventType === undefined) {
              _this.getTouchstartPosition(event);
            }

            _this.runHandler("touchstart", event);
          };
          /* Touchmove */


          this.handleTouchmove = function (event) {
            var touches = event.touches; // Pan

            if (_this.detectPan(touches)) {
              _this.runHandler("pan", event);
            } // Pinch


            if (_this.detectPinch(event)) {
              _this.runHandler("pinch", event);
            }
          };
          /* Touchend */


          this.handleTouchend = function (event) {
            var touches = event.touches; // Double Tap

            if (_this.detectDoubleTap()) {
              _this.runHandler("double-tap", event);
            } // Tap


            _this.detectTap();

            _this.runHandler("touchend", event);

            _this.eventType = 'touchend';

            if (touches && touches.length === 0) {
              _this.eventType = undefined;
              _this.i = 0;
            }
          };
          /* Mousedown */


          this.handleMousedown = function (event) {
            _this.isMousedown = true;
            _this.elementPosition = _this.getElementPosition();
            _this.touchstartTime = new Date().getTime();

            if (_this.eventType === undefined) {
              _this.getMousedownPosition(event);
            }

            _this.runHandler("mousedown", event);
          };
          /* Mousemove */


          this.handleMousemove = function (event) {
            //event.preventDefault();
            if (!_this.isMousedown) {
              return;
            } // Pan


            _this.runHandler("pan", event); // Linear swipe


            switch (_this.detectLinearSwipe(event)) {
              case "horizontal-swipe":
                event.swipeType = "horizontal-swipe";

                _this.runHandler("horizontal-swipe", event);

                break;

              case "vertical-swipe":
                event.swipeType = "vertical-swipe";

                _this.runHandler("vertical-swipe", event);

                break;
            } // Linear swipe


            if (_this.detectLinearSwipe(event) || _this.eventType === 'horizontal-swipe' || _this.eventType === 'vertical-swipe') {
              _this.handleLinearSwipe(event);
            }
          };
          /* Mouseup */


          this.handleMouseup = function (event) {
            // Tap
            _this.detectTap();

            _this.isMousedown = false;

            _this.runHandler("mouseup", event);

            _this.eventType = undefined;
            _this.i = 0;
          };
          /* Wheel */


          this.handleWheel = function (event) {
            _this.runHandler("wheel", event);
          };
          /* Resize */


          this.handleResize = function (event) {
            _this.runHandler("resize", event);
          };

          this.properties = properties;
          this.element = this.properties.element;
          this.elementPosition = this.getElementPosition();
          this.toggleEventListeners('addEventListener');
        }

        _createClass(Touches, [{
          key: "touchListeners",
          get: function get() {
            return this.properties.touchListeners ? this.properties.touchListeners : this._touchListeners;
          }
        }, {
          key: "mouseListeners",
          get: function get() {
            return this.properties.mouseListeners ? this.properties.mouseListeners : this._mouseListeners;
          }
        }, {
          key: "otherListeners",
          get: function get() {
            return this.properties.otherListeners ? this.properties.otherListeners : this._otherListeners;
          }
        }, {
          key: "destroy",
          value: function destroy() {
            this.toggleEventListeners('removeEventListener');
          }
        }, {
          key: "toggleEventListeners",
          value: function toggleEventListeners(action) {
            var listeners;

            if (this.properties.listeners === 'mouse and touch') {
              listeners = Object.assign(this.touchListeners, this.mouseListeners);
            } else {
              listeners = this.detectTouchScreen() ? this.touchListeners : this.mouseListeners;
            }

            if (this.properties.resize) {
              listeners = Object.assign(listeners, this.otherListeners);
            }

            for (var listener in listeners) {
              var handler = listeners[listener]; // Window

              if (listener === "resize") {
                if (action === 'addEventListener') {
                  window.addEventListener(listener, this[handler], false);
                }

                if (action === 'removeEventListener') {
                  window.removeEventListener(listener, this[handler], false);
                } // Document

              } else if (listener === 'mouseup' || listener === "mousemove") {
                if (action === 'addEventListener') {
                  document.addEventListener(listener, this[handler], false);
                }

                if (action === 'removeEventListener') {
                  document.removeEventListener(listener, this[handler], false);
                } // Element

              } else {
                if (action === 'addEventListener') {
                  this.element.addEventListener(listener, this[handler], false);
                }

                if (action === 'removeEventListener') {
                  this.element.removeEventListener(listener, this[handler], false);
                }
              }
            }
          }
        }, {
          key: "addEventListeners",
          value: function addEventListeners(listener) {
            var handler = this._mouseListeners[listener];
            window.addEventListener(listener, this[handler], false);
          }
        }, {
          key: "removeEventListeners",
          value: function removeEventListeners(listener) {
            var handler = this._mouseListeners[listener];
            window.removeEventListener(listener, this[handler], false);
          }
        }, {
          key: "handleLinearSwipe",
          value: function handleLinearSwipe(event) {
            //event.preventDefault();
            this.i++;

            if (this.i > 3) {
              this.eventType = this.getLinearSwipeType(event);
            }

            if (this.eventType === 'horizontal-swipe') {
              this.runHandler('horizontal-swipe', event);
            }

            if (this.eventType === 'vertical-swipe') {
              this.runHandler('vertical-swipe', event);
            }
          }
        }, {
          key: "runHandler",
          value: function runHandler(eventName, response) {
            if (this.handlers[eventName]) {
              this.handlers[eventName](response);
            }
          }
          /*
           * Detection
           */

        }, {
          key: "detectPan",
          value: function detectPan(touches) {
            return touches.length === 1 && !this.eventType || this.eventType === 'pan';
          }
        }, {
          key: "detectDoubleTap",
          value: function detectDoubleTap() {
            var _this2 = this;

            if (this.eventType != undefined) {
              return;
            }

            var currentTime = new Date().getTime();
            var tapLength = currentTime - this.lastTap;
            clearTimeout(this.doubleTapTimeout);

            if (tapLength < this.doubleTapMinTimeout && tapLength > 0) {
              return true;
            } else {
              this.doubleTapTimeout = setTimeout(function () {
                clearTimeout(_this2.doubleTapTimeout);
              }, this.doubleTapMinTimeout);
            }

            this.lastTap = currentTime;
            return undefined;
          }
        }, {
          key: "detectTap",
          value: function detectTap() {
            if (this.eventType != undefined) {
              return;
            }

            var currentTime = new Date().getTime();
            var tapLength = currentTime - this.touchstartTime;

            if (tapLength > 0) {
              if (tapLength < this.tapMinTimeout) {
                this.runHandler("tap", {});
              } else {
                this.runHandler("longtap", {});
              }
            }
          }
        }, {
          key: "detectPinch",
          value: function detectPinch(event) {
            var touches = event.touches;
            return touches.length === 2 && this.eventType === undefined || this.eventType === 'pinch';
          }
        }, {
          key: "detectLinearSwipe",
          value: function detectLinearSwipe(event) {
            var touches = event.touches;

            if (touches) {
              if (touches.length === 1 && !this.eventType || this.eventType === 'horizontal-swipe' || this.eventType === 'vertical-swipe') {
                return this.getLinearSwipeType(event);
              }
            } else {
              if (!this.eventType || this.eventType === 'horizontal-swipe' || this.eventType === 'vertical-swipe') {
                return this.getLinearSwipeType(event);
              }
            }

            return undefined;
          }
        }, {
          key: "getLinearSwipeType",
          value: function getLinearSwipeType(event) {
            if (this.eventType !== 'horizontal-swipe' && this.eventType !== 'vertical-swipe') {
              var movementX = Math.abs(this.moveLeft(0, event) - this.startX);
              var movementY = Math.abs(this.moveTop(0, event) - this.startY);

              if (movementY * 3 > movementX) {
                return 'vertical-swipe';
              } else {
                return 'horizontal-swipe';
              }
            } else {
              return this.eventType;
            }
          }
        }, {
          key: "getElementPosition",
          value: function getElementPosition() {
            return this.element.getBoundingClientRect();
          }
        }, {
          key: "getTouchstartPosition",
          value: function getTouchstartPosition(event) {
            this.startX = event.touches[0].clientX - this.elementPosition.left;
            this.startY = event.touches[0].clientY - this.elementPosition.top;
          }
        }, {
          key: "getMousedownPosition",
          value: function getMousedownPosition(event) {
            this.startX = event.clientX - this.elementPosition.left;
            this.startY = event.clientY - this.elementPosition.top;
          }
        }, {
          key: "moveLeft",
          value: function moveLeft(index, event) {
            var touches = event.touches;

            if (touches) {
              return touches[index].clientX - this.elementPosition.left;
            } else {
              return event.clientX - this.elementPosition.left;
            }
          }
        }, {
          key: "moveTop",
          value: function moveTop(index, event) {
            var touches = event.touches;

            if (touches) {
              return touches[index].clientY - this.elementPosition.top;
            } else {
              return event.clientY - this.elementPosition.top;
            }
          }
        }, {
          key: "detectTouchScreen",
          value: function detectTouchScreen() {
            var prefixes = ' -webkit- -moz- -o- -ms- '.split(' ');

            var mq = function mq(query) {
              return window.matchMedia(query).matches;
            };

            if ('ontouchstart' in window) {
              return true;
            } // include the 'heartz' as a way to have a non matching MQ to help terminate the join
            // https://git.io/vznFH


            var query = ['(', prefixes.join('touch-enabled),('), 'heartz', ')'].join('');
            return mq(query);
          }
          /* Public properties and methods */

        }, {
          key: "on",
          value: function on(event, handler) {
            if (event) {
              this.handlers[event] = handler;
            }
          }
        }]);

        return Touches;
      }();

      var IvyPinch = /*#__PURE__*/function () {
        function IvyPinch(properties) {
          var _this3 = this;

          _classCallCheck(this, IvyPinch);

          this.properties = defaultProperties;
          this.i = 0;
          this.scale = 1;
          this.initialScale = 1;
          this.startX = 0;
          this.startY = 0;
          this.moveX = 0;
          this.moveY = 0;
          this.initialMoveX = 0;
          this.initialMoveY = 0;
          this.moveXC = 0;
          this.moveYC = 0;
          this.lastTap = 0;
          this.draggingMode = false;
          this.distance = 0;
          this.doubleTapTimeout = 0;
          this.initialDistance = 0;
          this.events = {};
          this.defaultMaxScale = 3;
          /* Touchstart */

          this.handleTouchstart = function (event) {
            _this3.touches.addEventListeners("mousemove", "handleMousemove");

            _this3.getElementPosition();

            if (_this3.eventType === undefined) {
              _this3.getTouchstartPosition(event);
            }
          };
          /* Touchend */


          this.handleTouchend = function (event) {
            /* touchend */
            if (event.type === "touchend") {
              _this3.i = 0;
              _this3.draggingMode = false;
              var touches = event.touches; // Min scale

              if (_this3.scale < 1) {
                _this3.scale = 1;
              } // Auto Zoom Out


              if (_this3.properties.autoZoomOut && _this3.eventType === 'pinch') {
                _this3.scale = 1;
              } // Align image


              if (_this3.eventType === 'pinch' || _this3.eventType === 'pan' && _this3.scale > _this3.minPanScale) {
                _this3.alignImage();
              } // Update initial values


              if (_this3.eventType === 'pinch' || _this3.eventType === 'pan' || _this3.eventType === 'horizontal-swipe' || _this3.eventType === 'vertical-swipe') {
                _this3.updateInitialValues();
              }

              _this3.eventType = 'touchend';

              if (touches && touches.length === 0) {
                _this3.eventType = undefined;
              }
            }
            /* mouseup */


            if (event.type === "mouseup") {
              _this3.draggingMode = false;

              _this3.updateInitialValues();

              _this3.eventType = undefined;
            }

            _this3.touches.removeEventListeners("mousemove", "handleMousemove");
          };
          /*
           * Handlers
           */


          this.handlePan = function (event) {
            if (_this3.scale < _this3.minPanScale || _this3.properties.disablePan) {
              return;
            }

            event.preventDefault();

            var _this3$getClientPosit = _this3.getClientPosition(event),
                clientX = _this3$getClientPosit.clientX,
                clientY = _this3$getClientPosit.clientY;

            if (!_this3.eventType) {
              _this3.startX = clientX - _this3.elementPosition.left;
              _this3.startY = clientY - _this3.elementPosition.top;
            }

            _this3.eventType = 'pan';
            _this3.moveX = _this3.initialMoveX + (_this3.moveLeft(event, 0) - _this3.startX);
            _this3.moveY = _this3.initialMoveY + (_this3.moveTop(event, 0) - _this3.startY);

            if (_this3.properties.limitPan) {
              _this3.limitPanY();

              _this3.limitPanX();
            }
            /* mousemove */


            if (event.type === "mousemove" && _this3.scale > _this3.minPanScale) {
              _this3.centeringImage();
            }

            _this3.transformElement(0);
          };

          this.handleDoubleTap = function (event) {
            _this3.toggleZoom(event);

            return;
          };

          this.handlePinch = function (event) {
            event.preventDefault();

            if (_this3.eventType === undefined || _this3.eventType === 'pinch') {
              var touches = event.touches;

              if (!_this3.eventType) {
                _this3.initialDistance = _this3.getDistance(touches);

                var moveLeft0 = _this3.moveLeft(event, 0);

                var moveLeft1 = _this3.moveLeft(event, 1);

                var moveTop0 = _this3.moveTop(event, 0);

                var moveTop1 = _this3.moveTop(event, 1);

                _this3.moveXC = (moveLeft0 + moveLeft1) / 2 - _this3.initialMoveX;
                _this3.moveYC = (moveTop0 + moveTop1) / 2 - _this3.initialMoveY;
              }

              _this3.eventType = 'pinch';
              _this3.distance = _this3.getDistance(touches);
              _this3.scale = _this3.initialScale * (_this3.distance / _this3.initialDistance);
              _this3.moveX = _this3.initialMoveX - (_this3.distance / _this3.initialDistance * _this3.moveXC - _this3.moveXC);
              _this3.moveY = _this3.initialMoveY - (_this3.distance / _this3.initialDistance * _this3.moveYC - _this3.moveYC);

              _this3.handleLimitZoom();

              if (_this3.properties.limitPan) {
                _this3.limitPanY();

                _this3.limitPanX();
              }

              _this3.transformElement(0);
            }
          };

          this.handleWheel = function (event) {
            event.preventDefault();
            var wheelZoomFactor = _this3.properties.wheelZoomFactor || 0;
            var zoomFactor = event.deltaY < 0 ? wheelZoomFactor : -wheelZoomFactor;
            var newScale = _this3.initialScale + zoomFactor;
            /* Round value */

            if (newScale < 1 + wheelZoomFactor) {
              newScale = 1;
            } else if (newScale < _this3.maxScale && newScale > _this3.maxScale - wheelZoomFactor) {
              newScale = _this3.maxScale;
            }

            if (newScale < 1 || newScale > _this3.maxScale) {
              return;
            }

            if (newScale === _this3.scale) {
              return;
            }

            _this3.getElementPosition();

            _this3.scale = newScale;
            /* Get cursor position over image */

            var xCenter = event.clientX - _this3.elementPosition.left - _this3.initialMoveX;
            var yCenter = event.clientY - _this3.elementPosition.top - _this3.initialMoveY;

            _this3.setZoom({
              scale: newScale,
              center: [xCenter, yCenter]
            });
          };

          this.handleResize = function (_event) {
            _this3.setAutoHeight();
          };

          this.element = properties.element;

          if (!this.element) {
            return;
          }

          this.elementTarget = this.element.querySelector('*').tagName;
          this.parentElement = this.element.parentElement;
          this.properties = Object.assign({}, defaultProperties, properties);
          this.detectLimitZoom();
          this.touches = new Touches({
            element: properties.element,
            listeners: properties.listeners,
            resize: properties.autoHeight,
            mouseListeners: {
              "mousedown": "handleMousedown",
              "mouseup": "handleMouseup",
              "wheel": "handleWheel"
            }
          });
          /* Init */

          this.setBasicStyles();
          /*
           * Listeners
           */

          this.touches.on('touchstart', this.handleTouchstart);
          this.touches.on('touchend', this.handleTouchend);
          this.touches.on('mousedown', this.handleTouchstart);
          this.touches.on('mouseup', this.handleTouchend);
          this.touches.on('pan', this.handlePan);
          this.touches.on('mousemove', this.handlePan);
          this.touches.on('pinch', this.handlePinch);

          if (this.properties.wheel) {
            this.touches.on('wheel', this.handleWheel);
          }

          if (this.properties.doubleTap) {
            this.touches.on('double-tap', this.handleDoubleTap);
          }

          if (this.properties.autoHeight) {
            this.touches.on('resize', this.handleResize);
          }
        } // Minimum scale at which panning works


        _createClass(IvyPinch, [{
          key: "minPanScale",
          get: function get() {
            return this.getPropertiesValue("minPanScale");
          }
        }, {
          key: "fullImage",
          get: function get() {
            return this.properties.fullImage;
          }
        }, {
          key: "handleLimitZoom",
          value: function handleLimitZoom() {
            var limitZoom = this.maxScale;
            var minScale = this.properties.minScale || 0;

            if (this.scale > limitZoom || this.scale <= minScale) {
              var imageWidth = this.getImageWidth();
              var imageHeight = this.getImageHeight();
              var enlargedImageWidth = imageWidth * this.scale;
              var enlargedImageHeight = imageHeight * this.scale;
              var moveXRatio = this.moveX / (enlargedImageWidth - imageWidth);
              var moveYRatio = this.moveY / (enlargedImageHeight - imageHeight);

              if (this.scale > limitZoom) {
                this.scale = limitZoom;
              }

              if (this.scale <= minScale) {
                this.scale = minScale;
              }

              var newImageWidth = imageWidth * this.scale;
              var newImageHeight = imageHeight * this.scale;
              this.moveX = -Math.abs(moveXRatio * (newImageWidth - imageWidth));
              this.moveY = -Math.abs(-moveYRatio * (newImageHeight - imageHeight));
            }
          }
        }, {
          key: "moveLeft",
          value: function moveLeft(event) {
            var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            var clientX = this.getClientPosition(event, index).clientX;
            return clientX - this.elementPosition.left;
          }
        }, {
          key: "moveTop",
          value: function moveTop(event) {
            var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            var clientY = this.getClientPosition(event, index).clientY;
            return clientY - this.elementPosition.top;
          }
          /*
           * Detection
           */

        }, {
          key: "centeringImage",
          value: function centeringImage() {
            var img = this.element.getElementsByTagName(this.elementTarget)[0];
            var initialMoveX = this.moveX;
            var initialMoveY = this.moveY;

            if (this.moveY > 0) {
              this.moveY = 0;
            }

            if (this.moveX > 0) {
              this.moveX = 0;
            }

            if (img) {
              this.limitPanY();
              this.limitPanX();
            }

            if (img && this.scale < 1) {
              if (this.moveX < this.element.offsetWidth * (1 - this.scale)) {
                this.moveX = this.element.offsetWidth * (1 - this.scale);
              }
            }

            return initialMoveX !== this.moveX || initialMoveY !== this.moveY;
          }
        }, {
          key: "limitPanY",
          value: function limitPanY() {
            var imgHeight = this.getImageHeight();
            var scaledImgHeight = imgHeight * this.scale;
            var parentHeight = this.parentElement.offsetHeight;
            var elementHeight = this.element.offsetHeight;

            if (scaledImgHeight < parentHeight) {
              this.moveY = (parentHeight - elementHeight * this.scale) / 2;
            } else {
              var imgOffsetTop = (imgHeight - elementHeight) * this.scale / 2;

              if (this.moveY > imgOffsetTop) {
                this.moveY = imgOffsetTop;
              } else if (scaledImgHeight + Math.abs(imgOffsetTop) - parentHeight + this.moveY < 0) {
                this.moveY = -(scaledImgHeight + Math.abs(imgOffsetTop) - parentHeight);
              }
            }
          }
        }, {
          key: "limitPanX",
          value: function limitPanX() {
            var imgWidth = this.getImageWidth();
            var scaledImgWidth = imgWidth * this.scale;
            var parentWidth = this.parentElement.offsetWidth;
            var elementWidth = this.element.offsetWidth;

            if (scaledImgWidth < parentWidth) {
              this.moveX = (parentWidth - elementWidth * this.scale) / 2;
            } else {
              var imgOffsetLeft = (imgWidth - elementWidth) * this.scale / 2;

              if (this.moveX > imgOffsetLeft) {
                this.moveX = imgOffsetLeft;
              } else if (scaledImgWidth + Math.abs(imgOffsetLeft) - parentWidth + this.moveX < 0) {
                this.moveX = -(imgWidth * this.scale + Math.abs(imgOffsetLeft) - parentWidth);
              }
            }
          }
        }, {
          key: "setBasicStyles",
          value: function setBasicStyles() {
            this.element.style.display = 'flex';
            this.element.style.alignItems = 'center';
            this.element.style.justifyContent = 'center';
            this.element.style.transformOrigin = '0 0';
            this.setImageSize();
            this.setDraggableImage();
          }
        }, {
          key: "removeBasicStyles",
          value: function removeBasicStyles() {
            this.element.style.display = '';
            this.element.style.alignItems = '';
            this.element.style.justifyContent = '';
            this.element.style.transformOrigin = '';
            this.removeImageSize();
            this.removeDraggableImage();
          }
        }, {
          key: "setDraggableImage",
          value: function setDraggableImage() {
            var imgElement = this.getImageElement();

            if (imgElement) {
              imgElement.draggable = this.properties.draggableImage;
            }
          }
        }, {
          key: "removeDraggableImage",
          value: function removeDraggableImage() {
            var imgElement = this.getImageElement();

            if (imgElement) {
              imgElement.draggable = true;
            }
          }
        }, {
          key: "setImageSize",
          value: function setImageSize() {
            var imgElement = this.element.getElementsByTagName(this.elementTarget);

            if (imgElement.length) {
              imgElement[0].style.maxWidth = '100%';
              imgElement[0].style.maxHeight = '100%';
              this.setAutoHeight();
            }
          }
        }, {
          key: "setAutoHeight",
          value: function setAutoHeight() {
            var imgElement = this.element.getElementsByTagName(this.elementTarget);

            if (!this.properties.autoHeight || !imgElement.length) {
              return;
            }

            var imgNaturalWidth = imgElement[0].getAttribute("width");
            var imgNaturalHeight = imgElement[0].getAttribute("height");
            var sizeRatio = imgNaturalWidth / imgNaturalHeight;
            var parentWidth = this.parentElement.offsetWidth;
            imgElement[0].style.maxHeight = parentWidth / sizeRatio + "px";
          }
        }, {
          key: "removeImageSize",
          value: function removeImageSize() {
            var imgElement = this.element.getElementsByTagName(this.elementTarget);

            if (imgElement.length) {
              imgElement[0].style.maxWidth = '';
              imgElement[0].style.maxHeight = '';
            }
          }
        }, {
          key: "getElementPosition",
          value: function getElementPosition() {
            this.elementPosition = this.element.parentElement.getBoundingClientRect();
          }
        }, {
          key: "getTouchstartPosition",
          value: function getTouchstartPosition(event) {
            var _this$getClientPositi = this.getClientPosition(event),
                clientX = _this$getClientPositi.clientX,
                clientY = _this$getClientPositi.clientY;

            this.startX = clientX - this.elementPosition.left;
            this.startY = clientY - this.elementPosition.top;
          }
        }, {
          key: "getClientPosition",
          value: function getClientPosition(event) {
            var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            var clientX;
            var clientY;

            if (event.type === "touchstart" || event.type === "touchmove") {
              clientX = event.touches[index].clientX;
              clientY = event.touches[index].clientY;
            }

            if (event.type === "mousedown" || event.type === "mousemove") {
              clientX = event.clientX;
              clientY = event.clientY;
            }

            return {
              clientX: clientX,
              clientY: clientY
            };
          }
        }, {
          key: "resetScale",
          value: function resetScale() {
            this.scale = 1;
            this.moveX = 0;
            this.moveY = 0;
            this.updateInitialValues();
            this.transformElement(this.properties.transitionDuration);
          }
        }, {
          key: "updateInitialValues",
          value: function updateInitialValues() {
            this.initialScale = this.scale;
            this.initialMoveX = this.moveX;
            this.initialMoveY = this.moveY;
          }
        }, {
          key: "getDistance",
          value: function getDistance(touches) {
            return Math.sqrt(Math.pow(touches[0].pageX - touches[1].pageX, 2) + Math.pow(touches[0].pageY - touches[1].pageY, 2));
          }
        }, {
          key: "getImageHeight",
          value: function getImageHeight() {
            var img = this.element.getElementsByTagName(this.elementTarget)[0];
            return img.offsetHeight;
          }
        }, {
          key: "getImageWidth",
          value: function getImageWidth() {
            var img = this.element.getElementsByTagName(this.elementTarget)[0];
            return img.offsetWidth;
          }
        }, {
          key: "transformElement",
          value: function transformElement(duration) {
            this.element.style.transition = "all " + duration + "ms";
            this.element.style.transform = "matrix(" + Number(this.scale) + ", 0, 0, " + Number(this.scale) + ", " + Number(this.moveX) + ", " + Number(this.moveY) + ")";
          }
        }, {
          key: "isTouchScreen",
          value: function isTouchScreen() {
            var prefixes = ' -webkit- -moz- -o- -ms- '.split(' ');

            if ('ontouchstart' in window) {
              return true;
            } // include the 'heartz' as a way to have a non matching MQ to help terminate the join
            // https://git.io/vznFH


            var query = ['(', prefixes.join('touch-enabled),('), 'heartz', ')'].join('');
            return this.getMatchMedia(query);
          }
        }, {
          key: "getMatchMedia",
          value: function getMatchMedia(query) {
            return window.matchMedia(query).matches;
          }
        }, {
          key: "isDragging",
          value: function isDragging() {
            if (this.properties.disablePan) {
              return false;
            }

            var imgHeight = this.getImageHeight();
            var imgWidth = this.getImageWidth();

            if (this.scale > 1) {
              return imgHeight * this.scale > this.parentElement.offsetHeight || imgWidth * this.scale > this.parentElement.offsetWidth;
            }

            if (this.scale === 1) {
              return imgHeight > this.parentElement.offsetHeight || imgWidth > this.parentElement.offsetWidth;
            }

            return undefined;
          }
        }, {
          key: "detectLimitZoom",
          value: function detectLimitZoom() {
            this.maxScale = this.defaultMaxScale;

            if (this.properties.limitZoom === "original image size" && this.elementTarget === "IMG") {
              // We are waiting for the element with the image to be available
              this.pollLimitZoomForOriginalImage();
            }
          }
        }, {
          key: "pollLimitZoomForOriginalImage",
          value: function pollLimitZoomForOriginalImage() {
            var _this4 = this;

            var poll = setInterval(function () {
              var maxScaleForOriginalImage = _this4.getMaxScaleForOriginalImage();

              if (typeof maxScaleForOriginalImage === 'number') {
                _this4.maxScale = maxScaleForOriginalImage;
                clearInterval(poll);
              }
            }, 10);
          }
        }, {
          key: "getMaxScaleForOriginalImage",
          value: function getMaxScaleForOriginalImage() {
            var maxScale;
            var img = this.element.getElementsByTagName("img")[0];

            if (img.naturalWidth && img.offsetWidth) {
              maxScale = img.naturalWidth / img.offsetWidth;
            }

            return maxScale;
          }
        }, {
          key: "getImageElement",
          value: function getImageElement() {
            var imgElement = this.element.getElementsByTagName(this.elementTarget);

            if (imgElement.length) {
              return imgElement[0];
            }
          }
        }, {
          key: "toggleZoom",
          value: function toggleZoom() {
            var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

            if (this.initialScale === 1) {
              if (event && event.changedTouches) {
                if (this.properties.doubleTapScale === undefined) {
                  return;
                }

                var changedTouches = event.changedTouches;
                this.scale = this.initialScale * this.properties.doubleTapScale;
                this.moveX = this.initialMoveX - (changedTouches[0].clientX - this.elementPosition.left) * (this.properties.doubleTapScale - 1);
                this.moveY = this.initialMoveY - (changedTouches[0].clientY - this.elementPosition.top) * (this.properties.doubleTapScale - 1);
              } else {
                var zoomControlScale = this.properties.zoomControlScale || 0;
                this.scale = this.initialScale * (zoomControlScale + 1);
                this.moveX = this.initialMoveX - this.element.offsetWidth * (this.scale - 1) / 2;
                this.moveY = this.initialMoveY - this.element.offsetHeight * (this.scale - 1) / 2;
              }

              this.centeringImage();
              this.updateInitialValues();
              this.transformElement(this.properties.transitionDuration);
            } else {
              this.resetScale();
            }
          }
        }, {
          key: "setZoom",
          value: function setZoom(properties) {
            this.scale = properties.scale;
            var xCenter;
            var yCenter;
            var visibleAreaWidth = this.element.offsetWidth;
            var visibleAreaHeight = this.element.offsetHeight;
            var scalingPercent = visibleAreaWidth * this.scale / (visibleAreaWidth * this.initialScale);

            if (properties.center) {
              xCenter = properties.center[0];
              yCenter = properties.center[1];
            } else {
              xCenter = visibleAreaWidth / 2 - this.initialMoveX;
              yCenter = visibleAreaHeight / 2 - this.initialMoveY;
            }

            this.moveX = this.initialMoveX - (scalingPercent * xCenter - xCenter);
            this.moveY = this.initialMoveY - (scalingPercent * yCenter - yCenter);
            this.centeringImage();
            this.updateInitialValues();
            this.transformElement(this.properties.transitionDuration);
          }
        }, {
          key: "alignImage",
          value: function alignImage() {
            var isMoveChanged = this.centeringImage();

            if (isMoveChanged) {
              this.updateInitialValues();
              this.transformElement(this.properties.transitionDuration);
            }
          }
        }, {
          key: "destroy",
          value: function destroy() {
            this.removeBasicStyles();
            this.touches.destroy();
          }
        }, {
          key: "getPropertiesValue",
          value: function getPropertiesValue(propertyName) {
            if (this.properties && this.properties[propertyName]) {
              return this.properties[propertyName];
            } else {
              return defaultProperties[propertyName];
            }
          }
        }]);

        return IvyPinch;
      }();

      var _defaultComponentProperties = {
        overflow: "hidden",
        disableZoomControl: "auto",
        backgroundColor: "rgba(0,0,0,0.85)"
      };

      var PinchZoomComponent = /*#__PURE__*/function () {
        function PinchZoomComponent(elementRef) {
          _classCallCheck(this, PinchZoomComponent);

          this.elementRef = elementRef;
          this.defaultComponentProperties = this.getDefaultComponentProperties();
          this.applyPropertiesDefault(this.defaultComponentProperties, {});
        }

        _createClass(PinchZoomComponent, [{
          key: "properties",
          get: function get() {
            return this._properties;
          } // transitionDuration
          ,
          set: function set(value) {
            if (value) {
              this._properties = value;
            }
          }
        }, {
          key: "transitionDurationBackwardCompatibility",
          set: function set(value) {
            if (value) {
              this._transitionDuration = value;
            }
          }
        }, {
          key: "transitionDuration",
          get: function get() {
            return this._transitionDuration;
          } // doubleTap
          ,
          set: function set(value) {
            if (value) {
              this._transitionDuration = value;
            }
          }
        }, {
          key: "doubleTapBackwardCompatibility",
          set: function set(value) {
            if (value) {
              this._doubleTap = value;
            }
          }
        }, {
          key: "doubleTap",
          get: function get() {
            return this._doubleTap;
          } // doubleTapScale
          ,
          set: function set(value) {
            if (value) {
              this._doubleTap = value;
            }
          }
        }, {
          key: "doubleTapScaleBackwardCompatibility",
          set: function set(value) {
            if (value) {
              this._doubleTapScale = value;
            }
          }
        }, {
          key: "doubleTapScale",
          get: function get() {
            return this._doubleTapScale;
          } // autoZoomOut
          ,
          set: function set(value) {
            if (value) {
              this._doubleTapScale = value;
            }
          }
        }, {
          key: "autoZoomOutBackwardCompatibility",
          set: function set(value) {
            if (value) {
              this._autoZoomOut = value;
            }
          }
        }, {
          key: "autoZoomOut",
          get: function get() {
            return this._autoZoomOut;
          } // limitZoom
          ,
          set: function set(value) {
            if (value) {
              this._autoZoomOut = value;
            }
          }
        }, {
          key: "limitZoomBackwardCompatibility",
          set: function set(value) {
            if (value) {
              this._limitZoom = value;
            }
          }
        }, {
          key: "limitZoom",
          get: function get() {
            return this._limitZoom;
          },
          set: function set(value) {
            if (value) {
              this._limitZoom = value;
            }
          }
        }, {
          key: "hostOverflow",
          get: function get() {
            return this.properties['overflow'];
          }
        }, {
          key: "hostBackgroundColor",
          get: function get() {
            return this.properties['backgroundColor'];
          }
        }, {
          key: "isTouchScreen",
          get: function get() {
            var prefixes = ' -webkit- -moz- -o- -ms- '.split(' ');

            var mq = function mq(query) {
              return window.matchMedia(query).matches;
            };

            if ('ontouchstart' in window) {
              return true;
            } // include the 'heartz' as a way to have a non matching MQ to help terminate the join
            // https://git.io/vznFH


            var query = ['(', prefixes.join('touch-enabled),('), 'heartz', ')'].join('');
            return mq(query);
          }
        }, {
          key: "isDragging",
          get: function get() {
            return this.pinchZoom ? this.pinchZoom.isDragging() : undefined;
          }
        }, {
          key: "isDisabled",
          get: function get() {
            return this.properties['disabled'];
          }
        }, {
          key: "scale",
          get: function get() {
            return this.pinchZoom.scale;
          }
        }, {
          key: "isZoomedIn",
          get: function get() {
            return this.scale > 1;
          }
        }, {
          key: "scaleLevel",
          get: function get() {
            return Math.round(this.scale / this._zoomControlScale);
          }
        }, {
          key: "maxScale",
          get: function get() {
            return this.pinchZoom.maxScale;
          }
        }, {
          key: "isZoomLimitReached",
          get: function get() {
            return this.scale >= this.maxScale;
          }
        }, {
          key: "_zoomControlScale",
          get: function get() {
            return this.getPropertiesValue('zoomControlScale');
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.initPinchZoom();
            /* Calls the method until the image size is available */

            this.detectLimitZoom();
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            var changedProperties = this.getProperties(changes);
            changedProperties = this.renameProperties(changedProperties);
            this.applyPropertiesDefault(this.defaultComponentProperties, changedProperties);
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.destroy();
          }
        }, {
          key: "initPinchZoom",
          value: function initPinchZoom() {
            if (this.properties['disabled']) {
              return;
            }

            this.properties['element'] = this.elementRef.nativeElement.querySelector('.pinch-zoom-content');
            this.pinchZoom = new IvyPinch(this.properties);
          }
        }, {
          key: "getProperties",
          value: function getProperties(changes) {
            var properties = {};

            for (var prop in changes) {
              if (prop !== 'properties') {
                properties[prop] = changes[prop].currentValue;
              }

              if (prop === 'properties') {
                properties = changes[prop].currentValue;
              }
            }

            return properties;
          }
        }, {
          key: "renameProperties",
          value: function renameProperties(properties) {
            for (var prop in properties) {
              if (backwardCompatibilityProperties[prop]) {
                properties[backwardCompatibilityProperties[prop]] = properties[prop];
                delete properties[prop];
              }
            }

            return properties;
          }
        }, {
          key: "applyPropertiesDefault",
          value: function applyPropertiesDefault(defaultProperties, properties) {
            this.properties = Object.assign({}, defaultProperties, properties);
          }
        }, {
          key: "toggleZoom",
          value: function toggleZoom() {
            this.pinchZoom.toggleZoom();
          }
        }, {
          key: "isControl",
          value: function isControl() {
            if (this.isDisabled) {
              return false;
            }

            if (this.properties['disableZoomControl'] === "disable") {
              return false;
            }

            if (this.isTouchScreen && this.properties['disableZoomControl'] === "auto") {
              return false;
            }

            return true;
          }
        }, {
          key: "detectLimitZoom",
          value: function detectLimitZoom() {
            if (this.pinchZoom) {
              this.pinchZoom.detectLimitZoom();
            }
          }
        }, {
          key: "destroy",
          value: function destroy() {
            this.pinchZoom.destroy();
          }
        }, {
          key: "getPropertiesValue",
          value: function getPropertiesValue(propertyName) {
            if (this.properties && this.properties[propertyName]) {
              return this.properties[propertyName];
            } else {
              return this.defaultComponentProperties[propertyName];
            }
          }
        }, {
          key: "getDefaultComponentProperties",
          value: function getDefaultComponentProperties() {
            return Object.assign(Object.assign({}, defaultProperties), _defaultComponentProperties);
          }
        }]);

        return PinchZoomComponent;
      }();

      PinchZoomComponent.ɵfac = function PinchZoomComponent_Factory(t) {
        return new (t || PinchZoomComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
      };

      PinchZoomComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: PinchZoomComponent,
        selectors: [["pinch-zoom"], ["", "pinch-zoom", ""]],
        hostVars: 4,
        hostBindings: function PinchZoomComponent_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("overflow", ctx.hostOverflow)("background-color", ctx.hostBackgroundColor);
          }
        },
        inputs: {
          properties: "properties",
          transitionDurationBackwardCompatibility: ["transition-duration", "transitionDurationBackwardCompatibility"],
          transitionDuration: "transitionDuration",
          doubleTapBackwardCompatibility: ["double-tap", "doubleTapBackwardCompatibility"],
          doubleTap: "doubleTap",
          doubleTapScaleBackwardCompatibility: ["double-tap-scale", "doubleTapScaleBackwardCompatibility"],
          doubleTapScale: "doubleTapScale",
          autoZoomOutBackwardCompatibility: ["auto-zoom-out", "autoZoomOutBackwardCompatibility"],
          autoZoomOut: "autoZoomOut",
          limitZoomBackwardCompatibility: ["limit-zoom", "limitZoomBackwardCompatibility"],
          limitZoom: "limitZoom",
          disabled: "disabled",
          disablePan: "disablePan",
          overflow: "overflow",
          zoomControlScale: "zoomControlScale",
          disableZoomControl: "disableZoomControl",
          backgroundColor: "backgroundColor",
          limitPan: "limitPan",
          minPanScale: "minPanScale",
          minScale: "minScale",
          listeners: "listeners",
          wheel: "wheel",
          autoHeight: "autoHeight",
          wheelZoomFactor: "wheelZoomFactor",
          draggableImage: "draggableImage"
        },
        exportAs: ["pinchZoom"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
        ngContentSelectors: _c0,
        decls: 3,
        vars: 3,
        consts: [[1, "pinch-zoom-content"], ["class", "pz-zoom-button pz-zoom-control-position-bottom", 3, "pz-zoom-button-out", "click", 4, "ngIf"], [1, "pz-zoom-button", "pz-zoom-control-position-bottom", 3, "click"]],
        template: function PinchZoomComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PinchZoomComponent_div_2_Template, 1, 2, "div", 1);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("pz-dragging", ctx.isDragging);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isControl());
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]],
        styles: ["[_nghost-%COMP%]{display:block;overflow:hidden;position:relative}.pinch-zoom-content[_ngcontent-%COMP%]{height:inherit}.pz-dragging[_ngcontent-%COMP%]{cursor:all-scroll}.pz-zoom-button[_ngcontent-%COMP%]{-webkit-user-select:none;background-color:rgba(0,0,0,.8);background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgc3R5bGU9IiI+PHJlY3QgaWQ9ImJhY2tncm91bmRyZWN0IiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4PSIwIiB5PSIwIiBmaWxsPSJub25lIiBzdHJva2U9Im5vbmUiLz48ZyBjbGFzcz0iY3VycmVudExheWVyIiBzdHlsZT0iIj48dGl0bGU+TGF5ZXIgMTwvdGl0bGU+PHBhdGggZD0iTTE1LjUgMTRoLS43OWwtLjI4LS4yN0MxNS40MSAxMi41OSAxNiAxMS4xMSAxNiA5LjUgMTYgNS45MSAxMy4wOSAzIDkuNSAzUzMgNS45MSAzIDkuNSA1LjkxIDE2IDkuNSAxNmMxLjYxIDAgMy4wOS0uNTkgNC4yMy0xLjU3bC4yNy4yOHYuNzlsNSA0Ljk5TDIwLjQ5IDE5bC00Ljk5LTV6bS02IDBDNy4wMSAxNCA1IDExLjk5IDUgOS41UzcuMDEgNSA5LjUgNSAxNCA3LjAxIDE0IDkuNSAxMS45OSAxNCA5LjUgMTR6IiBpZD0ic3ZnXzEiIGNsYXNzPSIiIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMSIvPjxwYXRoIGQ9Ik0xMiAxMGgtMnYySDl2LTJIN1Y5aDJWN2gxdjJoMnYxeiIgaWQ9InN2Z18zIiBjbGFzcz0iIiBmaWxsPSIjZmZmZmZmIiBmaWxsLW9wYWNpdHk9IjEiLz48L2c+PC9zdmc+),url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+PHJlY3QgaWQ9ImJhY2tncm91bmRyZWN0IiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4PSIwIiB5PSIwIiBmaWxsPSJub25lIiBzdHJva2U9Im5vbmUiLz48ZyBjbGFzcz0iY3VycmVudExheWVyIiBzdHlsZT0iIj48dGl0bGU+TGF5ZXIgMTwvdGl0bGU+PHBhdGggZD0iTTE1LjUgMTRoLS43OWwtLjI4LS4yN0MxNS40MSAxMi41OSAxNiAxMS4xMSAxNiA5LjUgMTYgNS45MSAxMy4wOSAzIDkuNSAzUzMgNS45MSAzIDkuNSA1LjkxIDE2IDkuNSAxNmMxLjYxIDAgMy4wOS0uNTkgNC4yMy0xLjU3bC4yNy4yOHYuNzlsNSA0Ljk5TDIwLjQ5IDE5bC00Ljk5LTV6bS02IDBDNy4wMSAxNCA1IDExLjk5IDUgOS41UzcuMDEgNSA5LjUgNSAxNCA3LjAxIDE0IDkuNSAxMS45OSAxNCA5LjUgMTR6TTcgOWg1djFIN3oiIGlkPSJzdmdfMiIgY2xhc3M9IiIgZmlsbD0iI2ZmZmZmZiIgZmlsbC1vcGFjaXR5PSIxIi8+PC9nPjwvc3ZnPg==);background-position:50%,-1000px;background-repeat:no-repeat,no-repeat;background-size:40px;border-radius:4px;color:#fff;cursor:pointer;height:56px;opacity:.5;position:absolute;transition:opacity .1s;user-select:none;width:56px;z-index:1000}.pz-zoom-button-out[_ngcontent-%COMP%]{background-position:-1000px,50%}.pz-zoom-button[_ngcontent-%COMP%]:hover{opacity:.7}.pz-zoom-button.pz-zoom-control-position-right[_ngcontent-%COMP%]{margin-top:-28px;right:16px;top:50%}.pz-zoom-button.pz-zoom-control-position-right-bottom[_ngcontent-%COMP%]{bottom:32px;right:16px}.pz-zoom-button.pz-zoom-control-position-bottom[_ngcontent-%COMP%]{bottom:16px;left:50%;margin-left:-28px}.pz-zoom-control[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.8);border-radius:4px;overflow:hidden;position:absolute}.pz-zoom-control.pz-zoom-control-position-right[_ngcontent-%COMP%]{margin-top:-48px;right:16px;top:50%}.pz-zoom-control.pz-zoom-control-position-right-bottom[_ngcontent-%COMP%]{bottom:32px;right:16px}.pz-zoom-control.pz-zoom-control-position-bottom[_ngcontent-%COMP%]{bottom:16px;left:50%;margin-left:-48px}.pz-zoom-in[_ngcontent-%COMP%], .pz-zoom-out[_ngcontent-%COMP%]{background-position:50%;background-repeat:no-repeat;cursor:pointer;height:48px;opacity:1;width:48px}.pz-zoom-in[_ngcontent-%COMP%]:hover, .pz-zoom-out[_ngcontent-%COMP%]:hover{background-color:hsla(0,0%,100%,.2)}.pz-zoom-control-position-bottom[_ngcontent-%COMP%]   .pz-zoom-in[_ngcontent-%COMP%], .pz-zoom-control-position-bottom[_ngcontent-%COMP%]   .pz-zoom-out[_ngcontent-%COMP%]{float:right}.pz-disabled[_ngcontent-%COMP%]{cursor:default;opacity:.5}.pz-disabled[_ngcontent-%COMP%]:hover{background-color:hsla(0,0%,100%,0)}.pz-zoom-in[_ngcontent-%COMP%]{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgc3R5bGU9IiI+PHJlY3QgaWQ9ImJhY2tncm91bmRyZWN0IiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4PSIwIiB5PSIwIiBmaWxsPSJub25lIiBzdHJva2U9Im5vbmUiLz48ZyBjbGFzcz0iY3VycmVudExheWVyIiBzdHlsZT0iIj48dGl0bGU+TGF5ZXIgMTwvdGl0bGU+PHBhdGggZD0iTTE5IDEzaC02djZoLTJ2LTZINXYtMmg2VjVoMnY2aDZ2MnoiIGlkPSJzdmdfMSIgY2xhc3M9IiIgc3Ryb2tlPSJub25lIiBmaWxsPSIjZmZmZmZmIiBmaWxsLW9wYWNpdHk9IjEiLz48cGF0aCBkPSJNLTE1LjgzNjczNDQyMDQ2MTY1Myw0NC41MzU0MDkzMDY3MTAxOCBoNTguMjA0MDgwODI3NTkzMDkgdi02LjU3NjIyNjcyMzM2OTIyMTUgSC0xNS44MzY3MzQ0MjA0NjE2NTMgeiIgZmlsbD0ibm9uZSIgaWQ9InN2Z18yIiBjbGFzcz0iIiBzdHJva2U9Im5vbmUiLz48L2c+PC9zdmc+)}.pz-zoom-out[_ngcontent-%COMP%]{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+PHJlY3QgaWQ9ImJhY2tncm91bmRyZWN0IiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4PSIwIiB5PSIwIiBmaWxsPSJub25lIiBzdHJva2U9Im5vbmUiLz48ZyBjbGFzcz0iY3VycmVudExheWVyIiBzdHlsZT0iIj48dGl0bGU+TGF5ZXIgMTwvdGl0bGU+PHBhdGggZD0iTTE5IDEzSDV2LTJoMTR2MnoiIGlkPSJzdmdfMSIgY2xhc3M9IiIgZmlsbD0iI2ZmZmZmZiIgZmlsbC1vcGFjaXR5PSIxIi8+PC9nPjwvc3ZnPg==)}"]
      });

      PinchZoomComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }];
      };

      PinchZoomComponent.propDecorators = {
        properties: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['properties']
        }],
        transitionDurationBackwardCompatibility: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['transition-duration']
        }],
        transitionDuration: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['transitionDuration']
        }],
        doubleTapBackwardCompatibility: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['double-tap']
        }],
        doubleTap: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['doubleTap']
        }],
        doubleTapScaleBackwardCompatibility: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['double-tap-scale']
        }],
        doubleTapScale: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['doubleTapScale']
        }],
        autoZoomOutBackwardCompatibility: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['auto-zoom-out']
        }],
        autoZoomOut: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['autoZoomOut']
        }],
        limitZoomBackwardCompatibility: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['limit-zoom']
        }],
        limitZoom: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['limitZoom']
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        disablePan: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        overflow: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        zoomControlScale: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        disableZoomControl: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        backgroundColor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        limitPan: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        minPanScale: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        minScale: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        listeners: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        wheel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        autoHeight: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        wheelZoomFactor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        draggableImage: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        hostOverflow: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['style.overflow']
        }],
        hostBackgroundColor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['style.background-color']
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PinchZoomComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'pinch-zoom, [pinch-zoom]',
            exportAs: 'pinchZoom',
            template: "<div class=\"pinch-zoom-content\" [class.pz-dragging]=\"isDragging\">\n\t<ng-content></ng-content>\n</div>\n\n<!-- Control: one button -->\n<div class=\"pz-zoom-button pz-zoom-control-position-bottom\" \n\t[class.pz-zoom-button-out]=\"isZoomedIn\" \n\t*ngIf=\"isControl()\" \n\t(click)=\"toggleZoom()\"></div>",
            styles: [":host{display:block;overflow:hidden;position:relative}.pinch-zoom-content{height:inherit}.pz-dragging{cursor:all-scroll}.pz-zoom-button{-webkit-user-select:none;background-color:rgba(0,0,0,.8);background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgc3R5bGU9IiI+PHJlY3QgaWQ9ImJhY2tncm91bmRyZWN0IiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4PSIwIiB5PSIwIiBmaWxsPSJub25lIiBzdHJva2U9Im5vbmUiLz48ZyBjbGFzcz0iY3VycmVudExheWVyIiBzdHlsZT0iIj48dGl0bGU+TGF5ZXIgMTwvdGl0bGU+PHBhdGggZD0iTTE1LjUgMTRoLS43OWwtLjI4LS4yN0MxNS40MSAxMi41OSAxNiAxMS4xMSAxNiA5LjUgMTYgNS45MSAxMy4wOSAzIDkuNSAzUzMgNS45MSAzIDkuNSA1LjkxIDE2IDkuNSAxNmMxLjYxIDAgMy4wOS0uNTkgNC4yMy0xLjU3bC4yNy4yOHYuNzlsNSA0Ljk5TDIwLjQ5IDE5bC00Ljk5LTV6bS02IDBDNy4wMSAxNCA1IDExLjk5IDUgOS41UzcuMDEgNSA5LjUgNSAxNCA3LjAxIDE0IDkuNSAxMS45OSAxNCA5LjUgMTR6IiBpZD0ic3ZnXzEiIGNsYXNzPSIiIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMSIvPjxwYXRoIGQ9Ik0xMiAxMGgtMnYySDl2LTJIN1Y5aDJWN2gxdjJoMnYxeiIgaWQ9InN2Z18zIiBjbGFzcz0iIiBmaWxsPSIjZmZmZmZmIiBmaWxsLW9wYWNpdHk9IjEiLz48L2c+PC9zdmc+),url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+PHJlY3QgaWQ9ImJhY2tncm91bmRyZWN0IiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4PSIwIiB5PSIwIiBmaWxsPSJub25lIiBzdHJva2U9Im5vbmUiLz48ZyBjbGFzcz0iY3VycmVudExheWVyIiBzdHlsZT0iIj48dGl0bGU+TGF5ZXIgMTwvdGl0bGU+PHBhdGggZD0iTTE1LjUgMTRoLS43OWwtLjI4LS4yN0MxNS40MSAxMi41OSAxNiAxMS4xMSAxNiA5LjUgMTYgNS45MSAxMy4wOSAzIDkuNSAzUzMgNS45MSAzIDkuNSA1LjkxIDE2IDkuNSAxNmMxLjYxIDAgMy4wOS0uNTkgNC4yMy0xLjU3bC4yNy4yOHYuNzlsNSA0Ljk5TDIwLjQ5IDE5bC00Ljk5LTV6bS02IDBDNy4wMSAxNCA1IDExLjk5IDUgOS41UzcuMDEgNSA5LjUgNSAxNCA3LjAxIDE0IDkuNSAxMS45OSAxNCA5LjUgMTR6TTcgOWg1djFIN3oiIGlkPSJzdmdfMiIgY2xhc3M9IiIgZmlsbD0iI2ZmZmZmZiIgZmlsbC1vcGFjaXR5PSIxIi8+PC9nPjwvc3ZnPg==);background-position:50%,-1000px;background-repeat:no-repeat,no-repeat;background-size:40px;border-radius:4px;color:#fff;cursor:pointer;height:56px;opacity:.5;position:absolute;transition:opacity .1s;user-select:none;width:56px;z-index:1000}.pz-zoom-button-out{background-position:-1000px,50%}.pz-zoom-button:hover{opacity:.7}.pz-zoom-button.pz-zoom-control-position-right{margin-top:-28px;right:16px;top:50%}.pz-zoom-button.pz-zoom-control-position-right-bottom{bottom:32px;right:16px}.pz-zoom-button.pz-zoom-control-position-bottom{bottom:16px;left:50%;margin-left:-28px}.pz-zoom-control{background-color:rgba(0,0,0,.8);border-radius:4px;overflow:hidden;position:absolute}.pz-zoom-control.pz-zoom-control-position-right{margin-top:-48px;right:16px;top:50%}.pz-zoom-control.pz-zoom-control-position-right-bottom{bottom:32px;right:16px}.pz-zoom-control.pz-zoom-control-position-bottom{bottom:16px;left:50%;margin-left:-48px}.pz-zoom-in,.pz-zoom-out{background-position:50%;background-repeat:no-repeat;cursor:pointer;height:48px;opacity:1;width:48px}.pz-zoom-in:hover,.pz-zoom-out:hover{background-color:hsla(0,0%,100%,.2)}.pz-zoom-control-position-bottom .pz-zoom-in,.pz-zoom-control-position-bottom .pz-zoom-out{float:right}.pz-disabled{cursor:default;opacity:.5}.pz-disabled:hover{background-color:hsla(0,0%,100%,0)}.pz-zoom-in{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgc3R5bGU9IiI+PHJlY3QgaWQ9ImJhY2tncm91bmRyZWN0IiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4PSIwIiB5PSIwIiBmaWxsPSJub25lIiBzdHJva2U9Im5vbmUiLz48ZyBjbGFzcz0iY3VycmVudExheWVyIiBzdHlsZT0iIj48dGl0bGU+TGF5ZXIgMTwvdGl0bGU+PHBhdGggZD0iTTE5IDEzaC02djZoLTJ2LTZINXYtMmg2VjVoMnY2aDZ2MnoiIGlkPSJzdmdfMSIgY2xhc3M9IiIgc3Ryb2tlPSJub25lIiBmaWxsPSIjZmZmZmZmIiBmaWxsLW9wYWNpdHk9IjEiLz48cGF0aCBkPSJNLTE1LjgzNjczNDQyMDQ2MTY1Myw0NC41MzU0MDkzMDY3MTAxOCBoNTguMjA0MDgwODI3NTkzMDkgdi02LjU3NjIyNjcyMzM2OTIyMTUgSC0xNS44MzY3MzQ0MjA0NjE2NTMgeiIgZmlsbD0ibm9uZSIgaWQ9InN2Z18yIiBjbGFzcz0iIiBzdHJva2U9Im5vbmUiLz48L2c+PC9zdmc+)}.pz-zoom-out{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+PHJlY3QgaWQ9ImJhY2tncm91bmRyZWN0IiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4PSIwIiB5PSIwIiBmaWxsPSJub25lIiBzdHJva2U9Im5vbmUiLz48ZyBjbGFzcz0iY3VycmVudExheWVyIiBzdHlsZT0iIj48dGl0bGU+TGF5ZXIgMTwvdGl0bGU+PHBhdGggZD0iTTE5IDEzSDV2LTJoMTR2MnoiIGlkPSJzdmdfMSIgY2xhc3M9IiIgZmlsbD0iI2ZmZmZmZiIgZmlsbC1vcGFjaXR5PSIxIi8+PC9nPjwvc3ZnPg==)}"]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }];
        }, {
          properties: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['properties']
          }],
          transitionDurationBackwardCompatibility: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['transition-duration']
          }],
          transitionDuration: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['transitionDuration']
          }],
          doubleTapBackwardCompatibility: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['double-tap']
          }],
          doubleTap: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['doubleTap']
          }],
          doubleTapScaleBackwardCompatibility: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['double-tap-scale']
          }],
          doubleTapScale: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['doubleTapScale']
          }],
          autoZoomOutBackwardCompatibility: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['auto-zoom-out']
          }],
          autoZoomOut: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['autoZoomOut']
          }],
          limitZoomBackwardCompatibility: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['limit-zoom']
          }],
          limitZoom: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['limitZoom']
          }],
          hostOverflow: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['style.overflow']
          }],
          hostBackgroundColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['style.background-color']
          }],
          disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          disablePan: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          overflow: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          zoomControlScale: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          disableZoomControl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          backgroundColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          limitPan: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          minPanScale: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          minScale: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          listeners: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          wheel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          autoHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          wheelZoomFactor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          draggableImage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();

      var PinchZoomModule = function PinchZoomModule() {
        _classCallCheck(this, PinchZoomModule);
      };

      PinchZoomModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: PinchZoomModule
      });
      PinchZoomModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function PinchZoomModule_Factory(t) {
          return new (t || PinchZoomModule)();
        },
        providers: [],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PinchZoomModule, {
          declarations: function declarations() {
            return [PinchZoomComponent];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]];
          },
          exports: function exports() {
            return [PinchZoomComponent];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PinchZoomModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [PinchZoomComponent],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            exports: [PinchZoomComponent],
            providers: [],
            bootstrap: [],
            entryComponents: [PinchZoomComponent]
          }]
        }], null, null);
      })();
      /*
       * Public API Surface of ngx-pinch-zoom
       */

      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=ngx-pinch-zoom.js.map

      /***/

    },

    /***/
    "./src/app/home-page/container/home-page.component.ts":
    /*!************************************************************!*\
      !*** ./src/app/home-page/container/home-page.component.ts ***!
      \************************************************************/

    /*! exports provided: HomePageComponent */

    /***/
    function srcAppHomePageContainerHomePageComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomePageComponent", function () {
        return HomePageComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var ngx_pinch_zoom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ngx-pinch-zoom */
      "./node_modules/ngx-pinch-zoom/__ivy_ngcc__/fesm2015/ngx-pinch-zoom.js");

      var _c0 = ["myPinch"];

      var HomePageComponent = /*#__PURE__*/function () {
        function HomePageComponent() {
          _classCallCheck(this, HomePageComponent);

          this.myFullresImage = "assets/CV.jpg";
          this.imgWidth = "900px";
        }

        _createClass(HomePageComponent, [{
          key: "zoomIn",
          value: function zoomIn() {
            this.myPinch.zoomIn();
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return HomePageComponent;
      }();

      HomePageComponent.ɵfac = function HomePageComponent_Factory(t) {
        return new (t || HomePageComponent)();
      };

      HomePageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HomePageComponent,
        selectors: [["app-home-page"]],
        viewQuery: function HomePageComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.myPinch = _t.first);
          }
        },
        decls: 3,
        vars: 1,
        consts: [[1, "cv-container"], ["listeners", "mouse and touch", 1, "pinch-zoom", 3, "wheel"], ["src", "./assets/CV.jpg", "alt", "CV", 1, "portfolio"]],
        template: function HomePageComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "pinch-zoom", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("wheel", false);
          }
        },
        directives: [ngx_pinch_zoom__WEBPACK_IMPORTED_MODULE_1__["PinchZoomComponent"]],
        styles: ["div.cv-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\ndiv.cv-container[_ngcontent-%COMP%]   .pinch-zoom[_ngcontent-%COMP%] {\n  margin-top: 10vh;\n  max-width: 80vw;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS1wYWdlL2NvbnRhaW5lci9ob21lLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUNEO0FBQUM7RUFDQyxnQkFBQTtFQUNBLGVBQUE7QUFFRiIsImZpbGUiOiJzcmMvYXBwL2hvbWUtcGFnZS9jb250YWluZXIvaG9tZS1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2LmN2LWNvbnRhaW5lciB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHQucGluY2gtem9vbSB7XG5cdFx0bWFyZ2luLXRvcDogMTB2aDtcblx0XHRtYXgtd2lkdGg6IDgwdnc7XG5cdH1cbn1cbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomePageComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: "app-home-page",
            templateUrl: "./home-page.component.html",
            styleUrls: ["./home-page.component.scss"]
          }]
        }], function () {
          return [];
        }, {
          myPinch: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["myPinch", {
              "static": false
            }]
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/home-page/home-page-routing.module.ts":
    /*!*******************************************************!*\
      !*** ./src/app/home-page/home-page-routing.module.ts ***!
      \*******************************************************/

    /*! exports provided: HomePageRoutingModule */

    /***/
    function srcAppHomePageHomePageRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function () {
        return HomePageRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _container_home_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./container/home-page.component */
      "./src/app/home-page/container/home-page.component.ts");

      var routes = [{
        path: "",
        component: _container_home_page_component__WEBPACK_IMPORTED_MODULE_2__["HomePageComponent"],
        children: [{
          path: "login",
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | login-page-login-page-module */
            "login-page-login-page-module").then(__webpack_require__.bind(null,
            /*! ../login-page/login-page.module */
            "./src/app/login-page/login-page.module.ts")).then(function (m) {
              return m.LoginPageModule;
            });
          }
        }]
      }];

      var HomePageRoutingModule = function HomePageRoutingModule() {
        _classCallCheck(this, HomePageRoutingModule);
      };

      HomePageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: HomePageRoutingModule
      });
      HomePageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function HomePageRoutingModule_Factory(t) {
          return new (t || HomePageRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HomePageRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomePageRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [],
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/home-page/home-page.module.ts":
    /*!***********************************************!*\
      !*** ./src/app/home-page/home-page.module.ts ***!
      \***********************************************/

    /*! exports provided: HomePageModule */

    /***/
    function srcAppHomePageHomePageModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomePageModule", function () {
        return HomePageModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _home_page_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./home-page-routing.module */
      "./src/app/home-page/home-page-routing.module.ts");
      /* harmony import */


      var _shared_modules_custom_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../shared/modules/custom-material.module */
      "./src/app/shared/modules/custom-material.module.ts");
      /* harmony import */


      var _container_home_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./container/home-page.component */
      "./src/app/home-page/container/home-page.component.ts");
      /* harmony import */


      var _guards_home_page_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./guards/home-page.guard */
      "./src/app/home-page/guards/home-page.guard.ts");
      /* harmony import */


      var ngx_pinch_zoom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-pinch-zoom */
      "./node_modules/ngx-pinch-zoom/__ivy_ngcc__/fesm2015/ngx-pinch-zoom.js");

      var HomePageModule = function HomePageModule() {
        _classCallCheck(this, HomePageModule);
      };

      HomePageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: HomePageModule
      });
      HomePageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function HomePageModule_Factory(t) {
          return new (t || HomePageModule)();
        },
        providers: [_guards_home_page_guard__WEBPACK_IMPORTED_MODULE_5__["HomePageGuard"]],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _home_page_routing_module__WEBPACK_IMPORTED_MODULE_2__["HomePageRoutingModule"], _shared_modules_custom_material_module__WEBPACK_IMPORTED_MODULE_3__["CustomMaterialModule"], _home_page_routing_module__WEBPACK_IMPORTED_MODULE_2__["HomePageRoutingModule"], ngx_pinch_zoom__WEBPACK_IMPORTED_MODULE_6__["PinchZoomModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HomePageModule, {
          declarations: [_container_home_page_component__WEBPACK_IMPORTED_MODULE_4__["HomePageComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _home_page_routing_module__WEBPACK_IMPORTED_MODULE_2__["HomePageRoutingModule"], _shared_modules_custom_material_module__WEBPACK_IMPORTED_MODULE_3__["CustomMaterialModule"], _home_page_routing_module__WEBPACK_IMPORTED_MODULE_2__["HomePageRoutingModule"], ngx_pinch_zoom__WEBPACK_IMPORTED_MODULE_6__["PinchZoomModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomePageModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_container_home_page_component__WEBPACK_IMPORTED_MODULE_4__["HomePageComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _home_page_routing_module__WEBPACK_IMPORTED_MODULE_2__["HomePageRoutingModule"], _shared_modules_custom_material_module__WEBPACK_IMPORTED_MODULE_3__["CustomMaterialModule"], _home_page_routing_module__WEBPACK_IMPORTED_MODULE_2__["HomePageRoutingModule"], ngx_pinch_zoom__WEBPACK_IMPORTED_MODULE_6__["PinchZoomModule"]],
            providers: [_guards_home_page_guard__WEBPACK_IMPORTED_MODULE_5__["HomePageGuard"]]
          }]
        }], null, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=home-page-home-page-module-es5.js.map