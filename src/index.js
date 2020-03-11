// import * as $ from jquery;

import $ from 'jquery';

/**
 * Paul Revere is a javascript library for passing notifications to the client in
 * an easy and beautiful way.
 */
export class PaulRevere {
  constructor(pageMessageId) {
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
  static getMessenger() {
    if (PaulRevere._instance == null) {
      PaulRevere._instance = new PaulRevere();
    }

    return PaulRevere._instance;
  }

  /**
   * Display a string as a 'cheers' message. A 'cheers' message is one confirming that the user took some action, and
   * is generally positive in nature (e.g. "Your account has been created!").
   *
   * @param message The message text to display.
   */
  displayCheersMessage(message) {
    let self = this;

    let elementId = `#${self._pageMessageId}`;
    let element = $(elementId);

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
  displayInfoMessage(message) {
    let self = this;

    let elementId = `#${self._pageMessageId}`;
    let element = $(elementId);

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
  displayErrorMessage(message) {
    let self = this;

    let elementId = `#${self._pageMessageId}`;
    let element = $(elementId);

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
  _showMessageOnLoad() {
    let self = this;
    let elementId = `#${self._pageMessageId}`;
    let element = $(elementId);

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
  _displayElement(element) {
    let self = this;

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
  _setupDismissHandler(element) {
    element.find('.close-button').click(function () {
      element.removeClass('slide-down');
      element.addClass('slide-up');
    });
  }
}

// $(document).ready(function() {
//   PaulRevere.getMessenger()._showMessageOnLoad();
// });
