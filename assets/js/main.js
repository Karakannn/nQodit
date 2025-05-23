(function ($) {
    "use strict";
    jQuery(document).on("ready", function () {

        //logo acrousel active
        $(".logo-carousel").owlCarousel({
            loop: true,
            nav: false,
            margin: 30,
            autoplay: true,
            autoplayspeed: 10000,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 5
                }
            }
        });
        //single blog quite area  acrousel active
        $(".quite-area").owlCarousel({
            loop: true,
            nav: false,
            margin: 30,
            autoplay: true,
            autoplayspeed: 10000,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }
        });


        //roadmap carosusel active
        $(".roadmap-carousel").owlCarousel({
            loop: true,
            nav: false,
            margin: 30,
            autoplay: true,
            autoplayspeed: 10000,
            navText: ['<i class="fa fa-long-arrow-left">', '<i class="fa fa-long-arrow-right">'],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 3
                }
            }
        });
        //faq area carousel active
        $(".faq-carousel").owlCarousel({
            loop: true,
            nav: false,
            margin: 30,
            autoplay: true,
            autoplayspeed: 10000,
            navText: ['<i class="fa fa-long-arrow-left">', '<i class="fa fa-long-arrow-right">'],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 3
                }
            }
        });
        $(".card-carousel").owlCarousel({
            loop: true,
            nav: false,
            margin: 30,
            autoplay: true,
            autoplayspeed: 100000,
            navText: ['<i class="fa fa-long-arrow-left">', '<i class="fa fa-long-arrow-right">'],
            responsive: {
                0: {
                    items: 2
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 2
                }
            }
        });
        //animation active
        new WOW().init();
        //menu scrollr
        $('.main-menu li a').click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
                && location.hostname == this.hostname) {
                var $target = $(this.hash);
                $target = $target.length && $target
                    || $('[name=' + this.hash.slice(1) + ']');
                if ($target.length) {
                    var targetOffset = $target.offset().top - 60;
                    $('html,body')
                        .animate({scrollTop: targetOffset}, 1000);
                    return false;
                }
            }
        });

        //scrolling menu adding active class
        var scrolllink = $('.scroll');
        window.onbeforeunload = function () {
            window.scrollTo(0, 0);
        }

        $(window).scroll(function () {
            var scrollbarLocation = $(this).scrollTop();
            scrolllink.each(function () {
                var sectionOffset = $(this.hash).offset().top - 140
                if (sectionOffset <= scrollbarLocation) {
                    $(this).parent().addClass('active');
                    $(this).parent().siblings().removeClass('active');
                }
            })

            var scrollTop = $(this).scrollTop();
        
            if (scrollTop >= window.innerHeight / 10) {
                $('body').addClass("scrolled");
            } else {
                $('body').removeClass("scrolled");
            }
        })
        //mobile-menu
        $("#slick-nav").slicknav({
            prependTo: '.mobile-menu',
            allowParentlinks: true
        });
        // Set the date we're counting down to
        var countDownDate = new Date("Sep 5, 2018 15:37:25").getTime();

        // Update the count down every 1 second
        var x = setInterval(function () {

            // Get todays date and time
            var now = new Date().getTime();

            // Find the distance between now an the count down date
            var distance = countDownDate - now;

            // Time calculations for days, hours, minutes and seconds
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // Display the result in the element with id="demo"
            document.getElementById("days").innerHTML = days;
            document.getElementById("hours").innerHTML = hours;
            document.getElementById("minutes").innerHTML = minutes;
            document.getElementById("seconds").innerHTML = seconds;

            // If the count down is finished, write some text

        }, 1000);

        //welcome particles


    });


})(jQuery);


/*================================ End ====================================*/
/***console.clear(); */

const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");
canvas.height = window.innerHeight * 2;
canvas.width = window.innerWidth * 2;

const deg = 13;
const thetaA = Math.PI * (360 - deg) / 180.0;
const thetaB = Math.PI * deg / 180.0;
const cosA = Math.cos(thetaA);
const sinA = Math.sin(thetaA);
const cosB = Math.cos(thetaB);
const sinB = Math.sin(thetaB);

class Pane {
    constructor() {
        this.direction = Streak.generateDirection();
        this.speed = Streak.generateSpeed();
        this.radiusA = Streak.generateRadius();
        this.radiusB = Streak.generateRadius();
        this.y1 = Streak.generateY();
        this.x1 = this.direction === 1 ? -canvas.width : canvas.width;
        this.cosA = this.direction === 1 ? cosA : cosB;
        this.sinA = this.direction === 1 ? sinA : sinB;
        this.cosB = this.direction === 1 ? cosB : cosA;
        this.sinB = this.direction === 1 ? sinB : sinA;
    }

    tick() {
        const cos = this.speed * this.cosA;
        const sin = this.speed * this.sinA;
        this.x1 = this.x1 + (this.direction * cos);
        this.y1 = this.y1 + (this.direction * sin);
        this.x2 = this.x1 + this.radiusA * this.cosA;
        this.y2 = this.y1 + this.radiusA * this.sinA;
        this.x3 = this.x1 + this.radiusB * this.cosB;
        this.y3 = this.y1 + this.radiusB * this.sinB;
        this.x4 = this.x2 + this.radiusB * this.cosB;
        this.y4 = this.y2 + this.radiusB * this.sinB;
        this.speed = Math.pow(this.speed, 1.0025);
        return this.isOffscreen();
    }

    isOffscreen() {
        if (this.direction === 1) {
            return this.y3 < 0 || this.x1 > canvas.width;
        } else {
            return this.y2 < 0 || this.x4 < 0;
        }
    }

    static generateDirection() {
        return Math.random() > 0.5 ? 1 : -1;
    }

    static generateRadius() {
        const factor = canvas.width * 1;
        return Math.round(Math.random() * factor * 0.75 + factor * 0.25);
    }

    static generateSpeed() {
        return Math.round(Math.random() * 10 + 10);
    }

    static generateY() {
        return Math.round(Math.random() * canvas.height * 2);
    }
}

class Streak {
    constructor() {
        this.direction = Streak.generateDirection();
        this.speed = Streak.generateSpeed();
        this.radius = Streak.generateRadius();
        this.y1 = Streak.generateY();
        this.x1 = this.direction === 1 ? -this.radius : canvas.width;
        this.cos = this.direction === 1 ? cosA : cosB;
        this.sin = this.direction === 1 ? sinA : sinB;
    }

    tick() {
        const cos = this.speed * this.cos;
        const sin = this.speed * this.sin;
        this.x1 = this.x1 + (this.direction * cos);
        this.y1 = this.y1 + (this.direction * sin);
        this.x2 = this.x1 + this.radius * this.cos;
        this.y2 = this.y1 + this.radius * this.sin;
        this.speed = Math.pow(this.speed, 1.0025);
        return this.isOffscreen();
    }

    isOffscreen() {
        if (this.direction === 1) {
            return this.y1 < 0 || this.x1 > canvas.width;
        }
        return this.y2 < 0 || this.x2 < 0;
    }

    static generateDirection() {
        return Math.random() > 0.5 ? 1 : -1;
    }

    static generateRadius() {
        const factor = canvas.width * 0.5;
        return Math.round(Math.random() * factor * 0.75 + factor * 0.25);
    }

    static generateSpeed() {
        return Math.round(Math.random() * 10 + 5);
    }

    static generateY() {
        return Math.round(Math.random() * canvas.height * 2);
    }
}

const streaks = [];
const panes = [];
// moving into the future!
for (let i = 0; i < 100; i++) {
    tick();
}

draw();

function draw() {
    requestAnimationFrame(draw);
    tick();
}

function tick() {
    const offset = 12;
    context.fillStyle = "#0F113A";
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.lineWidth = 2;
    const cleanupStreaks = [];
    const cleanupPanes = [];

    streaks.forEach((streak, i) => {
        const {x1, y1, x2, y2} = streak;

        context.strokeStyle = "rgba(0,221,255,0.75)";
        context.beginPath();
        context.moveTo(x1, y1);
        context.lineTo(x2, y2);
        context.stroke();

        context.strokeStyle = "rgba(0,221,255,0.25)";
        context.beginPath();
        context.moveTo(x1 - offset * streak.direction, y1 + offset);
        context.lineTo(x2 - offset * streak.direction, y2 + offset);
        context.stroke();

        const dead = streak.tick();
        if (dead) {
            cleanupStreaks.push(i);
        }
    });

    context.fillStyle = "rgba(255,255,255,0.125)";
    context.strokeStyle = "rgba(255,255,255,0.25)";
    panes.forEach((pane, i) => {
        const {x1, y1, x2, y2, x3, y3, x4, y4} = pane;
        context.beginPath();
        context.moveTo(x1, y1);
        context.lineTo(x2, y2);
        context.lineTo(x4, y4);
        context.lineTo(x3, y3);
        context.closePath();
        context.fill();

        context.beginPath();
        context.moveTo(x1 - offset * pane.direction, y1 + offset);
        context.lineTo(x2 - offset * pane.direction, y2 + offset);
        context.lineTo(x4 - offset * pane.direction, y4 + offset);
        context.lineTo(x3 - offset * pane.direction, y3 + offset);
        context.closePath();
        context.stroke();

        const dead = pane.tick();
        if (dead) {
            cleanupPanes.push(i);
        }
    });

    for (let i = cleanupStreaks.length - 1; i >= 0; i--) {
        streaks.splice(cleanupStreaks[i], 1);
    }
    for (let i = cleanupPanes.length - 1; i >= 0; i--) {
        panes.splice(cleanupPanes[i], 1);
    }
    if (Math.random() < 0.1) {
        streaks.push(new Streak());
    }
    // if (Math.random() < 0.05) {
    //   panes.push(new Pane());
    // }
}
