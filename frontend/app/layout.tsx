// app/layout.tsx
import type { Metadata } from 'next'
import { client } from '@/sanity/client'
import { NAVIGATION_QUERY } from '@/lib/navigation/queries'
import { FOOTER_QUERY } from '@/lib/footer/queries'
import { ThemeProvider } from 'next-themes'
import NavigationBar from '@/components/navigation/NavigationBar'
import Footer from '@/components/footer/Footer'
import './../styles/globals.css'
import Script from 'next/script'

const fallbackImage = '/bizmagnets200x200.png'

export const metadata: Metadata = {
  title: 'ChatOps Platform on WhatsApp | Turn Chats into Actions',
  description:
    'Turn WhatsApp messages into trackable tickets. Automate ops, support, and field team workflows with BizMagnets — the ChatOps platform built for growing teams.',
  robots: 'index, follow',
    icons: {
    icon: '/favicon.ico',
  },
  metadataBase: new URL('https://bizmagnets.ai'),
  alternates: {
    canonical: '/',
  },
  authors: [
    {
      name: 'Prasanna K Ram',
      url: 'https://www.linkedin.com/in/prasannakram/',
    },
  ],
  openGraph: {
    title: 'BizMagnets is the ChatOps platform built on top of WhatsApp. Turn chats into tickets, tasks, and workflows—without changing how your teams work.',
    description:
      'Drowning in WhatsApp groups and Excel chaos? BizMagnets gives you clarity, speed, and control — with tickets, tracking, and smart workflows on WhatsApp.',
    url: 'https://bizmagnets.ai',
    siteName: 'BizMagnets',
    type: 'website',
    locale: 'en_US',
    // publishedTime: '2025-07-01T00:00:00.000Z',
    images: [
      {
        url: 'https://bizmagnets.ai/bizmagnets200x200.png',
        width: 1200,
        height: 630,
        alt: 'BizMagnets logo – ChatOps for WhatsApp',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BizMagnets is the ChatOps platform built on top of WhatsApp. Turn chats into tickets, tasks, and workflows—without changing how your teams work.',
    description:
      'Drowning in WhatsApp groups and Excel chaos? BizMagnets gives you clarity, speed, and control — with tickets, tracking, and smart workflows on WhatsApp.',
    images: [fallbackImage],
  },
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [navigation, footer] = await Promise.all([
    client.fetch(NAVIGATION_QUERY, {}, { next: { tags: ['navigation'] } }),
    client.fetch(FOOTER_QUERY, {}, { next: { tags: ['footer'] } }),
  ]) as any

  return (
    <html lang="en">
      <head>
            <link
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@400;700&family=Inter:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
        {/* Fb Domain Verification */}
        <meta name="facebook-domain-verification" content="rybndg5yg0rwvcldunggsz9uxl3bjj" />
        {/* <link rel="icon" href="../app/biz_m_logo.svg" /> */}
        {/* <link rel="icon" href="/biz_m_logo.svg" type="image/svg+xml" /> */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <link rel="manifest" href="/site.webmanifest" />
            <meta property="og:locale" content="en" />
            <meta property="og:url" content="https://bizmagnets.ai" />
            <meta property="og:type" content="website" />
            <meta property="og:description" content="Turn WhatsApp messages into trackable tickets. Automate ops, support, and field team workflows with BizMagnets — the ChatOps platform built for growing teams." />
            <meta property="og:image" content='https://bizmagnets.ai/bizmagnets200x200.png' />
            <meta property="og:logo" content="https://bizmagnets.ai/bizmagnets200x200.png" />


   {/* Google Tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-EPEDKFW8G1"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-EPEDKFW8G1');
            `,
          }}
        />

        {/* Facebook Pixel */}
        {/* <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '921126852732609');
              fbq('track', 'PageView');
            `,
          }}
        /> */}
        <Script
          id="fb-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', '921126852732609');
      fbq('track', 'PageView');
    `,
          }}
        />
        <noscript>
          <img height="1" width="1" style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=921126852732609&ev=PageView&noscript=1"
          />
        </noscript>

        {/* Microsoft Clarity */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "k7rqfz78jg");
            `,
          }}
        />

        {/* Segment */}
        {/* <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(){var i="analytics",analytics=window[i]=window[i]||[];
              if(!analytics.initialize)
              if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");
              else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","screen","once","off","on","addSourceMiddleware","addIntegrationMiddleware","setAnonymousId","addDestinationMiddleware","register"];
              analytics.factory=function(e){return function(){if(window[i].initialized)return window[i][e].apply(window[i],arguments);
              var n=Array.prototype.slice.call(arguments);
              if(["track","screen","alias","group","page","identify"].indexOf(e)>-1){
              var c=document.querySelector("link[rel='canonical']");
              n.push({__t:"bpc",c:c&&c.getAttribute("href")||void 0,p:location.pathname,u:location.href,s:location.search,t:document.title,r:document.referrer})}
              n.unshift(e);analytics.push(n);return analytics}};
              for(var n=0;n<analytics.methods.length;n++){
              var key=analytics.methods[n];analytics[key]=analytics.factory(key)}
              analytics.load=function(key,n){
              var t=document.createElement("script");
              t.type="text/javascript";t.async=!0;
              t.setAttribute("data-global-segment-analytics-key",i);
              t.src="https://cdn.segment.com/analytics.js/v1/" + key + "/analytics.min.js";
              var r=document.getElementsByTagName("script")[0];
              r.parentNode.insertBefore(t,r);analytics._loadOptions=n};
              analytics._writeKey="XSIDHcR8CZgVKRLgCeKHGNeqZ8NChu1B";
              analytics.SNIPPET_VERSION="5.2.0";
              analytics.load("XSIDHcR8CZgVKRLgCeKHGNeqZ8NChu1B");
              analytics.page();}}();
            `,
          }}
        />

        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(h,o,t,j,a,r){
                  h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                  h._hjSettings={hjid:6449421,hjsv:6};
                  a=o.getElementsByTagName('head')[0];
                  r=o.createElement('script');r.async=1;
                  r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                  a.appendChild(r);
              })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
            `,
          }}
        /> */}
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is BizMagnets?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "BizMagnets is a ChatOps platform ..."
          }
        },
        {
          "@type": "Question",
          "name": "Who needs BizMagnets?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Any mid-market team buried in WhatsApp and Excel ..."
          }
        }
      ]
    })
  }}
/>

   <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "BizMagnets",
      "url": "https://bizmagnets.ai",
      "logo": "https://bizmagnets.ai/logo.png",
      "founder": {
        "@type": "Person",
        "name": "Prasanna K Ram",
        "sameAs": "https://www.linkedin.com/in/prasannakram/"
      },
      "sameAs": [
        "https://www.linkedin.com/in/prasannakram/"
      ]
    })
  }}
/>

{/* 
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "WebSite", name: "BizMagnets", url: "https://bizmagnets.ai", potentialAction: { "@type": "SearchAction", target: "https://bizmagnets.ai/search?q={search_term_string}", "query-input": "required name=search_term_string" } }), }} /> */}

      </head>

      <body className="font-sans text-gray-900">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NRFNWQJH"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>

        {/* Google Tag Manager script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-NRFNWQJH');
            `,
          }}
        />

        {/* SalesIQ */}
        <script
          id="zsiqscript"
          src="https://salesiq.zohopublic.in/widget?wc=siq52c6bf4e840db88d23fd402b9801cec6bcf9f6ce7427d0a135fe823888fdbcf1"
          defer
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.$zoho=window.$zoho || {};
              $zoho.salesiq=$zoho.salesiq||{ready:function(){}}
            `,
          }}
        />

        {/* UTM Monitor */}
        <script src="https://biz.blr1.digitaloceanspaces.com/dev/utm.js"></script>

        {/* Time on page / Scroll tracking */}
        {/* <script
          dangerouslySetInnerHTML={{
            __html: `
              document.addEventListener("DOMContentLoaded", function () {
                const currentURL = window.location.href;
                if (currentURL.includes("MM_Tofu_Pros_Lead_Lp")) {
                  setTimeout(function () {
                    fbq('trackCustom', 'time_on_page_10s');
                  }, 10000);

                  let scrollFired = false;
                  window.addEventListener("scroll", function () {
                    const scrollTop = window.scrollY;
                    const windowHeight = window.innerHeight;
                    const docHeight = document.documentElement.scrollHeight;
                    const scrollPercent = (scrollTop + windowHeight) / docHeight;

                    if (scrollPercent >= 0.25 && !scrollFired) {
                      fbq('trackCustom', 'page_scroll_25');
                      scrollFired = true;
                    }
                  });
                }
              });
            `,
          }}
        /> */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
            document.addEventListener("DOMContentLoaded", function () {
              const targetSlugs = [
                "/MM_Tofu_Pros_Lead_Lp",
                "/Tofu_Support_2ndJuly2025_01"
              ];
              const path = window.location.pathname;
              const matched = targetSlugs.some(slug => path.includes(slug));

              if (matched && typeof fbq === "function") {
                setTimeout(function () {
                  fbq('trackCustom', 'time_on_page_10s');
                  console.log("[fbq] Tracked: time_on_page_10s");
                }, 10000);

                let scrollFired = false;
                window.addEventListener("scroll", function () {
                  if (scrollFired) return;
                  const scrollTop = window.scrollY;
                  const windowHeight = window.innerHeight;
                  const docHeight = document.documentElement.scrollHeight;
                  const scrollPercent = (scrollTop + windowHeight) / docHeight;

                  if (scrollPercent >= 0.25) {
                    fbq('trackCustom', 'page_scroll_25');
                    console.log("[fbq] Tracked: page_scroll_25");
                    scrollFired = true;
                  }
                });
              }
            });
          `,
          }}
        />

        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <NavigationBar navigation={navigation} />
          {children}
          <Footer footer={footer} />
        </ThemeProvider>
      </body>
    </html>
  )
}
