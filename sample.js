import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

export default () => {
    const intensity = 'camping'

    return (
        <div className="root">
            <Head>
                <meta charSet="utf-8"/>
                <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
                <meta name = "viewport" content="width=device-width, initial-scale=1"/>
                <title>Wild Lamb testing</title>
            </Head>
            <style jsx>{`
            .root {
                font-familyL sans-serif;
                line-height: 1.33rem;
                margin-top: 8vh,
            }
            @media (min-width: 600px) {
                .root {
                    margin-left: 21vw;
                    margin-right: 21vw;
                }
            }
            img {
                max-width: 100%;
            }
            `}</style>

            <h1>Please work</h1>
            <h2>{`Book your ${intensity.toUpperCase()} Trip`}</h2>
            <p><Link href="/trips"><a>Sign-UP Now</a></Link></p>
            <img src={`/testing/${intensity}-camping.jpg`} alt={intensity}/>
        </div>
    )
}