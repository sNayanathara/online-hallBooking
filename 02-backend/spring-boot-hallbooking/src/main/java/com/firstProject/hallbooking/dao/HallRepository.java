package com.firstProject.hallbooking.dao;

import com.firstProject.hallbooking.entity.Hall;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin("http://localhost:4200")
public interface HallRepository extends JpaRepository<Hall, Integer> {
}
