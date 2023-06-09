import { createGetInitialProps } from '@mantine/next'
import Document, { Head, Html, Main, NextScript } from 'next/document'

const getInitialProps = createGetInitialProps()

export default class _Document extends Document {
  static getInitialProps = getInitialProps

  render(): JSX.Element {
    return (
      <Html lang="en">
        <Head />
        <body className="bg-gray-100 text-custom-base text-black">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
