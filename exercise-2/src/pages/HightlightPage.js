import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { highlights } from '../data/highlightsData';
import { Container, Row } from 'react-bootstrap';
import { Banner } from '../components/Banner';

export const HightlightPage = () => {
    const navigate = useNavigate();
    const { highlightId } = useParams();

    const [highlightData, setHighlightData] = useState({});

    const { bannerImage, image, fullText, text } = highlightData;

   
    const bannerData = {
        desktopBanner : bannerImage,
        mobileBanner: image
    }

    useEffect(() => {
        if (highlights[highlightId]) {
            setHighlightData(highlights[highlightId]);
        } else {
            navigate("/")
        }
    }, [highlightId])

    return (
        <>
            <Banner bannerData={bannerData} />
            <Container className='py-5'>
                <Row className="justify-content-center">
                    <div className='col-lg-10'>
                        <p className='fs-5'>{text}</p>
                        <p className='fs-5'>{fullText}</p>
                        <div className='text-center my-3'>
                            <Link className='btn btn-secondary rounded-pill' to="/">Go Back</Link>
                        </div>
                    </div>
                </Row>
            </Container>
        </>


    )
}
