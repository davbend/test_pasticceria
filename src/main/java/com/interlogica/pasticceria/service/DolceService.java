package com.interlogica.pasticceria.service;

import com.interlogica.pasticceria.dolce.Dolce;

import java.util.List;

public interface DolceService {

    List<Dolce> getAllDolci();

    Dolce addDolce(Dolce dolce);
    
    Dolce findById(Long id);

    Dolce updateDolce(Dolce dolce, Long id);

    String deleteDolce(Long id);
}
