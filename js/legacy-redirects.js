/**
 * Client-side remaps for old WordPress paths and trailing slashes.
 *
 * GitHub Pages cannot send true HTTP 301/302 from this repo. There is no
 * _redirects support (that is Netlify). This file only runs on 404.html:
 * the response status is still 404, then the browser is sent to the new URL.
 * For real 301s, put Cloudflare (or similar) in front of the domain.
 */
(function () {
    var exact = {
        '/about/': '/about.html',
        '/about/our-history/': '/about.html',
        '/about/service-areas/': '/about.html',
        '/contact/': '/contact.html',
        '/contact-us/': '/contact.html',
        '/contact-us': '/contact.html',
        '/contact-fence-builders.html': '/contact.html',
        '/faq/': '/faq.html',
        '/gallery/': '/gallery.html',
        '/services/': '/services.html',
        '/sbf-services/': '/services.html',
        '/sbf-services': '/services.html',
        '/home-fences-services.html': '/services.html',
        '/san-diego-services/': '/services.html',
        '/san-diego-services': '/services.html',
        '/commercial-fencing': '/services.html',
        '/commercial-fencing/': '/services.html',
        '/specialties/': '/gallery.html',
        '/specialties': '/gallery.html',
        '/sbf-portfolio/': '/gallery.html',
        '/sbf-portfolio': '/gallery.html',
        '/portfolio/': '/gallery.html',
        '/portfolio': '/gallery.html',
        '/online-forms/': '/contact.html#materials-quote',
        '/online-forms': '/contact.html#materials-quote',
        '/_quote-form-with-parts/': '/contact.html#materials-quote',
        '/_quote-form-with-parts': '/contact.html#materials-quote',
        '/privacy-policy/': '/',
        '/privacy-policy': '/',
        '/blog/': '/',
        '/blog': '/',
        '/author/sbfcoadmin/': '/',
        '/author/sbfcoadmin': '/',
        '/author/southbayfence/': '/',
        '/author/southbayfence': '/',
        '/chain-link-fence-enclosure/': '/gallery.html#chain-link-enclosure',
        '/chain-link-fence-enclosure': '/gallery.html#chain-link-enclosure',
        '/commercial-chain-link-cage/': '/gallery.html#chain-link-enclosure',
        '/commercial-chain-link-cage': '/gallery.html#chain-link-enclosure',
        '/baseball-fields-outfields': '/gallery.html#batting-cages-tennis-courts',
        '/baseball-fields-outfields/': '/gallery.html#batting-cages-tennis-courts',
        '/chain-link-fencing-2': '/gallery.html#chain-link-fence',
        '/chain-link-fencing-2/': '/gallery.html#chain-link-fence',
        '/ornamental-iron-fencing': '/gallery.html#commercial-iron',
        '/ornamental-iron-fencing/': '/gallery.html#commercial-iron',
        '/category/tennis-court-fencing/': '/gallery.html#batting-cages-tennis-courts',
        '/category/tennis-court-fencing': '/gallery.html#batting-cages-tennis-courts',
        '/category/chain-link-fences/': '/gallery.html#chain-link-fence',
        '/category/chain-link-fences': '/gallery.html#chain-link-fence',
        '/category/commercial-fences/': '/gallery.html',
        '/category/commercial-fences': '/gallery.html',
        '/category/iron-fences/': '/gallery.html#commercial-iron',
        '/category/iron-fences': '/gallery.html#commercial-iron',
        '/category/guard-rail-split-rail-barriers/': '/gallery.html#guard-rails',
        '/category/guard-rail-split-rail-barriers': '/gallery.html#guard-rails',
        '/category/structures-shade-cloth/': '/gallery.html#batting-cages-tennis-courts',
        '/category/structures-shade-cloth': '/gallery.html#batting-cages-tennis-courts',
        '/category/quote-request/': '/contact.html',
        '/category/quote-request': '/contact.html',
        '/category/articles/': '/faq.html',
        '/category/articles': '/faq.html',
        '/category/safety/': '/gallery.html',
        '/category/safety': '/gallery.html',
        '/category/uncategorized/': '/',
        '/category/uncategorized': '/',
        '/san-diego-services/baseball-fields-outfields/': '/gallery.html#batting-cages-tennis-courts',
        '/san-diego-services/chain-link-fences/': '/gallery.html#chain-link-fence',
        '/san-diego-services/commercial-fencing/': '/gallery.html',
        '/san-diego-services/custom-chain-link-cages/': '/gallery.html#chain-link-enclosure',
        '/san-diego-services/ornamental-iron-fencing/': '/gallery.html#commercial-iron',
        '/san-diego-services/tennis-courts/': '/gallery.html#batting-cages-tennis-courts'
    };

    var prefixes = [
        ['/gallery/', '/gallery.html'],
        ['/specialties/', '/gallery.html'],
        ['/sbf-portfolio/', '/gallery.html'],
        ['/category/', '/gallery.html'],
        ['/san-diego-services/', '/services.html'],
        ['/about/', '/about.html'],
        ['/author/', '/'],
        ['/blog/', '/'],
        ['/_quote-form-with-parts/', '/contact.html#materials-quote']
    ];

    var path = location.pathname || '/';
    if (path.length > 1) {
        path = path.replace(/\/{2,}/g, '/');
    }

    var dest = exact[path];

    if (!dest) {
        for (var i = 0; i < prefixes.length; i++) {
            if (path.indexOf(prefixes[i][0]) === 0) {
                dest = prefixes[i][1];
                break;
            }
        }
    }

    if (!dest && /\/$/.test(path) && path !== '/') {
        var bare = path.slice(0, -1);
        if (bare === '/contact' || bare === '/about' || bare === '/faq' || bare === '/gallery' || bare === '/services') {
            dest = bare + '.html';
        }
    }

    if (dest) {
        var hash = dest.indexOf('#') !== -1 ? '' : location.hash;
        location.replace(dest + location.search + hash);
    }
})();
