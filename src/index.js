import { app } from "hyperapp";
import view from "./TestGround";
import {
  state as carouselState,
  actions as carouselActions
} from "./components/carousel";

import FileDroparea from "./components/file_droparea";

import multiSelect from "./components/multi_select";

const state = {
  carousel: carouselState,
  multiSelect: multiSelect.initialState,
  myFile: FileDroparea.initialState
};

const actions = {
  carousel: carouselActions,
  multiSelect: multiSelect.actions,
  myFile: FileDroparea.actions
};

const myApp = app(state, actions, view, document.body);
window.myApp;
/**
 * Hyperapp wires your actions so the view is re-rendered every time the state
 * changes as a result of calling any action. This object is useful because it
 * allows you to talk to your app from another app, framework, vanilla JS, etc.
 *
 * Here is an example on CodePen: https://codepen.io/selfup/pen/jLMRjO
 */

// setTimeout(add, 1000);
// setTimeout(sub, 2000);
