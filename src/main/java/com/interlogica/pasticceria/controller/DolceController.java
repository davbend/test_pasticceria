package com.interlogica.pasticceria.controller;

import com.interlogica.pasticceria.dolce.Dolce;
import com.interlogica.pasticceria.service.DolceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class DolceController {
    @Autowired
    private final DolceService dolceService;

    public DolceController(DolceService dolceService) {
        this.dolceService = dolceService;
    }

    @GetMapping("/dolci")
    public List<Dolce> getAllDolci() {
        return dolceService.getAllDolci();
    }

    @PostMapping("/dolce")
    public String addDolce(@RequestBody Dolce dolce) {
        dolceService.addDolce(dolce);
        return "Nuovo dolce aggiunto";
    }
    
    @GetMapping("/dolce/{id}")
    Dolce getDolceById(@PathVariable Long id) {
        return dolceService.findById(id);
    }

    @PutMapping("/dolce/{id}")
    Dolce updateDolce(@RequestBody Dolce dolce, @PathVariable Long id) {
        return dolceService.updateDolce(dolce, id);
    }

    @DeleteMapping("/dolce/{id}")
    String deleteDolce(@PathVariable Long id) {
        return dolceService.deleteDolce(id);
    }
}
