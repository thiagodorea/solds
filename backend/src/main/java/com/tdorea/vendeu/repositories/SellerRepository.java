package com.tdorea.vendeu.repositories;

import com.tdorea.vendeu.entities.Seller;

import org.springframework.data.jpa.repository.JpaRepository;

public interface SellerRepository extends JpaRepository<Seller, Long>{
    
}
