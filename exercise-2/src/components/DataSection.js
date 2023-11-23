import React, { useEffect, useState } from 'react';
import data from "../data/data.json"
import { Container, Tab, Nav, Accordion } from 'react-bootstrap';
import { useMediaQuery } from 'react-responsive'
import { motion } from 'framer-motion';

export const DataSection = () => {

    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 992px)'
    })

    const [sectionData, setSectionData] = useState([]);
    const [activeKey, setActiveKey] = useState(0);

    const getData = () => {
        //simulating data fetching from real APIs/backends
        let dataArr = [];
        data.forEach((data) => {
            dataArr.push(data);
        })

        setSectionData(dataArr);
    }

    useEffect(() => {
        getData();
    }, [])
    return (
        <motion.section
            initial={{ opacity: 0, }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className='py-5 bg-dark text-white'>
            <Container>
                {(sectionData?.length > 0) ?
                    isDesktopOrLaptop ?
                        <Tab.Container defaultActiveKey="0" activeKey={activeKey ? activeKey : 0}>
                            <Nav variant="pills" className='mb-4 d-flex justify-content-center' data-bs-theme="dark">
                                {
                                    sectionData.map((data, index) => (
                                        <Nav.Item key={index}>
                                            <Nav.Link className='fs-5 text-white fw-bold' onClick={() => setActiveKey(index)} eventKey={index}>{data.title}</Nav.Link>
                                        </Nav.Item>
                                    ))
                                }
                            </Nav>
                            <Tab.Content>
                                {sectionData.map((data, index) => (
                                    <Tab.Pane eventKey={index} key={index}  >
                                        <div dangerouslySetInnerHTML={{ __html: data.content }} />
                                    </Tab.Pane>
                                ))}

                            </Tab.Content>
                        </Tab.Container> :

                        <Accordion defaultActiveKey="0" activeKey={activeKey} onSelect={(eventKey) => setActiveKey(eventKey)} data-bs-theme="dark">
                            {sectionData.map((data, index) => (
                                <Accordion.Item key={index} eventKey={index}>
                                    <Accordion.Header>{data.title}</Accordion.Header>
                                    <Accordion.Body>
                                        <div dangerouslySetInnerHTML={{ __html: data.content }} />
                                    </Accordion.Body>
                                </Accordion.Item>
                            ))}
                        </Accordion>

                    : <p className='text-center'>No Data Available.</p>
                }
            </Container>
        </motion.section>

    )
}
