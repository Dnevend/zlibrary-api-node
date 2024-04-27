import { ZLibrary } from '../src/index.js'
import 'dotenv/config'

async function run() {

    const { EMAIL, PASSWORD } = process.env || {}

    const zLibrary = new ZLibrary({ email: EMAIL, password: PASSWORD })

    await zLibrary.login()

    // console.log(await zLibrary.domains())

    console.log(await zLibrary.profile())

    // console.log(await zLibrary.info())

    // console.log(await zLibrary.recommend())

    // console.log(await zLibrary.bookInfo(25450096, 'df81bb'))

    // const searchBooks = await zLibrary.search({ message: '野夫' })
    // console.log(searchBooks.books.map(it => ({ title: it.title })))
}

run()