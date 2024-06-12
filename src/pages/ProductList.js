import React from 'react';
import Layout from '@theme/Layout';
import styles from './ProductList.module.css';
import Translate, { translate } from '@docusaurus/Translate';

const products = [
    {
        id: 1,
        name: 'A4',
        description: 'The length and width are relatively small, but the height is high',
        model: 'N8,N9,N10,S8,S9+,S10,S20',
        price: '640$-1190$',
        imageUrl: 'img/A4.png',
    },
    {
        id: 2,
        name: 'A6',
        description: 'The length and width are relatively big, but the height is low(2u size)',
        model: 'N8,N9,N10,S8,S9+,S10,S20',
        price: '650$-1200$',
        imageUrl: 'img/A6.png',
    },
    {
        id: 3,
        name: 'AK',
        description: 'The length and width are relatively big, but the height is low(2u size) and more beautiful',
        model: 'N8,N9,N10,S8,S9+,S10,S20',
        price: '700$-1250$',
        imageUrl: 'img/AK.png',
    },
];

function ProductList() {
    return (
        <Layout title="Product List" description="The list of products">
            <div className={styles.productTitle}>
                <Translate>PhoneFarm Box is 20 Sumsung Phone Motherboard In an Box.Power-on self-starting, unified power supply, unified heat dissipation, unified usb connection, support OTG wired Internet access</Translate>
            </div>
            <div className={styles.productList}>
                {products.map(product => (
                    <div key={product.id} className={styles.product}>
                        <img src={product.imageUrl} alt={product.name} className={styles.productImage} />
                        <h2>{product.name}</h2>
                        <p>{product.description}</p>
                        <p className={styles.productModel}>{product.model}</p>
                        <p className={styles.productPrice}>{product.price}</p>
                        <p className={styles.shipping}>
                            <Translate>Shipping worldwide</Translate>
                        </p>
                        <a href="//t.me/+iGhozoBfAbI5YmE1" className="get-started-btn" target='_blank'>
                            <Translate>Contact to purchase</Translate>
                        </a>
                    </div>
                ))}
            </div>
        </Layout>
    );
}

export default ProductList;
