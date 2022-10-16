package com.interlogica.pasticceria.service;

import com.interlogica.pasticceria.dolce.Dolce;
import com.interlogica.pasticceria.exception.DolceNotFoundException;
import com.interlogica.pasticceria.repository.DolceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

@Service
public class DolceServiceImpl implements DolceService {

    @Autowired
    private final DolceRepository dolceRepository;

    public DolceServiceImpl(DolceRepository dolceRepository) {
        this.dolceRepository = dolceRepository;
    }

    @Override
    public List<Dolce> getAllDolci() {
        List<Dolce> dolci = dolceRepository.findAll();
        for (Dolce dolce : dolci) {
            updatePrezzo(dolce);
        }
        return dolci;
    }

    @Override
    public Dolce addDolce(Dolce dolce) {
        return dolceRepository.save(dolce);
    }

    @Override
    public Dolce findById(Long id) {
        Dolce dolce = dolceRepository.findById(id).orElseThrow(() -> new DolceNotFoundException(id));
        updatePrezzo(dolce);
        return dolce;
    }

    private void updatePrezzo(Dolce dolce) {
        try {
            Long currDate = new Date().getTime();
            Long insDate = (new SimpleDateFormat("yyyy-MM-dd").parse(dolce.getData())).getTime();
            Long dayDiff = (currDate - insDate) / (24 * 3600 * 1000);
            
            switch (dayDiff.intValue()) {
                case 0:
                    break;
                case 1:
                    dolce.setPrezzo(dolce.getPrezzo() * 0.8f);
                    break;
                case 2:
                    dolce.setPrezzo(dolce.getPrezzo() * 0.5f);
                    break;
                case 3:
                    dolce.setPrezzo(dolce.getPrezzo() * 0.2f);
                    break;
                case 4:
                default:
                    dolce.setPrezzo(-1f);
            }
        } catch (ParseException p) {
            throw new IllegalStateException("Errore nella lettura della data " + p.getMessage());
        }
    }

    @Override
    public Dolce updateDolce(Dolce newDolce, Long id) {
        return dolceRepository.findById(id).map(dolce -> {
            dolce.setNome(newDolce.getNome());
            dolce.setData(newDolce.getData());
            dolce.setPrezzo(newDolce.getPrezzo());
            dolce.setIngredienti(newDolce.getIngredienti());
            return dolceRepository.save(dolce);
        }).orElseThrow(() -> new DolceNotFoundException(id));
    }

    public String deleteDolce(Long id) {
        if (!dolceRepository.existsById(id)) {
            throw new IllegalStateException("Il dolce non esiste");
        }

        dolceRepository.deleteById(id);
        return "Il dolce con id " + id + " è stato eliminato con successo.";
    }
}
