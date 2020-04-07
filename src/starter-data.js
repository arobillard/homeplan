export const data = {
  users: {
    patti: {
      fName: "Patti",
      lName: "Robillard",
      role: "admin",
      userId: "robillard-patti"
    },
    hugh: {
      fName: "Hugh",
      lName: "Robillard",
      role: "admin",
      userId: "robillard-hugh"
    },
    adam: {
      fName: "Adam",
      lName: "Robillard",
      role: "admin",
      userId: "robillard-adam"
    },
    hannah: {
      fName: "Hannah",
      lName: "Brown",
      role: "admin",
      userId: "brown-hannah"
    }
  },
  rooms: {
    den: {
      desc: "A cozy den for hanging out in.",
      type: "den",
      roomId: "den"
    },
    kitchen: {
      desc: "A great place to cook food!",
      type: "kitchen",
      roomId: "kitchen"
    }
  },
  items: {
    ps4: {
      itemId: "playstation-4",
      itemName: "Playstation 4",
      owner: "robillard-adam"
    }
  },
  calendar: {
    1586538000: {
      time: 1586538000,
      title: "Andrew's Birthday Party",
      desc: "A fun and exciting birthday party",
      roomId: "den"
    },
    1589130000: {
      time: 1589130000,
      title: "Hannah's Birthday Party",
      desc: "A fun and exciting birthday party",
      roomId: "den"
    }
  },
  tasks: {
    dishes: {
      name: "Dishes",
      roomId: "kitchen",
      desc: "Do all of the dishes.",
      time: 1586372400,
      assigned: "robillard-adam"
    },
    garbage: {
      name: "Garbage",
      roomId: "kitchen",
      desc: "Take out the garbage.",
      time: 1586505600,
      assigned: "robillard-hugh"
    }
  }
}