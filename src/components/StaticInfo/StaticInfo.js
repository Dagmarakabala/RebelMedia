import $ from 'jquery';
import 'slick-carousel';

const StaticInfo = {
  init() {
    this.catchDOM();
    if(window.innerWidth < 767)
      {
        this.addSlick();
      }
  },
  catchDOM() {
    this.staticPage = $('.staticInfo');
  },
  addSlick() {
    const box = this.staticPage.find(".staticInfo__inner");
    box.removeClass("staticInfo__inner");
    box.addClass("staticInfo__slick");
    
    
    $('.staticInfo__slick').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      arrows: false,
    });

    const dots = this.staticPage.find(".slick-dots");
    dots.addClass("-standard")
  },
};
export default StaticInfo;

