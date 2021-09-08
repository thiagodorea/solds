package com.tdorea.vendeu.services;

import java.util.List;
import java.util.stream.Collectors;

import com.tdorea.vendeu.dto.SellerDTO;
import com.tdorea.vendeu.entities.Seller;
import com.tdorea.vendeu.repositories.SellerRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SellerService {

    @Autowired
    private SellerRepository sellerRepository;

    public List<SellerDTO> findAll() {
        List<Seller> result = sellerRepository.findAll();
        return result.stream().map(x -> new SellerDTO(x)).collect(Collectors.toList());
    };
}
