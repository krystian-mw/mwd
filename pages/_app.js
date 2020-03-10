import App from 'next/app'
import Link from 'next/link'
import Router from 'next/router'
import Head from 'next/head'

import NProgress from 'nprogress'
import { Container, Row } from 'react-bootstrap'

import NavBar from '../components/NavBar'

import 'bootstrap/dist/css/bootstrap.css'
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
        <Component {...pageProps} />
    )
  }
}