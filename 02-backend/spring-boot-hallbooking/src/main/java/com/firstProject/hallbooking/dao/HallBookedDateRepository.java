package com.firstProject.hallbooking.dao;


import com.firstProject.hallbooking.entity.Hall;
import com.firstProject.hallbooking.entity.HallBookedDate;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

@CrossOrigin("http://localhost:4200")
@RepositoryRestResource(collectionResourceRel = "hallBookedDate", path = "hall-booked-date")
public interface HallBookedDateRepository extends JpaRepository<HallBookedDate, Integer> {

//   List<HallBookedDate> findAllById(@Param("hallId") Iterable<Integer> hallId);
//    List<HallBookedDate> findAll();
}
