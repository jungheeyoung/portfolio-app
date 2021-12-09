
        // 풀다운 메뉴
        $(document).ready(function () {
            // 풀다운 메뉴
            $('.outer-menu').hover(function () {
                $(this).find('.inner-menu').css('display', 'block');
            }, function () {
                $(this).find('.inner-menu').css('display', 'none');
            });
        });

        // 페이지
        $(document).ready(function () {
            // 이미지 로드 확인
            $('#main-section').imagesLoaded(function () {
                // jQuery Masonry 플러그인 적용
                $('#main-section').masonry({
                    itemSelector: '.paper',
                    columnWidth: 230,
                    isAnimated: true
                });
            });
});
          