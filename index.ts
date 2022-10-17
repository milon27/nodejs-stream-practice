import express, { Application, Request, Response } from 'express'
import { pipeline, Readable, Transform, Writable } from 'stream'
import fs from 'fs'

const app: Application = express()

app.get('/', (req: Request, res: Response) => {
    /**
     *  @send response
     */
    // const buffer = Buffer.from("I'm a string!", 'utf-8');
    // const stream = Readable.from(buffer.toString());
    // stream.pipe(res) 
    /**
     * @pipe
     */
    // source [readable stream] .pipe(destination [writable stream])

    /**
     *  @copy data from one file to a new file
     */
    // const stream = fs.createReadStream('pnpm-lock.yaml')
    // const wstream = fs.createWriteStream('hello.txt.yaml')
    // 1st way---------
    // stream.pipe(wstream, {
    //     end: true
    // })
    // res.send("ok")
    // 2nd way------------
    // stream.on("data", (chunk) => {
    //     wstream.write(chunk)
    // })
    // res.send("ok")

    /**
     *  @create_our_own_stream
     */
    // ==========read=============
    // const readable = new Readable({
    //     read: () => { },
    //     highWaterMark: 16 * 1024 //in bytes =16kb default
    // })
    // readable.on("data", (chunk: Buffer) => {
    //     console.log("reading: ",chunk.toString());
    //  here we can write chunk to writable stream.....
    // })
    // res.send(readable.push("how are you?"))
    // ==========write=============
    // const writtable = new Writable({
    //     write: (chunk) => {
    //         console.log("writting: ", chunk.toString());
    //     }
    // })
    // res.send(writtable.write("how are you"))

    /**
    * @create_transform_duplex_stream
    * @string_processing using pipe and transform stream
    */
    // const buffer = Buffer.from("I'm a string!", 'utf-8');
    // const rStream = Readable.from(buffer.toString());
    // const transformStream = new Transform({
    //     transform: (chunk: Buffer, encoding, callback) => {
    //         const newchunk = chunk.toString().toUpperCase()
    //         callback(null, newchunk)
    //     }
    // })
    // instead of doing multiple error catch
    // rStream
    //     .pipe(transformStream).on("error", (er) => console.log(er))
    //     .pipe(res).on("error", (er) => console.log(er))
    // use pipeline
    // pipeline(rStream, transformStream, res, (err) => {
    //     if (err) {
    //         console.error("got some error", err.message);
    //         // if error ,how to send response or close the server response
    //         return
    //     }
    //     console.log("sucess");
    //     // if success response will be send automatically
    // })
})

app.listen(2727, () => console.log("running.."))
