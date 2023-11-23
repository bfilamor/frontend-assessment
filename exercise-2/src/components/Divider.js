import React from 'react'
import { motion } from 'framer-motion';

export const Divider = () => {
    return (
        <div className='mx-auto my-2' style={{ width: "150px", height: "8px" }}>
            <div className='row h-100'>
                <motion.div
                    initial={{ opacity: 0, x: "-50%" }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                    viewport={{ once: true }}
                    className='col bg-primary postion-relative' />
                <motion.div
                    initial={{ opacity: 0, x: "50%" }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 }}
                    viewport={{ once: true }}
                    className='col bg-white postion-relative' />
            </div>
        </div>
    )
}
