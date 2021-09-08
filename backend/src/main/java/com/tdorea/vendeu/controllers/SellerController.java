package com.tdorea.vendeu.controllers;

import java.util.List;

import com.tdorea.vendeu.dto.SellerDTO;
import com.tdorea.vendeu.services.SellerService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/vendedores")
public class SellerController {
    
    @Autowired
    private SellerService sellerService;

    @GetMapping
    public ResponseEntity<List<SellerDTO>> findAll(){
        List<SellerDTO> list = sellerService.findAll();
        return ResponseEntity.ok(list);
    }
}
