const DATA = {
  "انگشتر طلای ۱۸ عیار": {
    price: 1250,
    rating: 5,
    image: "https://images.unsplash.com/photo-1713950920412-97799efdf870?ixid=M3w4MjcwNjd8MHwxfHNlYXJjaHw2fHxnb2xkJTIwcmluZ3xlbnwwfHx8fDE3NjQ1NzUzODJ8MA&ixlib=rb-4.1.0&fit=max&q=80",
    desc: "در طلای ۱۸ عیار با پرداخت آینه ای و فرم راحت طراحی شده است.",
    sku: "RG-18K-001"
  },
  "گردنبند الماس": {
    price: 3800,
    rating: 4,
    image: "https://images.unsplash.com/photo-1713950920412-97799efdf870?ixid=M3w4MjcwNjd8MHwxfHNlYXJjaHw2fHxnb2xkJTIwcmluZ3xlbnwwfHx8fDE3NjQ1NzUzODJ8MA&ixlib=rb-4.1.0&fit=max&q=80",
    desc: "چینش تدریجی الماس با قاب مینیمال برای ظرافت روزانه.",
    sku: "NK-DM-014"
  },
  "دستبند رزگلد": {
    price: 980,
    rating: 5,
    image: "https://images.unsplash.com/photo-1713950920412-97799efdf870?ixid=M3w4MjcwNjd8MHwxfHNlYXJjaHw2fHxnb2xkJTIwcmluZ3xlbnwwfHx8fDE3NjQ1NzUzODJ8MA&ixlib=rb-4.1.0&fit=max&q=80",
    desc: "زنجیر رزگلد ۱۴ عیار با درخشش ملایم و قفل مقاوم.",
    sku: "BR-RG-221"
  },
  "گوشواره زمرد": {
    price: 1640,
    rating: 4,
    image: "https://images.unsplash.com/photo-1713950920412-97799efdf870?ixid=M3w4MjcwNjd8MHwxfHNlYXJjaHw2fHxnb2xkJTIwcmluZ3xlbnwwfHx8fDE3NjQ1NzUzODJ8MA&ixlib=rb-4.1.0&fit=max&q=80",
    desc: "زمردهای کارشده با دست همراه با الماس های ریز پاوه.",
    sku: "ER-EM-102"
  },
  "ست عروس الماس": {
    price: 8900,
    rating: 5,
    image: "https://images.unsplash.com/photo-1628926379972-9843ad139a8c?ixid=M3w4MjcwNjd8MHwxfHNlYXJjaHw3fHxnb2xkJTIwcmluZ3xlbnwwfHx8fDE3NjQ1NzUzODJ8MA&ixlib=rb-4.1.0&fit=max&q=80",
    desc: "ست شاخص عروس ساخته شده از طلای سفید ممتاز.",
    sku: "SET-BR-900"
  },
  "نسخه محدود طراح": {
    price: 5450,
    rating: 5,
    image: "https://images.unsplash.com/photo-1628926379972-9843ad139a8c?ixid=M3w4MjcwNjd8MHwxfHNlYXJjaHw3fHxnb2xkJTIwcmluZ3xlbnwwfHx8fDE3NjQ1NzUzODJ8MA&ixlib=rb-4.1.0&fit=max&q=80",
    desc: "سری محدود از طراح مهمان با خطوط الهام گرفته از معماری.",
    sku: "DS-LIM-077"
  },
  "چوکر طلای ۱۸ عیار": {
    price: 2320,
    rating: 4,
    image: "https://images.unsplash.com/photo-1628926379972-9843ad139a8c?ixid=M3w4MjcwNjd8MHwxfHNlYXJjaHw3fHxnb2xkJTIwcmluZ3xlbnwwfHx8fDE3NjQ1NzUzODJ8MA&ixlib=rb-4.1.0&fit=max&q=80",
    desc: "چوکر طلای ۱۸ عیار با پرداخت ساتن و قفل مغناطیسی.",
    sku: "CK-18K-051"
  },
  "گوشواره حلقه ای طلای ۱۸ عیار": {
    price: 760,
    rating: 4,
    image: "https://images.unsplash.com/photo-1628926379972-9843ad139a8c?ixid=M3w4MjcwNjd8MHwxfHNlYXJjaHw3fHxnb2xkJTIwcmluZ3xlbnwwfHx8fDE3NjQ1NzUzODJ8MA&ixlib=rb-4.1.0&fit=max&q=80",
    desc: "حلقه های سبک روزمره با قفل محکم فشاری.",
    sku: "HP-18K-312"
  }
};

const fmt = n => `$${n.toLocaleString()}`;
const stars = n => "★★★★★".slice(0, n) + "☆☆☆☆☆".slice(0, 5 - n);
let currentProduct = null;
const CART = [];
const WISHLIST = [];

document.querySelectorAll('.quick-view').forEach(btn => {
  btn.addEventListener('click', () => {
    const key = btn.dataset.product; currentProduct = key;
    const d = DATA[key];
    const m = document.getElementById('quickViewModal');
    document.getElementById('modalTitle').textContent = key;
    document.getElementById('modalPrice').textContent = fmt(d.price);
    document.getElementById('modalRating').textContent = stars(d.rating);
    document.getElementById('modalDesc').textContent = d.desc;
    const img = document.getElementById('modalImage');
    img.src = d.image;
    img.alt = key;
    m.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  });
});

document.querySelectorAll('[data-close]').forEach(el => {
  el.addEventListener('click', () => {
    const m = document.getElementById('quickViewModal');
    m.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  });
});

const form = document.getElementById('newsletterForm');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const input = form.querySelector('input[name="email"]');
    if (!input.value) return;
    input.value = '';
    form.querySelector('button').textContent = 'عضو شدید';
    setTimeout(() => { form.querySelector('button').textContent = 'اشتراک'; }, 1800);
  });
}

const header = document.querySelector('.site-header');
let lastY = 0;
window.addEventListener('scroll', () => {
  const y = window.scrollY;
  header.style.transform = y > lastY && y > 80 ? 'translateY(-100%)' : 'translateY(0)';
  lastY = y;
});

function renderCart() {
  const wrap = document.getElementById('cartItems');
  wrap.innerHTML = '';
  let subtotal = 0;
  CART.forEach((key, i) => {
    const d = DATA[key];
    subtotal += d.price;
    const row = document.createElement('div');
    row.className = 'drawer-item';
    row.innerHTML = `<img src="${d.image}" alt="${key}"><div><h4>${key}</h4><div class="price">${fmt(d.price)}</div></div><button class="icon-btn" data-remove="${i}">×</button>`;
    wrap.appendChild(row);
  });
  document.getElementById('cartSubtotal').textContent = fmt(subtotal);
  document.getElementById('cartCount').textContent = CART.length;
  wrap.querySelectorAll('[data-remove]').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.dataset.remove, 10);
      CART.splice(idx, 1);
      renderCart();
    });
  });
}

function renderWishlist() {
  const wrap = document.getElementById('wishlistItems');
  wrap.innerHTML = '';
  WISHLIST.forEach((key, i) => {
    const d = DATA[key];
    const row = document.createElement('div');
    row.className = 'drawer-item';
    row.innerHTML = `<img src="${d.image}" alt="${key}"><div><h4>${key}</h4><div class="price">${fmt(d.price)}</div></div><button class="icon-btn" data-remove="${i}">×</button>`;
    wrap.appendChild(row);
  });
  wrap.querySelectorAll('[data-remove]').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.dataset.remove, 10);
      WISHLIST.splice(idx, 1);
      renderWishlist();
    });
  });
}

document.querySelector('.btn-add-cart')?.addEventListener('click', () => {
  if (!currentProduct) return;
  CART.push(currentProduct);
  renderCart();
  document.getElementById('cartDrawer').setAttribute('aria-hidden', 'false');
});

document.querySelector('.btn-add-wishlist')?.addEventListener('click', () => {
  if (!currentProduct) return;
  if (!WISHLIST.includes(currentProduct)) WISHLIST.push(currentProduct);
  renderWishlist();
  document.getElementById('wishlistDrawer').setAttribute('aria-hidden', 'false');
});

document.getElementById('btnCart')?.addEventListener('click', () => {
  renderCart();
  document.getElementById('cartDrawer').setAttribute('aria-hidden', 'false');
});
document.getElementById('btnWishlist')?.addEventListener('click', () => {
  renderWishlist();
  document.getElementById('wishlistDrawer').setAttribute('aria-hidden', 'false');
});
document.getElementById('btnAccount')?.addEventListener('click', () => {
  document.getElementById('accountModal').setAttribute('aria-hidden', 'false');
});

document.querySelectorAll('#cartDrawer [data-close], #wishlistDrawer [data-close]').forEach(el => {
  el.addEventListener('click', () => {
    document.getElementById('cartDrawer').setAttribute('aria-hidden', 'true');
    document.getElementById('wishlistDrawer').setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  });
});

document.querySelectorAll('#accountModal [data-close]').forEach(el => {
  el.addEventListener('click', () => {
    document.getElementById('accountModal').setAttribute('aria-hidden', 'true');
  });
});

document.getElementById('accountForm')?.addEventListener('submit', e => {
  e.preventDefault();
  document.getElementById('accountModal').setAttribute('aria-hidden', 'true');
});

document.getElementById('btnMenu')?.addEventListener('click', () => {
  document.getElementById('menuDrawer').setAttribute('aria-hidden', 'false');
});
document.querySelectorAll('#menuDrawer [data-close]').forEach(el => {
  el.addEventListener('click', () => {
    document.getElementById('menuDrawer').setAttribute('aria-hidden', 'true');
  });
});

document.querySelectorAll('[data-add-product]').forEach(btn => {
  btn.addEventListener('click', () => {
    const key = btn.getAttribute('data-add-product');
    if (!key || !DATA[key]) return;
    CART.push(key);
    renderCart();
    document.getElementById('cartDrawer').setAttribute('aria-hidden', 'false');
  });
});

document.querySelectorAll('[data-buy-product]').forEach(btn => {
  btn.addEventListener('click', () => {
    const key = btn.getAttribute('data-buy-product');
    if (!key || !DATA[key]) return;
    CART.push(key);
    renderCart();
    const drawer = document.getElementById('cartDrawer');
    drawer.setAttribute('aria-hidden', 'false');
    const checkout = drawer.querySelector('.drawer-footer .btn-primary');
    if (checkout) {
      checkout.style.boxShadow = '0 12px 40px rgba(214,186,138,0.35)';
      setTimeout(() => checkout.style.boxShadow = '', 1200);
    }
  });
});
