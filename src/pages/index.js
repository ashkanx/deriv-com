import React, { Component } from 'react'

import Layout from '../components/layout/layout'
import Image from '../components/elements/image'
import SEO from '../components/containers/seo'
import Localize from '../components/containers/localize'
import Button from '../components/form/button'
import Modal from '../components/elements/modal'

class Home extends Component {
    state = {
        show_modal: false,
    }

    toggleModal = e => {
        e.stopPropagation()
        this.setState({
            show_modal: !this.state.show_modal,
        })
    }

    render() {
        return (
            <Layout>
                <SEO title="Home" />
                <h1>
                    <Localize translate="Home" />
                </h1>
                <Image
                    width="300px"
                    img_name="practice.png"
                    alt="gatsby astronaut"
                />
                <div>
                    <Button onClick={this.toggleModal} type="secondary">
                        secondary button example
                    </Button>
                </div>
                <Modal
                    toggle={this.toggleModal}
                    is_open={this.state.show_modal}
                >
                    <div>Hello from modal</div>
                </Modal>
            </Layout>
        )
    }
}

export default Home