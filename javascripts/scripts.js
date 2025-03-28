document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('#buttons .button');
    const sections = document.querySelectorAll('.content-section');
    
    // Изначально скрываем все секции, кроме main
    sections.forEach(section => {
        section.style.display = section.id === 'main' ? 'block' : 'none';
    });
    
    // Активируем кнопку "Главная"
    document.querySelector('.button[data-section="main"]').classList.add('active');
    
    // Клики
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            // Снимаем активность со всех кнопок
            buttons.forEach(btn => btn.classList.remove('active'));
            
            // Скрываем все секции
            sections.forEach(section => {
                section.style.display = 'none';
            });
            
            // Показываем только выбранную секцию
            const sectionId = this.getAttribute('data-section');
            document.getElementById(sectionId).style.display = 'block';
            
            // Активируем текущую кнопку
            this.classList.add('active');
            
            // Прокрутка вверх
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });
     // ______ КОД ДЛЯ ПЕРЕТАСКИВАНИЯ КАМНЕЙ ______
     const stones = [
        document.getElementById('stone1'),
        document.getElementById('stone2'),
        document.getElementById('stone3'),
        document.getElementById('stone4'),
        document.getElementById('stone5'),
        document.getElementById('stone6'),
        document.getElementById('stone7')
    ];

    stones.forEach(stone => {
        if (stone) {
            let isDragging = false;
            let offsetX, offsetY;

            stone.addEventListener('mousedown', function(e) {
                isDragging = true;
                offsetX = e.clientX - stone.getBoundingClientRect().left;
                offsetY = e.clientY - stone.getBoundingClientRect().top;
                stone.style.cursor = 'grabbing';
                stone.style.zIndex = '1000';
                e.preventDefault();
            });

            document.addEventListener('mousemove', function(e) {
                if (!isDragging) return;
                const x = e.clientX - offsetX;
                const y = e.clientY - offsetY;
                stone.style.position = 'absolute';
                stone.style.left = x + 'px';
                stone.style.top = y + 'px';
            });

            document.addEventListener('mouseup', function() {
                isDragging = false;
                stone.style.cursor = 'grab';
            });

            stone.addEventListener('touchstart', function(e) {
                isDragging = true;
                const touch = e.touches[0];
                offsetX = touch.clientX - stone.getBoundingClientRect().left;
                offsetY = touch.clientY - stone.getBoundingClientRect().top;
                stone.style.zIndex = '1000';
                e.preventDefault();
            });

            document.addEventListener('touchmove', function(e) {
                if (!isDragging) return;
                const touch = e.touches[0];
                const x = touch.clientX - offsetX;
                const y = touch.clientY - offsetY;
                stone.style.position = 'absolute';
                stone.style.left = x + 'px';
                stone.style.top = y + 'px';
                e.preventDefault();
            });

            document.addEventListener('touchend', function() {
                isDragging = false;
            });

            stone.style.cursor = 'grab';
        }
    });

    // кнопки перемещаются в случайное место _____
    function moveButtonRandomly(button) {
        const maxX = window.innerWidth - button.offsetWidth;
        const maxY = window.innerHeight - button.offsetHeight;
        const randomX = Math.floor(Math.random() * maxX);
        const randomY = Math.floor(Math.random() * maxY);

        button.style.position = 'absolute';
        button.style.left = `${randomX}px`;
        button.style.top = `${randomY}px`;
    }

    // Обработчики для кнопок
    const catalogButton = document.querySelector('#offer .button');
    const orderButton = document.querySelector('#section3 .button');

    if (catalogButton) {
        catalogButton.addEventListener('click', function(e) {
            e.preventDefault();
            moveButtonRandomly(this);
        });
    }

    if (orderButton) {
        orderButton.addEventListener('click', function(e) {
            e.preventDefault();
            moveButtonRandomly(this);
        });
    }
    // ... (весь предыдущий код остается без изменений) ...

    // Код для исчезновения карточек товаров
    const goods = document.querySelectorAll('.good');
    
    goods.forEach(good => {
        good.addEventListener('click', function() {
            this.style.display = 'none';
        });
    });
});
