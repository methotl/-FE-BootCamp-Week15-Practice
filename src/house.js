import React from 'react';
import NewRoomForm from './new-room-form';

export default class House extends React.Component {
      render() {

          //function to check if the room name is null or empty
  const checkRoomName = (room) => {
    //console.log("Shows a room object:", room); //Shows a room object in the console

    //If the room name is null or empty return an empty string
    if (room === null || room === "") {
      return "";
    }
    //If the room name is not null or empty return the room name
    else {
      return room.name;
    }
  };

  //function to check if the room area is null or empty
  const checkRoomArea = (room) => {
    //If the room area is null or empty return an empty string
    if (room === null || room === "") {
      return "";
    }
    //If the room area is not null or empty return the room area
    else {
      return room.area;
    }
  };




        const rooms = this.props.data.rooms
            ? this.props.data.rooms.map((room, index) =>
                <li key={index}>
                    {checkRoomName(room)} Area: {checkRoomArea(room)}
                    <button onClick={e =>
                        this.props.deleteRoom(e, this.props.data, room)
                    }>Delete</button>
                </li>)
            : null;
           return (
                <div>
                    <h1>{this.props.data.name}</h1>
                    <ul>
                        {rooms}
                    </ul>
                    <NewRoomForm
                        addNewRoom={this.props.addNewRoom} data={this.props.data} />
                </div>
            );
    }
}