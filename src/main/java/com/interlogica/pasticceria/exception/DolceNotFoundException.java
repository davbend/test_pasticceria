package com.interlogica.pasticceria.exception;

public class DolceNotFoundException extends RuntimeException {
    public DolceNotFoundException(Long id) {
        super("Non è stato trovato il dolce con id " + id);
    }
}
