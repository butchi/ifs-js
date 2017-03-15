import ns from './ns';

export default class Generator {
  constructor(opts = {}) {
    this.initialize(opts);
  }

  initialize(opts = {}) {
    this.$elm = document.createElementNS('http://www.w3.org/2000/svg', 'g');

    this.line = document.createElementNS('http://www.w3.org/2000/svg', 'line');

    this.$elm.append(this.line);

    this.$container = $('.container');

    ns.$panel.append(this.$elm);

    this.point = opts.point || [[], []];

    this.$container.one('mousedown', (evt) => {
      this.touchDownHandler(evt);
    });
  }

  get p() {
    return this.point;
  }

  touchDownHandler(evt) {
    let ctx = ns.main.router.pageIndex.ctx;

    ctx.clearRect(0, 0, 256, 256);

    const x = evt.pageX;
    const y = evt.pageY;

    this.point[0][0] = (x - 128) / 128;
    this.point[0][1] = (y - 128) / 128;

    this.line.setAttribute('x1', x);
    this.line.setAttribute('y1', y);
    this.line.setAttribute('x2', x);
    this.line.setAttribute('y2', y);

    this.$container.one('mouseup', (evt) => {
      this.touchUpHandler(evt);
    });
  }

  touchUpHandler(evt) {
    const x = evt.pageX;
    const y = evt.pageY;

    this.point[1][0] = (x - 128) / 128;
    this.point[1][1] = (y - 128) / 128;

    this.line.setAttribute('x2', x);
    this.line.setAttribute('y2', y);

    this.$container.trigger('set-line');
  }
}
