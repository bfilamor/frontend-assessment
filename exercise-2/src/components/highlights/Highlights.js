import React from 'react'
import { highlights } from '../../data/highlightsData';
import { Row, Container } from 'react-bootstrap';
import { HightlightBox } from './HightlightBox';

export const Highlights = () => {

    return (
        <>
            <section className="bg-light pt-5 pb-lg-5 pb-0">
                <Container>
                    {
                        (highlights?.length > 0) ?
                            <Row className='justify-content-center'>
                                {
                                    highlights.map((highlight, index) => (
                                        <HightlightBox key={index} index={index} highlight={highlight} extraLargeScreenColumns={3} mediumScreenColumns={4} />
                                    ))
                                }
                            </Row>
                            : <p>No Highlights Available.</p>
                    }
                </Container>
            </section>
        </>
    )
}
