export default function initAnimeScroll() {
    const debounce = function (func, wait, immediate) {
        var timeout;
        return function() {
            var context = this, args = arguments;
            var later = function() {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    };

    const item = document.querySelectorAll('[data-anime]');

    function animeScroll() {
        const windowTop = window.pageYOffset + (window.innerHeight * 3) / 4;
        item.forEach(element => {
            if(windowTop > element.offsetTop){
                if(!element.classList.contains("animate")){
                    element.classList.add("animate");
                }
            }
        });
    }

    animeScroll();
    
    if(item.length){
        window.addEventListener("scroll", debounce(() => {
            animeScroll();
        }, 100) )
    }
    
};
