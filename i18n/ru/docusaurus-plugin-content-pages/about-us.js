import React from 'react';
import Layout from '@theme/Layout';
import styles from './about-us.module.css';

export default function AboutUs() {
    return (
        <Layout
            title="О нас"
            description="Узнайте больше о TikMatrix - кто мы, наша миссия и видение">
            <div className="container">
                <div className={styles.aboutContent}>
                    <h1>О нас</h1>

                    <h2>О компании</h2>
                    <p>TikMatrix разработан компанией TikMatrix LLC, зарегистрированной в штате Вайоминг, США. С момента основания мы посвятили себя созданию инновационных инструментов для маркетинга в социальных сетях, помогая предприятиям и создателям контента максимизировать их онлайн-влияние.</p>

                    <h2>Наша миссия</h2>
                    <p>Наша миссия - разрабатывать мощные, простые в использовании инструменты для маркетинга в социальных сетях, помогающие предприятиям любого размера эффективно развивать свое онлайн-присутствие. Мы стремимся сделать передовые маркетинговые технологии доступными для всех.</p>

                    <h2>Наши продукты</h2>
                    <p>Наш флагманский продукт TikMatrix разработан для профессионального управления аккаунтами TikTok и автоматизации маркетинга. Мы также предоставляем дополнительные инструменты для других платформ:</p>
                    <ul>
                        <li><strong>TikMatrix</strong> - Профессиональный инструмент управления аккаунтами TikTok и маркетинга</li>
                        <li><strong>IgMatrix</strong> - Решение для маркетинга и управления аккаунтами Instagram</li>
                        <li><strong>VideoMagic</strong> - Инструмент для создания и оптимизации видеоконтента</li>
                        <li><strong>YtMatrix</strong> - Платформа для роста и управления каналами YouTube</li>
                    </ul>

                    <h2>Наша технология</h2>
                    <p>В TikMatrix мы используем передовые технологии для предоставления надежных, эффективных и безопасных инструментов маркетинга в социальных сетях. Наша команда разработчиков постоянно работает над улучшением продуктов и внедрением последних отраслевых инноваций, обеспечивая нашим пользователям всегда лучшие маркетинговые инструменты.</p>

                    <h2>Наши ценности</h2>
                    <p>Мы твердо верим в:</p>
                    <ul>
                        <li><strong>Инновации</strong> - Постоянное улучшение наших продуктов для удовлетворения изменяющихся потребностей рынка</li>
                        <li><strong>Надежность</strong> - Обеспечение стабильной и безопасной работы наших инструментов</li>
                        <li><strong>Доступность</strong> - Предоставление передовых маркетинговых инструментов предприятиям любого размера</li>
                        <li><strong>Успех клиентов</strong> - Приоритет роста и достижений пользователей</li>
                    </ul>

                    <h2>Присоединяйтесь к нам</h2>
                    <p>Независимо от того, являетесь ли вы владельцем малого бизнеса, создателем контента или маркетинговым специалистом, TikMatrix предоставляет инструменты, необходимые для успеха в сегодняшней конкурентной среде социальных сетей. Наша команда посвящена помощи в достижении ваших маркетинговых целей и расширении онлайн-влияния.</p>

                    <h2>Свяжитесь с нами</h2>
                    <p>Есть вопросы или нужна помощь? Мы всегда к вашим услугам!</p>
                    <p>Электронная почта: support@tikmatrix.com</p>
                    <p>Присоединяйтесь к нашему сообществу: <a href="https://t.me/tikmatrix_support">Группа поддержки Telegram</a></p>
                </div>
            </div>
        </Layout>
    );
}
