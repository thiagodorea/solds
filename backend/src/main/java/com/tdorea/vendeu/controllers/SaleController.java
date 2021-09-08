package com.tdorea.vendeu.controllers;

import java.util.List;

import com.tdorea.vendeu.dto.SaleDTO;
import com.tdorea.vendeu.dto.SaleSuccessDTO;
import com.tdorea.vendeu.dto.SaleSumDTO;
import com.tdorea.vendeu.services.SaleService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/vendas")
public class SaleController {
    
    @Autowired
    private SaleService saleService;

    @GetMapping
    public ResponseEntity<Page<SaleDTO>> findAll(Pageable pageable){
        Page<SaleDTO> list = saleService.findAll(pageable);
        return ResponseEntity.ok(list);
    }

    @GetMapping(value = "/soma-por-vendedor")
    public ResponseEntity<List<SaleSumDTO>> amountGroupedBySeller(){
        List<SaleSumDTO> list = saleService.amountGroupedBySeller();
        return ResponseEntity.ok(list);
    }

    @GetMapping(value = "/sucesso-por-vendedor")
    public ResponseEntity<List<SaleSuccessDTO>> successGroupedBySeller(){
        List<SaleSuccessDTO> list = saleService.successGroupedBySeller();
        return ResponseEntity.ok(list);
    }
}
