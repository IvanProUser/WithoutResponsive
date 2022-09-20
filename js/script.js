// let burger = document.querySelector('.burger');
// let line = document.querySelectorAll('.burger__line');

// burger.addEventListener('click', function(){
//     line.forEach((elem)=>{
//         if (elem.classList.contains('burger__line-first')) {
//             elem.style.opacity = 0;
//         } else if (elem.classList.contains('burger__line-fourth')) {
//             elem.style.opacity = 0;
//         } else if (elem.classList.contains('burger__line-second')) {
//             elem.style.transform = 'translateY(-45%) rotate(45deg)'
//         } else if (elem.classList.contains('burger__line-third')) {
//             elem.style.transform = 'translateY(45%) rotate(-45deg)'
//         }
//     });
// });



    // function name() {
    //     let burger = document.querySelector('.burger');
    //     let header = document.querySelectorAll('.modern__header-link');
    //     burger.addEventListener('click', ()=> {
    //         burger.classList.toggle('active');
    //         header.forEach((elem) => {
    //             elem.classList.toggle('inactive');
    //         });
    //     });
    // }
    // name();


    // class MenuCard {
    //     constructor(img, alt, title, sub, parent) {
    //         this.img = img;
    //         this.alt = alt;
    //         this.title = title;
    //         this.sub = sub;
    //         this.parent = document.querySelector(parent);
    //     }
    //     render() {
    //         const element = document.createElement('div');
    //             element.innerHTML = `
    //             <div class="link__card">
    //             <div class="link__card-image"><img src=${this.img} alt=${this.alt}></div>
    //             <div class="link__card-title">${this.title}</div>
    //             <div class="link__card-subtitle">${this.sub}</div>
    //         </div>
    //             `;
    //             this.parent.append(element);
    //     }
    // }

    // new MenuCard(
    //     "img/clock.png",
    //     "clock",
    //     "Экономия",
    //     "Не переплачивай другим, создайте свою страницу <br> от $40 в месяц",
    //     '.link__cards',
    // ).render();

    // new MenuCard(
    //     "img/blue.png",
    //     "blue",
    //     "Удобство",
    //     "Понятный и простой <br> интерфейс не затруднит работу с сервисом",
    //     '.link__cards',
    // ).render();

    // new MenuCard(
    //     "img/Settings.png",
    //     "settings",
    //     "Возможность",
    //     "Подключайте свой сайт к Kaspi.kz , 1C и Kazpost и контролируйте все в Daru",
    //     '.link__cards',
    // ).render();



    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        slidesPerView: 2,
        spaceBetween: 60,
        centeredSlides: false,
        loop: true,
        allowTouchMove: true,
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      });