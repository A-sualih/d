import React from 'react'
import PlaceList from '../components/PlaceList'
import { useParams } from 'react-router-dom'

const UserPlaces = () => {
  const DUMMY_PLACE=[
   {
      id: "m1",
      title: "The Kingdom of the Two Holy Mosques",
      description: `مMecca is one of the most important cities in Saudi Arabia and is considered the holiest city in Islam. It is located in the western part of the country near the Red Sea. Mecca is famous for being the destination for millions of Muslims performing Hajj and Umrah each year.`,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Flag_of_Saudi_Arabia.svg/250px-Flag_of_Saudi_Arabia.svg.png",
      address: "24° 39′ 0″ N, 46° 46′ 0″ E",
      location: { lat: 40.884884, lng: -38.4848489 },
      creator: 'u1',
    },
    {
    id:"m2",
    title:" The Kin. of the Two Holy Mosques",
  description: `مMecca is one of the most important cities in Saudi Arabia and is considered the holiest city in Islam. It is located in the western part of the country near the Red Sea. Mecca is famous for being the destination for millions of Muslims performing Hajj and Umrah each year.`,
    imageUrl:"https://t3.ftcdn.net/jpg/03/69/05/58/240_F_369055811_Pbu470im7huHANsA3I7uK5bGRRjp2wnH.jpg",
    address:"24° 39′ ″ N, 46° 46′ 0″ E",
    location:{
      lat:40.884884,
      lng:-38.4848489
    },
    creator:'u2',

  },
]
const userId=useParams().userId;
const loadedPlaces=DUMMY_PLACE.filter(place=>place.creator===userId)
  return (
    <div>
      <PlaceList items={loadedPlaces}/>
    </div>
  )
}

export default UserPlaces
