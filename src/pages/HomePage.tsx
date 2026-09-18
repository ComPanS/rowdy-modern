import { site, services, reviews } from '../content/site'

export function HomePage() {
  return (
    <>
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">BARBERSHOP · КРАСНОДАР</p>
          <h1 id="hero-title">{site.tagline}</h1>
          <p className="hero-text">{site.description}</p>
          <div className="hero-actions"><a className="button button-bright" href="#services">Выбрать услугу <span>↓</span></a><a className="text-link" href={site.routeUrl}>Как добраться <span>↗</span></a></div>
        </div>
        <div className="hero-media"><img src={site.heroImage} alt="Интерьер барбершопа Rowdy" /><div className="hero-stamp"><strong>5.0</strong><span>62 оценки<br />на Яндекс Картах</span></div></div>
      </section>

      <section className="intro section" id="about">
        <div className="section-kicker"><span>01</span><span>О нас</span></div>
        <div className="intro-grid"><h2>Место, где<br /><em>свой стиль</em><br />становится заметным.</h2><div className="intro-copy"><p>Крутые мастера, вкусный кофе, виски, кола, правильная музыка и внимание к деталям.</p><p>Можно с собакой. Есть парковка и доступная среда. Твой стиль начинается здесь.</p><div className="amenities"><span>◼ Можно с собакой</span><span>◼ Парковка</span><span>◼ Wi-Fi</span></div></div></div>
        <div className="image-strip"><img src="/media/gallery-1.jpg" alt="Детали интерьера Rowdy" /><img src="/media/gallery-2.jpg" alt="Барбершоп Rowdy" /><img src="/media/gallery-3.jpg" alt="Атмосфера Rowdy" /></div>
      </section>

      <section className="promo section" id="promos"><div className="promo-label">01 / АКЦИЯ</div><div><h2>Первый визит —<br /><em>особенный.</em></h2><p>Мужская стрижка с учётом формы головы и пожеланий, воск для одной зоны, охлаждающие патчи и чёрная очищающая маска для лица.</p></div><div className="promo-date">Действует<br />до 30.09.2026</div></section>

      <section className="services section" id="services"><div className="section-kicker"><span>02</span><span>Каталог</span></div><div className="services-heading"><h2>Услуги без<br /><em>лишнего.</em></h2><p>Выбирай задачу — остальное берёт на себя мастер.</p></div><div className="price-list">{services.map((service, index) => <div className="price-row" key={service.title}><span className="price-index">0{index + 1}</span><strong>{service.title}</strong><span className="price">{service.price}</span></div>)}</div></section>

      <section className="reviews section" id="reviews"><div className="section-kicker"><span>03</span><span>Отзывы</span></div><div className="reviews-top"><h2>Здесь<br /><em>кайфово.</em></h2><div className="rating"><strong>5.0</strong><span>★ ★ ★ ★ ★</span><small>51 отзыв на сайте</small></div></div><div className="review-grid">{reviews.map((review) => <blockquote key={review.author}><div className="quote-mark">“</div><p>{review.text}</p><footer><strong>{review.author}</strong><span>{review.date}</span></footer></blockquote>)}</div><a className="text-link" href={site.mapUrl}>Все отзывы на Яндекс Картах <span>↗</span></a></section>

      <section className="contact section" id="contacts"><div className="contact-photo"><img src={site.heroImage} alt="Интерьер Rowdy" /></div><div className="contact-details"><div className="section-kicker"><span>04</span><span>Контакты</span></div><h2>Увидимся<br /><em>в Rowdy.</em></h2><a className="phone" href={`tel:${site.phone.replace(/[^+\d]/g, '')}`}>{site.phone}</a><a className="address" href={site.mapUrl}>{site.address}<span>↗</span></a><div className="contact-actions"><a className="button button-bright" href={site.whatsappUrl}>Написать в WhatsApp</a><a className="social" href={site.telegramUrl}>Telegram ↗</a></div><p className="hours">Ежедневно до 22:00<br />Немецкая Деревня · 48 м от остановки</p></div></section>
    </>
  )
}
