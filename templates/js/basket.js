document.addEventListener('DOMContentLoaded', function() {
    var likeBtns = document.querySelectorAll('.like-btn');

    likeBtns.forEach(function(likeBtn) {
        likeBtn.addEventListener('click', function() {
            this.classList.toggle('is-active');
        });
    });

    var minusBtns = document.querySelectorAll('.minus-btn');

    minusBtns.forEach(function(minusBtn) {
        minusBtn.addEventListener('click', function(e) {
            e.preventDefault();
            var input = this.closest('div').querySelector('input');
            var value = parseInt(input.value);

            if (value > 1) {
                value = value - 1;
            } else {
                value = 0;
            }

            input.value = value;

            var totalPriceElement = this.closest('.item').querySelector('.total-price');
            var price = parseInt(totalPriceElement.dataset.price, 10);

            if (parseInt(totalPriceElement.textContent) - price > 0) {
                totalPriceElement.textContent = parseInt(totalPriceElement.textContent) - price;
            } else if (value === 0) {
                totalPriceElement.textContent = 0
            } else {
                totalPriceElement.textContent = price;
            }

        });
    });

    var plusBtns = document.querySelectorAll('.plus-btn');

    plusBtns.forEach(function(plusBtn) {
        plusBtn.addEventListener('click', function(e) {
            e.preventDefault();
            var input = this.closest('div').querySelector('input');
            var value = parseInt(input.value);

            if (value < 100) {
                value = value + 1;
            } else {
                value = 100;
            }

            input.value = value;

            var totalPriceElement = this.closest('.item').querySelector('.total-price');
            var price = parseInt(totalPriceElement.dataset.price, 10);

            totalPriceElement.textContent = price * value;

        });
    });
});