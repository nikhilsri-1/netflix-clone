"use client";
import React from 'react';
import dynamic from 'next/dynamic';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import $ from 'jquery';

// Ensure jQuery is globally available
if (typeof window !== "undefined") {
  window.$ = window.jQuery = $;
}

const OwlCarousel = dynamic(() => import('react-owl-carousel'), {
  ssr: false,
});

const NewsSection = () => {
  const carouselOptions = {
    autoplay: true,
    smartSpeed: 1500,
    items: 1,
    dots: false,
    loop: true,
    nav: true,
  };

  // JSON data for the carousel
  const items = [
    {
      "title": "Delhi Crime",
      "image": "https://occ-0-6246-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABTcvHMMSHeJ61ElsD1UE0D8yUNkZZMPSqp-qdadD8XseEv1LRprnenJXM3tGYIHJmvZDlLYJRf1GN0vXkmVixXCkYW95PaZNljNA4AfdnDTXoOQMu6ktdjBQeTSR_NBdaXZb.jpg?r=66c",
      "url": "/watch/81076756?tctx=1%2C0%2C%2C%2C%2C%2C%2C%2C%2CVideo%3A81076756%2C"
    },
    {
      "title": "Khakee: The Bihar Chapter",
      "image": "https://occ-0-6246-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABR9hjEw3XrdiOxnGiOT5Xrs2XaZZ4z5E5WzYxOxWwRk_ha-yyXOGXklVDyrX9YCJvOF3VwnLXHJTnSnaHI76jGMFpFgAk0afALgBSCgb1fV8Kc8ONs4UCmNxByi7-JH8OIUP.jpg?r=cd1",
      "url": "/watch/81290872?tctx=1%2C1%2C%2C%2C%2C%2C%2C%2C%2CVideo%3A81290872%2C"
    },
    {
      "title": "Sacred Games",
      "image": "https://occ-0-6246-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABXqu7Ma2K3l3ClRgAluEz74Tqaf35Rvg0idc4wQXF0zIWEMasYa07hE6AIw-Do1H3krwCmeSuhV-kJ6T6lTBex8ngnawYpVVJ2RphuvtgJt-930HIh7IMDA2pM1lgmIbyYWs.jpg?r=5e3",
      "url": "/watch/80115328?tctx=1%2C2%2C%2C%2C%2C%2C%2C%2C%2CVideo%3A80115328%2C"
    },
    {
      "title": "Jamtara - Sabka Number Ayega",
      "image": "https://occ-0-6246-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABVJWeL_3wBellXfCxVOvKAIwnVtDsR-XxRUBXR8mlDdKgPcroCNwGb2CRnxhAz7czgy6wHvxpkOOalUJQfVJ4tjZa82hbYwsETvj7XuOMIbNFAYBg54SpobfkLksO_Z4fxSE.jpg?r=c9d",
      "url": "/watch/81183491?tctx=1%2C3%2C%2C%2C%2C%2C%2C%2C%2CVideo%3A81183491%2C"
    },
    {
      "title": "Rana Naidu",
      "image": "https://occ-0-6246-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABX4JYcPX5C8-CW-1d9V0HDuIYuo1vPIjOUnzbFH8w6BC-uiiqgnlX0APWlA96pyDDyIfjBV5-EP52WQvdLKgpv8qHKKKoCy9qo0VecOu2TR0CSXSJoWRtU-2qyovDZyx5s4A.jpg?r=7f3",
      "url": "/watch/81313283?tctx=1%2C4%2C%2C%2C%2C%2C%2C%2C%2CVideo%3A81313283%2C"
    },
    {
      "title": "CAT",
      "image": "https://occ-0-6246-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABSNwtjeX7aIF4pFTlUEFGp1CBzoUGZB1WdF8LvumhpjF2fmMCjYPaGCvLWFxVqtffcN_BLkxMyHEitJMqwRnnlWQospPmEkY1-ucL2CdxUXDMwmBuj5ZfetpvPoJkpxkT8L-.jpg?r=c71",
      "url": "/watch/81281063?tctx=1%2C5%2C%2C%2C%2C%2C%2C%2C%2CVideo%3A81281063%2C"
    },
    {
      "title": "Selection Day",
      "image": "https://occ-0-6246-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABVUKS_Yx9W1R44TR0qibCTj2CD5YWgmzsGXkSrNTxW6lT_ySwtZE_0w7mVoS2MHyjcdfauK_D7qotUiKJXF9jmLZiFfSeqGjM7u95XlI0bxyjUh0Ds4NG52iShMvuictpHCa.jpg?r=877",
      "url": "/watch/80194558?tctx=1%2C6%2C%2C%2C%2C%2C%2C%2C%2CVideo%3A80194558%2C"
    },
    {
      "title": "Kohrra",
      "image": "https://occ-0-6246-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABczQPXkzZeGEwNBbeauc8gTD675mHiOv7hDRuDHlCstZmtw-1qgD4SDHA2_bdSy_abl4RMb3OvsnkumEs0Plm-eedXi1Q8rf2vts-JeM4jux5we6ptr3QP481eExYSWlJG2f.jpg?r=293",
      "url": "/watch/81443393?tctx=1%2C7%2C%2C%2C%2C%2C%2C%2C%2CVideo%3A81443393%2C"
    }
  ];

  return (
    <div className="container-fluid py-3">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <OwlCarousel
              className="owl-carousel-2 carousel-item-1 position-relative mb-3 mb-lg-0"
              {...carouselOptions}
            >
              {items.map((item) => (
                <div key={item.title} className="item">
                  <a href={item.url} target="_blank" rel="noopener noreferrer">
                    <img src={item.image} alt={item.title} />
                    <div className="carousel-caption">
                      <h5>{item.title}</h5>
                    </div>
                  </a>
                </div>
              ))}
            </OwlCarousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsSection;
