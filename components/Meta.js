import Head from 'next/head'

const Meta = ({title}) => {
    return (
        <Head>
            <meta charSet="utf-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <title>{title}</title>
            <meta name="description" content="
            Super Cyborgs are citizens of NEON CITY, the most technologically advanced city
            in the whole galaxy. It is the year 2099, and people have started to become more machine than man. 
            " />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
    )
}

export default Meta
