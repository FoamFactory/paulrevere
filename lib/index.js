"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PaulRevere = void 0;

var _jquery = _interopRequireDefault(require("jquery"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Paul Revere is a javascript library for passing notifications to the client in
 * an easy and beautiful way.
 */
var PaulRevere =
/*#__PURE__*/
function () {
  function PaulRevere(pageMessageId) {
    _classCallCheck(this, PaulRevere);

    if (!pageMessageId) {
      this._pageMessageId = 'paulRevereMessageBox';
    } else {
      this._pageMessageId = pageMessageId;
    }
  }
  /**
   * Retrieve the singleton instance of {PaulRevere}.
   *
   * @returns {PaulRevere} An instance of the {PaulRevere} messenger manager.
   */


  _createClass(PaulRevere, [{
    key: "displayCheersMessage",

    /**
     * Display a string as a 'cheers' message. A 'cheers' message is one confirming that the user took some action, and
     * is generally positive in nature (e.g. "Your account has been created!").
     *
     * @param message The message text to display.
     */
    value: function displayCheersMessage(message) {
      var self = this;
      var elementId = "#".concat(self._pageMessageId);
      var element = (0, _jquery["default"])(elementId);
      element.removeClass('error');
      element.removeClass('information');
      element.addClass('cheers');
      element.find('.message-text').text(message);

      self._displayElement(element);
    }
    /**
     * Display a string as an 'information' message. An 'information' message is a message communicated to the user that
     * is neither positive nor negative, but is requesting their attention (e.g. "The system will be going down for
     * maintenance in 18 hours").
     *
     * @param message The message text to display.
     */

  }, {
    key: "displayInfoMessage",
    value: function displayInfoMessage(message) {
      var self = this;
      var elementId = "#".concat(self._pageMessageId);
      var element = (0, _jquery["default"])(elementId);
      element.removeClass('error');
      element.removeClass('cheers');
      element.addClass('information');
      element.find('.message-text').text(message);

      self._displayElement(element);
    }
    /**
     * Display a string as an 'error' message. An 'error' message is one that is negative and needs to be reported to the
     * user so they can take action (e.g. "You are not authorized to view that content").
     *
     * @param message The message text to display.
     */

  }, {
    key: "displayErrorMessage",
    value: function displayErrorMessage(message) {
      var self = this;
      var elementId = "#".concat(self._pageMessageId);
      var element = (0, _jquery["default"])(elementId);
      element.find('.message-text').text(message);
      element.removeClass('information');
      element.removeClass('cheers');
      element.addClass('error');

      self._displayElement(element);
    }
    /**
     * Show the message for a given page after the page has finished loading.
     *
     * This is called from the document onready handler below.
     *
     * @private
     */

  }, {
    key: "_showMessageOnLoad",
    value: function _showMessageOnLoad() {
      var self = this;
      var elementId = "#".concat(self._pageMessageId);
      var element = (0, _jquery["default"])(elementId);

      if (element.data('showOnLoad') === 'immediate') {
        self._displayElement(element);
      }
    }
    /**
     * Display the message box that is contained within the given document element.
     *
     * @param element The jQuery element containing the message box to load
     *
     * @private
     */

  }, {
    key: "_displayElement",
    value: function _displayElement(element) {
      var self = this;
      element.removeClass('invisible');
      element.addClass('slide-down');

      self._setupDismissHandler(element);
    }
    /**
     * Set up the dismiss handler which will handle the action when a user clicks the dismiss button of the message box.
     *
     * @param element The jQuery element containing the message box that will be dismissed
     *
     * @private
     */

  }, {
    key: "_setupDismissHandler",
    value: function _setupDismissHandler(element) {
      element.find('.close-button').click(function () {
        element.removeClass('slide-down');
        element.addClass('slide-up');
      });
    }
  }], [{
    key: "getMessenger",
    value: function getMessenger() {
      if (PaulRevere._instance == null) {
        PaulRevere._instance = new PaulRevere();
      }

      return PaulRevere._instance;
    }
  }]);

  return PaulRevere;
}(); // $(document).ready(function() {
//   PaulRevere.getMessenger()._showMessageOnLoad();
// });


exports.PaulRevere = PaulRevere;