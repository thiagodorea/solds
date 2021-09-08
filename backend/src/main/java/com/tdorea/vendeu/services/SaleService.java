package com.tdorea.vendeu.services;

import java.util.List;

import com.tdorea.vendeu.dto.SaleDTO;
import com.tdorea.vendeu.dto.SaleSuccessDTO;
import com.tdorea.vendeu.dto.SaleSumDTO;
import com.tdorea.vendeu.entities.Sale;
import com.tdorea.vendeu.repositories.SaleRepository;
import com.tdorea.vendeu.repositories.SellerRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class SaleService {

    @Autowired
    private SaleRepository saleRepository;

    @Autowired
    private SellerRepository sellerRepository;

    @Transactional(readOnly = true) // Garante que todas as requisições sejam feitas no service e o readOnly true impedi o look no banco para operações somente leitura
    public Page<SaleDTO> findAll(Pageable pageable) {
        sellerRepository.findAll();// Essa busca evita que o JPA realize varias chamadas ao bando de dados, isso funciona para uma lista pequena.
        Page<Sale> result = saleRepository.findAll(pageable);
        return result.map(x -> new SaleDTO(x));
    };

    @Transactional(readOnly = true)
    public List<SaleSumDTO> amountGroupedBySeller() {
        return saleRepository.amountGroupedBySeller();
    }

    @Transactional(readOnly = true)
    public List<SaleSuccessDTO> successGroupedBySeller() {
        return saleRepository.successGroupedBySeller();
    }
}
