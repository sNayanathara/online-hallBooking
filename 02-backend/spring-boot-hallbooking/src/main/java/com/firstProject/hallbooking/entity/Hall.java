package com.firstProject.hallbooking.entity;

import lombok.Data;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "halls")
@Data
public class Hall {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
     private int id;

    @Column(name = "name")
     private String name;

    @Column(name = "description")
     private String description;

    @Column(name = "unit_price")
     private double unitPrice;

    @Column(name = "image_url")
     private  String imageUrl;

    @Column(name = "seating_capacity")
     private int seatingCapacity;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "hallId")
    private Set<HallBookedDate> hallBookedDates;
}
