document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.js-support-card');

    cards.forEach(function (card) {
        const trigger = card.querySelector('.js-support-trigger');
        const closes  = card.querySelectorAll('.js-support-close');

        if (!trigger) return;

        // Mở popup khi click robot (chỉ mobile)
        trigger.addEventListener('click', function (e) {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                card.classList.add('is-open');
            }
        });

        // Đóng popup khi click X hoặc nền mờ
        closes.forEach(function (btn) {
            btn.addEventListener('click', function () {
                card.classList.remove('is-open');
            });
        });
    });
});
