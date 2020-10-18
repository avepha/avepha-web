import Document, {Head, Html, Main, NextScript} from 'next/document'
import {GA_TRACKING_ID} from 'src/lib/gtag'

export default class AppDocument extends Document<{ isProduction: boolean }> {
  render() {
    return (
      <Html>
        <Head>
          {
            process.env.NODE_ENV === 'production' && (
              <>
                <script
                  async
                  src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
                />
                <script
                  dangerouslySetInnerHTML={{
                    __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
            
                        gtag('config', '${GA_TRACKING_ID}', {
                          page_path: window.location.pathname,
                        });
                      `,
                  }}
                />
              </>
            )
          }
        </Head>
        <body>
        <Main/>
        <NextScript/>
        </body>
      </Html>
    )
  }
}
