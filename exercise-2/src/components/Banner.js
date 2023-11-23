import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { motion } from "framer-motion"
import { Divider } from './Divider';

export const Banner = ({ bannerData }) => {
    const { title, subtitle, desktopBanner, mobileBanner } = bannerData;
    return (
        <section className="banner__section position-relative text-white text-center overflow-hidden">
            <picture>
                <source srcSet={desktopBanner} media="(min-width: 992px)"
                    className="w-100 img-fluid" />
                <img alt="banner" src={mobileBanner} className="w-100 img-fluid" />
            </picture>
            <div
                className="bg-dark bg-opacity-75 z-2 py-lg-0 py-5 position-absolute start-0 end-0  top-0 w-100 h-100 d-flex justify-content-center align-items-center">
                <Container>
                    <Row>
                        {(title) &&
                            <motion.h1
                                initial={{ opacity: 0, y: "-10px" }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.25 }}
                                viewport={{ once: true }}
                                className="fw-bold">
                                {title}
                            </motion.h1>
                        }

                        {(title && subtitle) && 
                            <Divider />
                        }
                        {(subtitle) &&
                            <motion.p
                                initial={{ opacity: 0, y: "-10px" }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                viewport={{ once: true }}
                                className="fw-light"
                            >{subtitle}</motion.p>

                        }

                    </Row>
                </Container>
            </div>
        </section>

    )
}
