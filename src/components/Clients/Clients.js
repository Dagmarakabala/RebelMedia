import $ from 'jquery';
import 'slick-carousel';

const Clients = {
  init() {
    this.catchDOM();
    if(window.innerWidth < 610)
      {
        this.addSlick();
      }
  },
  catchDOM() {
    this.clientsPage = $('.clients');
  },
  addSlick() {
    const box = this.clientsPage.find(".clients__container");
    box.removeClass("clients__container");
    box.addClass("clients__slick");
    
    
    $('.clients__slick').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      dots: true,
      arrows: false,
    });

    const dots = this.clientsPage.find(".slick-dots");
    dots.addClass("-standard")
  },
};
export default Clients;

