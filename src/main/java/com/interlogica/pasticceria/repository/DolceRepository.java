package com.interlogica.pasticceria.repository;

import com.interlogica.pasticceria.dolce.Dolce;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DolceRepository extends JpaRepository<Dolce, Long> {
}
