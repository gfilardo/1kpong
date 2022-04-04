let b,
    c = document,
	d = Math,
	e = c.querySelector('#o'), 
	f = 'addEventListener', 
	a = 240, 
	g = 200, 
	h = {}, 
	i = c.createElement('canvas'), 
	j = i.getContext('2d'), 
	k = (a) => j.fillStyle = a,
	l = j.fillRect.bind(j),
	m = j.fillText.bind(j), 
	n = 0, 
	o = 0, 
	p = 0, 
	q = (a, b, c) => a < b ? b : a > c ? c : a,
	r = (a, b) => d.random() * (b - a) + a,
	s = (a, b = 15, c = g / 2, e = 0) => ({ 
		get y() { return c },
		get d() { l(a - 2, c - b / 2, 5, 15) },
		mv: (a) => { e += a ? 'd' == a ? .7 : 'u' == a ? -.7 : 0 : 0, e = q(e, -5, 5), c += e, c = q(c, -1, g + 1) },
	    c: (b, d) => b > a - 2 && b < a + 2 && d > c - 7 && d < c + 7 
	}), 
	t = (() => { 
		let c,
			e, 
			f, 
			h, 
			i = { 
				i: () => { c = a / 2, e = g / 2, f = r(2, 3) * d.sign(r(-1, 1)), h = r(2, 3) }, 
				mv: () => { (0 > e || e > g) && (h *= -1), (u.c(c, e) || v.c(c, e)) && (f *= -1), c += f, e += h }, 
				d: () => l(c - 1, e - 1, 3, 3), 
				s: () => 0 > c ? 1 : c > a ? -1 : 0, 
				y: () => e 
			}; 
		return i.i(), i;
	})(), 
	u = s(10), 
	v = s(a - 10 - 3), 
	w = () => v.y > t.y() ? 'u' : v.y < t.y() ? 'd' : '';
i.width = a;
i.height = g, e.appendChild(i);
c[f]('keydown', (a) => h[a.which] = 1);
c[f]('keyup', (a) => h[a.which] = 0);
setInterval(() => { 
	b = t.s(), 0 > b && (n -= b), 0 < b && (o += b), b && (t.i(), p = 0), h[32] && (p = 1), 
	k('#000');
	l(0, 0, a, g);
	k('#fff');
	m(n, 20, 50);
	m(o, a - 30, 50);
	p && (t.mv(), t.d());
	u.mv(h[40] ? 'd' : h[38] ? 'u' : '');
	u.d,
	v.mv(w()), 
	v.d;
}, 1e3 / 20);
