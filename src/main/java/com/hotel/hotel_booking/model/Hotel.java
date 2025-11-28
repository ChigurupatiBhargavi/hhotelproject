package com.hotel.hotel_booking.model;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import java.util.List;

@Entity
@Table(name = "hotels")
public class Hotel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String location;
    private String description;

    @OneToMany(mappedBy = "hotel", cascade = CascadeType.ALL)
    @JsonManagedReference   // ✅ Prevent recursion
    private List<Room> rooms;

    // Constructors
    public Hotel() {}
    public Hotel(String name, String location, String description, List<Room> rooms) {
        this.name = name;
        this.location = location;
        this.description = description;
        this.rooms = rooms;
    }

    // Getters and Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getLocation() { return location; }
    public void setLocation(String location) { this.location = location; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public List<Room> getRooms() { return rooms; }
    public void setRooms(List<Room> rooms) { this.rooms = rooms; }
}
