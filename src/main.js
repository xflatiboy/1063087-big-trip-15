import {createSiteNavTemplate} from './view/site-nav.js';
import {createInfoTemplate} from './view/info-route';
import {createSiteFilterTemplate} from './view/site-filter';
import {createSiteSortTemplate} from './view/site-sort';
import {createSiteContentTemplate} from './view/site-content';
import {createFormAddElement} from './view/site-add';
import {createFormEditTemplate} from './view/site-edit';
import {createPointTemplate} from './view/site-point';

const TASK_COUNT = 3;

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const siteHeaderElement = document.querySelector('.page-header');
const siteInfoElement = siteHeaderElement.querySelector('.trip-main');
const siteNavElement = siteHeaderElement.querySelector('.trip-controls__navigation');
const siteFilterElement = siteHeaderElement.querySelector('.trip-controls__filters');

render(siteNavElement, createSiteNavTemplate(), 'beforeend');
render(siteInfoElement, createInfoTemplate(), 'afterbegin');
render(siteFilterElement, createSiteFilterTemplate(), 'beforeend');

const siteMainElement = document.querySelector('.page-main');
const siteSortElement = siteMainElement.querySelector('.trip-events');

render(siteSortElement, createSiteSortTemplate(), 'beforeend');
render(siteSortElement, createSiteContentTemplate(), 'beforeend');

const siteListElement = siteMainElement.querySelector('.trip-events__list');

render(siteListElement, createFormEditTemplate(), 'afterbegin');
render(siteListElement, createFormAddElement(), 'afterbegin');
for (let i = 0; i < TASK_COUNT; i++) {
  render(siteListElement, createPointTemplate(), 'beforeend');
}
