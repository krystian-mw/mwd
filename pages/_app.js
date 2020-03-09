import App from 'next/app'
import Link from 'next/link'
import Router from 'next/router'
import Head from 'next/head'

import NProgress from 'nprogress'
import { Container, Row } from 'react-bootstrap'

import NavBar from '../components/NavBar'

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
          <link rel="stylesheet" type="text/css" href="/nprogress.css" />
          <link rel="stylesheet" type="text/css" href="/bootstrap.css" />
          <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        </Head>
        <Container>
            <Row>
                <NavBar />
            </Row>
            <Row>
                <Component {...pageProps} />
            </Row>
        </Container>
      </>
    )
  }
}