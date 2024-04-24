import realcode from './assets/realcode.png';
import makon from './assets/makon.jpg'

const users = [
  {
    userId: 0,
    userImage: realcode,
    userName: 'Realcode test user',
    messages: [
      {
        text: 'Anaxolos tvart',
        date: '12.01.2024'
      }
    ]
  },
  {
    userId: 1,
    userImage: makon,
    userName: 'Makon test user',
    messages: [
      {
        text: 'Pezdes tvart',
        date: '12.01.2020'
      }
    ]
  }
]

export default users