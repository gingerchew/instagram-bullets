
const glide = new Glide('#glideCarousel').mount();

const bullets = {
    active: document.querySelector('.glide__bullet--active'),
    get siblings() {
        return {
            prev: this.active.previousElementSibling,
            next: this.active.nextElementSibling
        }
    }
}

window.addEventListener('load', () => bullets.siblings.next.classList.add('active'));

glide.on('move.after', function () {

    const bullets = {
        all: [...document.querySelectorAll('.glide__bullet')],
        get center() {
            return this.all[glide.index];
        },
        get active() {
            return [
                this.all[glide.index - 3],
                this.all[glide.index - 2],
                this.all[glide.index - 1],
                this.center,
                this.all[glide.index + 1],
                this.all[glide.index + 2],
                this.all[glide.index + 3]
            ]
        }
    }

    const indicatorSizes = ['lg', 'md', 'sm', 'center'];

    bullets.all.forEach(bullet => (
        bullet.classList.remove('active'),
        bullet.classList.remove('sm'),
        bullet.classList.remove('md'),
        bullet.classList.remove('lg'),
        bullet.classList.remove('center')
    ));

    bullets.active.forEach(function (bullet, i) {
        const cssIndex = Math.abs(i - 3);
        if (bullet !== undefined) {
            bullet.classList.add('active');
            bullet.classList.add(indicatorSizes[cssIndex - 1]);
        }
    });

})