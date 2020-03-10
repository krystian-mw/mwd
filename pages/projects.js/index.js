import React from 'react'
import Head from 'next/head'
import Body from '../../layouts/bootstrap'

import { Spinner } from 'react-bootstrap'

export default class Projects extends React.Component {

    state = {
        loading: true,
        Component: null
    }

    render () {
        return (
            <>
                <Body>
                    <Spinner animation="border" />
                </Body>
            </>
        )
    }
}