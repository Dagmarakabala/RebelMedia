import 'babel-polyfill';
import $ from 'jquery';

import Header from './components/Header/Header'
import ArticleSlider from './components/ArticleSlider/ArticleSlider'
import Service from './components/Service/Service'
import Portfolio from './components/Portfolio/Portfolio'
import StaticInfo from './components/StaticInfo/StaticInfo'
import Clients from './components/Clients/Clients'
import Loader from './components/Loader/Loader'
$(document).ready(() => {
  // PUT LOADERS HERE
  Header.init()
  Service.init()
  Portfolio.init()
  StaticInfo.init()
  Clients.init()
  Loader.init()
});
