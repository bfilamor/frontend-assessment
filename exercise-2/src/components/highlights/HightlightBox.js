import React from 'react'
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const HightlightBox = ({ highlight, extraLargeScreenColumns, mediumScreenColumns, index }) => {
    const { text, image } = highlight;
    return (
        <motion.div
            initial={{ opacity: 0, y: "20px" }}
            whileInView={{ opacity: 1, y: 0 }}
            className={`col-xxl-${extraLargeScreenColumns} col-md-${mediumScreenColumns} mb-lg-0 mb-5 highlight__box position-relative`}>
            <div
                className="p-3 border border-2 rounded-2 d-flex flex-column justify-content-between text-center h-100 shadow-sm bg-white">
                <div>
                    <div className='overflow-hidden mb-3'>
                        <img src={image} alt={image}
                            className="img-fluid d-block w-100" />
                    </div>
                    <p>{text}</p>
                </div>
                <div>
                    <Link className="btn btn-outline-dark px-3 fw-bold border-3 rounded-pill" to={`/highlights/${index}`}>READ MORE</Link>
                </div>
            </div>
        </motion.div>
    )
}
