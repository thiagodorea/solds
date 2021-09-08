package com.tdorea.vendeu.repositories;

import com.tdorea.vendeu.entities.Sale;

import org.springframework.data.jpa.repository.JpaRepository;

public interface SaleRepository extends JpaRepository<Sale, Long>{
    
}
