import $ from 'jquery';


const Service = {
  init() {
      this.catchDOM();
      this.bindEvents();
      if(window.innerWidth < 969)
      {
        this.addArrow();
      }
    },
  catchDOM() {
    this.servicePage = $('.service');
    this.serviceCircle = $('.service__circle');
  },
  bindEvents() {
    this.serviceCircle.find('.serviceName').on("mouseover", this.toggleServiceView.bind(this));
    
  },
  toggleServiceView(event) {
    let i;
    const currentServiceName = $(event.currentTarget);
    const serviceDataName = currentServiceName[0].attributes[1].nodeValue;
    const titleName = this.servicePage.find('.service__name');
    const textAboutService = this.servicePage.find('.service__text');
    this.serviceName = currentServiceName.children();
    let allPath = this.servicePage.find('path#communication');
    let nextPath = this.servicePage.find('path#production');
    for(i = 0; i < nextPath.length; i++)
    {
      allPath.push(nextPath[i]);
    }
    nextPath = this.servicePage.find('path#creation');
    for(i = 0; i < nextPath.length; i++)
    {
      allPath.push(nextPath[i]);
    }
    nextPath = this.servicePage.find('path#media');
    for(i = 0; i < nextPath.length; i++)
    {
      allPath.push(nextPath[i]);
    }
    nextPath = this.servicePage.find('path#strategy');
    for(i = 0; i < nextPath.length; i++)
    {
      allPath.push(nextPath[i]);
    }
    for(i = 0; i < allPath.length; i++)
    {
      allPath[i].attributes[3].value="#fff"
    }
    for(i = 0; i < this.serviceName.length; i++)
    {
      this.serviceName[i].attributes[3].value="#000"
    }
    let title;
    let textService;
    switch(serviceDataName) {
      case 'communication' : {
        title = "Komunikacja : ";
        textService = "tekst o komunikacji"
        break;
      }
      case 'production' : {
        title = "Produkcja : ";
        textService = "tekst o produkcji";
        break;
      }
      case 'creation' : {
        title = "Kreacja : ";
        textService = "Nawet najlepsza strategia jest bezwartościowa bez odpowiedniej kreacji. Pracując nad kreacją wydobywamy wartość marki. Nadajemy jej formę i wyraz.";
        break;
      }
      case 'media' : {
        title = "Planowanie i zakup mediów : ";
        textService = "tekst o planowaniu i zakupie mediów";
        break;
      }
      case 'strategy' : {
        title = "Strategia : ";
        textService = "tekst o strategii";
        break;
      }
      default:
        title = "error";
        textService = "error";
    }
    titleName.text(title);
    textAboutService.text(textService);

  },
  addArrow()
  {
    const arrow = this.servicePage.find('.service__char').eq(1);
    arrow.text("↓");
  }

};
export default Service;