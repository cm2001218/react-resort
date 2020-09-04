import React, { Component } from "react";
import { RoomContext } from "../context";
import Loading from "./Loading";
import Room from "./Room";
import Title from "./Title";

export class FeaturedRooms extends Component {
  static contextType = RoomContext;
  render() {
    let { featuredRooms: rooms, loading } = this.context;

    rooms = rooms.map((room) => <Room key={room.id} room={room}></Room>);
    return (
      <div className="featured-rooms">
        <Title title="featured rooms"></Title>
        <div className="featured-rooms-center">{loading ? <Loading></Loading> : rooms}</div>
      </div>
    );
  }
}

export default FeaturedRooms;
