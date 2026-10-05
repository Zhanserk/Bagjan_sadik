import React from 'react';
import { ABOUT_FACTS, ABOUT_PHOTOS, KINDERGARTEN as K } from '../data/site';

export default function About() {
  return (
    <section className="about" id="about">
      <div className="wrap about-grid">
        <div className="about-photos reveal">
          <img className="tall" src={ABOUT_PHOTOS[0]} alt="Топ бөлмесі" loading="lazy" />
          <img src={ABOUT_PHOTOS[1]} alt="Балабақша ғимараты" loading="lazy" />
          <img src={ABOUT_PHOTOS[2]} alt="Жеке шкафтар" loading="lazy" />
        </div>

        <div className="about-text reveal">
          <p className="kicker">Біз туралы</p>
          <h2>Әрбір бөлме — балаға арналған <em>кішкентай әлем</em></h2>
          <p>
            {K.legal} {K.address} мекенжайында орналасқан. Әрбір жас тобына арнайы бөлінген киім шешетін бөлме,
            ойын бөлмесі, жатын бөлмесі және дәретхана бар — әр топ бір-бірінен оқшауланған.
          </p>
          <p>
            Едендер заманауи жылыту жүйесімен жабдықталған, терезелер қауіпсіздік құрылғыларымен қамтамасыз етілген.
            Барлық жиһаз бен жабдық балалардың бой-жас ерекшеліктеріне сай таңдалған.
          </p>
          <div className="about-facts">
            {ABOUT_FACTS.map((f) => (
              <div className="fact" key={f.title}>
                <span className="fact-ic">{f.ic}</span>
                <div><b>{f.title}</b><small>{f.text}</small></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
