const EventEmitter = require('events')

const myEvent = new EventEmitter()
myEvent.once('newListener', (eventName, listener) => {
  if (eventName === 'launch') {
    myEvent.on(eventName, () => {
        console.log('Abc');
    })
  }
})

myEvent.on('launch', () => {
  console.log('Ab');
})
myEvent.emit('launch')
