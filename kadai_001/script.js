$(function () {
  $(".carousel").slick({
    dots: true,
    autoplay: true,
    infinite: true,
    autoplaySpeed: 2000,
    arrows: false,
    fade: true,
    pauseOnHover: false,
  });

  //hoverしたら不透明に
  $(".myprofile, a, .works-photo, #page-top").hover(
    function () {
      $(this).animate({ opacity: 0.5 }, 300);
    },
    function () {
      $(this).animate({ opacity: 1.0 }, 300);
    }
  );
  //TOP Button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $("#page-top").fadeIn();
    } else {
      $("#page-top").fadeOut();
    }
  });

  //ページ内リンクのスクロールをスムースにする（Smooth scroll)
  $("a[href^='#']").click(function () {
    const speed = 900;
    const href = $(this).attr("href");
    let $target;
    if (href == "#") {
      $target = $("html");
    } else {
      $target = $(href);
    }
    const position = $target.offset().top;
    $("html,body").animate({ scrollTop: position }, speed, "swing");
    return false;
  });

  //scrollしたときにセクションをfade in させる
  $(window).scroll(function () {
    const scrollAmount = $(window).scrollTop();
    const windowHeight = $(window).height();
    $("section").each(function () {
      const position = $(this).offset().top;
      if (scrollAmount > position - windowHeight + 100) {
        $(this).addClass("fade-in");
      }
    });
  });

  //when the img in Work section clicked, make the Modal big
  $(".about-work img").click(function () {
    const imgSrc = $(this).attr("src");
    const imgAlt = $(this).attr("alt");
    $(".big-img").attr({
      src: imgSrc,
      alt: imgAlt,
    });
    $(".modal").fadeIn();
  });
  //閉じるボタンをクリックしたときにモーダルを fade out
  $(".close-btn").click(function () {
    $(".modal").fadeOut();
  });
});
