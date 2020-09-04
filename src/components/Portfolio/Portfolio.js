import $ from 'jquery';


const Portfolio = {
  init() {
    this.catchDOM();
    this.addActualPost();
  },
  catchDOM() {
    this.portfolioSection = $('.portfolio');
  },
  addActualPost() {
    const firstPost = this.portfolioSection.find(".portfolioItem").first();
    const secondPost = this.portfolioSection.find(".portfolioItem").eq(1);
    const firstImg = "./assets/images/PortfolioItem/img1.png";
    const firstTitle = "Lorem Ipsum";
    const firstText = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,";
    const secondImg = "./assets/images/PortfolioItem/img2.png";
    const secondTitle = "Lorem Ipsum Dolor Sit Amet";
    const secondText = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,  Excepteur sint occaecat cupidatat non proident,  Excepteur sint occaecat cupidatat non proident,";
    this.addNewPost(firstPost, firstImg, firstTitle, firstText);
    this.addNewPost(secondPost, secondImg, secondTitle, secondText);
  },
  addNewPost(post, img, title, text) {
    const actualImg = post.find(".portfolioItem__img");
    const actualTitle = post.find(".portfolioItem__title");
    const actualText = post.find(".portfolioItem__text");
    actualImg[0].src=img;
    actualTitle.text(title);
    const allText = text;
    const textSplit = allText.split(" ");
    let i;
    let goodText;
    for(i = 0; i< 30; i++) {
      if( i == 0) {
        goodText = textSplit[i] + " ";
      }
      else {
      goodText += textSplit[i] + " ";
      }
    }
    actualText.text(goodText + "...");
  },
};
export default Portfolio;