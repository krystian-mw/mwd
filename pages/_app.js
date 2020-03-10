import App from 'next/app'
import Router from 'next/router'
import Head from 'next/head'

import NProgress from 'nprogress'

import 'nprogress/nprogress.css'

Router.events.on('routeChangeStart', url => {
  NProgress.start()
})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())


export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
        <>
            <Head>
                <script async src="https://www.googletagmanager.com/gtag/js?id=UA-160281793-1"></script>
                <script dangerouslySetInnerHTML={{
                    __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());

                        gtag('config', 'UA-160281793-1');
                        `
                }}>
                </script>
            </Head>
            <Component {...pageProps} />
        </>
    )
  }
}