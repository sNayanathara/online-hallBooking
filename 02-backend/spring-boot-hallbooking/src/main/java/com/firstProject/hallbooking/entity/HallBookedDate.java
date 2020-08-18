package com.firstProject.hallbooking.entity;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "hall_booked_details")
//@Data
@Setter
@Getter
public class HallBookedDate {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @ManyToOne
    @JoinColumn(name = "hall_id", nullable = false)
    private Hall hallId;

    @Column(name = "booked_date")
    //@CreationTimestamp
    private Date bookedDate;


}
