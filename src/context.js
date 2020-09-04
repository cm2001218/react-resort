import React, { Component } from "react";
import items from "./data";

const RoomContext = React.createContext();

class RoomProvider extends Component {
  state = {
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: true,
    type: "all",
    capacity: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    breakfast: false,
    pets: false,
  };
  componentDidMount() {
    let rooms = this.formatData(items);
    let featuredRooms = rooms.filter((room) => room.featured === true);
    let maxPrice = Math.max(...rooms.map((room) => room.price));
    // let maxPrice = rooms.map((room) => room.price).reverse()[0];
    let maxSize = Math.max(...rooms.map((room) => room.size));

    this.setState({
      rooms,
      sortedRooms: rooms,
      featuredRooms,
      loading: false,
      price: maxPrice,
      maxPrice,
      maxSize,
    });
  }

  formatData(items) {
    let tempItems = items.map((item) => {
      let id = item.sys.id;
      let images = item.fields.images.map((item) => item.fields.file.url);
      let room = { ...item.fields, images, id };
      return room;
    });
    return tempItems;
  }

  getRoom = (slug) => {
    let tempRooms = [...this.state.rooms];
    let room = tempRooms.find((room) => room.slug === slug);
    return room;
  };

  handleChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState(
      {
        [name]: value,
      },
      this.filterRooms
    );
  };

  filterRooms = () => {
    let { rooms, sortedRooms, type, price, capacity, minSize, maxSize, breakfast, pets } = this.state;
    sortedRooms = rooms;
    price = parseInt(price);
    capacity = parseInt(capacity);

    if (type !== "all") {
      sortedRooms = sortedRooms.filter((room) => room.type === type);
    }
    if (capacity !== 1) {
      sortedRooms = sortedRooms.filter((room) => room.capacity === capacity);
    }

    sortedRooms = sortedRooms.filter((room) => room.price <= price);

    sortedRooms = sortedRooms.filter((room) => room.size >= minSize && room.size <= maxSize);

    if (breakfast) {
      sortedRooms = sortedRooms.filter((room) => room.breakfast === true);
    }
    if (pets) {
      sortedRooms = sortedRooms.filter((room) => room.pets === true);
    }
    this.setState({
      sortedRooms,
    });
  };

  render() {
    return <RoomContext.Provider value={{ ...this.state, getRoom: this.getRoom, handleChange: this.handleChange, filterRooms: this.filterRooms }}>{this.props.children}</RoomContext.Provider>;
  }
}

const RoomConsumer = RoomContext.Consumer;

export { RoomProvider, RoomConsumer, RoomContext };
